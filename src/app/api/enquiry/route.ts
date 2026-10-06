import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { resolveTrustedPlanPrice } from "@/data/trustedPlanPricing";

/**
 * Escape user-provided values before putting them into HTML email.
 */
function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Clean incoming values.
 */
function cleanValue(value: unknown): string {
  return String(value ?? "").trim();
}

/**
 * SMTP transporter
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    // --------------------------------
    // Check SMTP configuration
    // --------------------------------
    if (
      !process.env.SMTP_HOST ||
      !process.env.SMTP_USER ||
      !process.env.SMTP_PASSWORD ||
      !process.env.ENQUIRY_TO_EMAIL
    ) {
      console.error("SMTP configuration is incomplete.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured correctly.",
        },
        { status: 500 }
      );
    }

    // --------------------------------
    // Read request body
    // --------------------------------
    const body = await request.json();

    const name = cleanValue(body.name);
    const company = cleanValue(body.company);
    const address = cleanValue(body.address);
    const domain = cleanValue(body.domain);
    const phone = cleanValue(body.phone);
    const email = cleanValue(body.email);
    const service = cleanValue(body.service);
    const plan = cleanValue(body.plan);
    const requestedBilling = cleanValue(body.billing);
    const isDomainRegistration = service === "Domain Registration";
    const trustedPrice = isDomainRegistration
      ? ""
      : resolveTrustedPlanPrice(service, plan, requestedBilling);

    if (!isDomainRegistration && trustedPrice === null) {
      return NextResponse.json(
        { success: false, message: "Selected plan or billing option is invalid." },
        { status: 400 }
      );
    }

    if (isDomainRegistration && (!domain || plan !== domain)) {
      return NextResponse.json(
        { success: false, message: "Selected domain is invalid." },
        { status: 400 }
      );
    }

    const price = trustedPrice || "";
    const billing = isDomainRegistration ? "Domain registration" : requestedBilling;
    // Never trust the message sent by the browser; construct it from validated fields.
    const message = isDomainRegistration
      ? `Customer requested registration for ${domain}.`
      : `Customer enquiry for ${service} ${plan} at ${price} (${billing}).`;

    const features = Array.isArray(body.features)
      ? body.features
          .map((feature: unknown) => cleanValue(feature))
          .filter(Boolean)
      : [];

    // --------------------------------
    // Validation
    // --------------------------------
    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required.",
        },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        {
          success: false,
          message: "Name is too long.",
        },
        { status: 400 }
      );
    }

    if (email.length > 150) {
      return NextResponse.json(
        {
          success: false,
          message: "Email address is too long.",
        },
        { status: 400 }
      );
    }

    if (phone.length > 30) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number is too long.",
        },
        { status: 400 }
      );
    }

    if (message.length > 3000) {
      return NextResponse.json(
        {
          success: false,
          message: "Message is too long.",
        },
        { status: 400 }
      );
    }

    // --------------------------------
    // Escape HTML values
    // --------------------------------
    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeAddress = escapeHtml(address);
    const safeDomain = escapeHtml(domain);
    const safePhone = escapeHtml(phone);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const safeService = escapeHtml(service);
    const safePlan = escapeHtml(plan);
    const safePrice = escapeHtml(price);
    const safeBilling = escapeHtml(billing);

    // --------------------------------
    // Features
    // --------------------------------
    const safeFeatures = features
      .map(
        (feature: string, index: number) => `
          <tr>
            <td style="
              width:42px;
              padding:10px 8px;
              border-bottom:1px solid #e5e7eb;
              vertical-align:top;
              text-align:center;
            ">
              <span style="
                display:inline-block;
                width:22px;
                height:22px;
                line-height:22px;
                background:#eaf6ff;
                color:#006cb5;
                font-size:13px;
                font-weight:700;
                border-radius:50%;
              ">
                ${index + 1}
              </span>
            </td>

            <td style="
              padding:10px 8px;
              border-bottom:1px solid #e5e7eb;
              color:#334155;
              font-size:14px;
              font-weight:500;
              line-height:1.5;
              vertical-align:middle;
            ">
              ${escapeHtml(feature)}
            </td>
          </tr>
        `
      )
      .join("");

    // --------------------------------
    // Send Email
    // --------------------------------
    await transporter.sendMail({
      from: `"ZTERABYTE Website" <${process.env.SMTP_USER}>`,
      to: process.env.ENQUIRY_TO_EMAIL,
      replyTo: email,

      subject: `New Order Enquiry | ${
        service || "Website"
      } | ${plan || "Plan"}`,

      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>ZTERABYTE - New Order Enquiry</title>
</head>

<body style="
  margin:0;
  padding:0;
  background:#eef3f7;
  font-family:Arial, Helvetica, sans-serif;
  color:#1e293b;
">

  <!-- Outer Container -->
  <table
    role="presentation"
    width="100%"
    cellspacing="0"
    cellpadding="0"
    border="0"
    style="
      width:100%;
      background:#eef3f7;
      margin:0;
      padding:0;
    "
  >

    <tr>
      <td align="center" style="padding:35px 15px;">

        <!-- Main Email -->
        <table
          role="presentation"
          width="700"
          cellspacing="0"
          cellpadding="0"
          border="0"
          style="
            width:100%;
            max-width:700px;
            background:#ffffff;
            border-radius:14px;
            overflow:hidden;
            box-shadow:0 5px 25px rgba(7,24,39,0.08);
          "
        >

          <!-- ===================================
               HEADER
          ==================================== -->

          <tr>
            <td
              align="center"
              style="
                background:#071827;
                padding:32px 25px;
              "
            >

              <div style="
                color:#53A6FF;
                font-size:30px;
                line-height:38px;
                font-weight:800;
                letter-spacing:0.5px;
              ">
                ZTERABYTE
              </div>

              <div style="
                margin-top:6px;
                color:#ffffff;
                font-size:13px;
                line-height:20px;
                font-weight:500;
                letter-spacing:0.4px;
              ">
                DIGITAL SOLUTIONS FOR YOUR BUSINESS
              </div>

            </td>
          </tr>

          <!-- ===================================
               TITLE
          ==================================== -->

          <tr>
            <td style="padding:30px 30px 10px;">

              <div style="
                display:inline-block;
                background:#eaf6ff;
                color:#006cb5;
                padding:7px 13px;
                border-radius:20px;
                font-size:12px;
                line-height:18px;
                font-weight:700;
                text-transform:uppercase;
                letter-spacing:0.5px;
              ">
                New Order Enquiry
              </div>

              <h1 style="
                margin:14px 0 8px;
                color:#071827;
                font-size:26px;
                line-height:34px;
                font-weight:800;
              ">
                New customer enquiry received
              </h1>

              <p style="
                margin:0;
                color:#64748b;
                font-size:14px;
                line-height:22px;
                font-weight:400;
              ">
                A customer has submitted an enquiry through your
                ZTERABYTE website.
              </p>

            </td>
          </tr>

          <!-- ===================================
               ORDER SUMMARY
          ==================================== -->

          <tr>
            <td style="padding:20px 30px 10px;">

              <div style="
                color:#071827;
                font-size:17px;
                line-height:24px;
                font-weight:800;
                margin-bottom:12px;
              ">
                Order Summary
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  border:1px solid #dbe5ec;
                  border-radius:10px;
                  overflow:hidden;
                "
              >

                <tr>
                  <td style="
                    width:35%;
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Service
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#071827;
                    font-size:14px;
                    font-weight:700;
                  ">
                    ${safeService || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Plan
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#006cb5;
                    font-size:15px;
                    font-weight:800;
                  ">
                    ${safePlan || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Price
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#006cb5;
                    font-size:16px;
                    font-weight:800;
                  ">
                    ${safePrice || "-"}
                  </td>
                </tr>

                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Billing
                  </td>

                  <td style="
                    padding:12px 14px;
                    color:#071827;
                    font-size:14px;
                    font-weight:600;
                  ">
                    ${safeBilling || "-"}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- ===================================
               FEATURES
          ==================================== -->

          ${
            features.length > 0
              ? `
          <tr>
            <td style="padding:25px 30px 10px;">

              <div style="
                color:#071827;
                font-size:17px;
                line-height:24px;
                font-weight:800;
                margin-bottom:12px;
              ">
                Plan Features
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  border:1px solid #dbe5ec;
                  background:#ffffff;
                  border-radius:10px;
                  overflow:hidden;
                "
              >

                ${safeFeatures}

              </table>

            </td>
          </tr>
          `
              : ""
          }

          <!-- ===================================
               CUSTOMER INFORMATION
          ==================================== -->

          <tr>
            <td style="padding:25px 30px 10px;">

              <div style="
                color:#071827;
                font-size:17px;
                line-height:24px;
                font-weight:800;
                margin-bottom:12px;
              ">
                Customer Information
              </div>

              <table
                role="presentation"
                width="100%"
                cellspacing="0"
                cellpadding="0"
                border="0"
                style="
                  width:100%;
                  border:1px solid #dbe5ec;
                  border-radius:10px;
                  overflow:hidden;
                "
              >

                <!-- Name -->
                <tr>
                  <td style="
                    width:35%;
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Name
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#071827;
                    font-size:14px;
                    font-weight:700;
                  ">
                    ${safeName}
                  </td>
                </tr>

                <!-- Company -->
                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Company
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#334155;
                    font-size:14px;
                    font-weight:500;
                  ">
                    ${safeCompany || "-"}
                  </td>
                </tr>

                <!-- Address -->
                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Address
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#334155;
                    font-size:14px;
                    font-weight:500;
                  ">
                    ${safeAddress || "-"}
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Email
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#006cb5;
                    font-size:14px;
                    font-weight:700;
                  ">
                    ${safeEmail}
                  </td>
                </tr>

                <!-- Phone -->
                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    border-bottom:1px solid #e2e8f0;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Phone
                  </td>

                  <td style="
                    padding:12px 14px;
                    border-bottom:1px solid #e2e8f0;
                    color:#071827;
                    font-size:14px;
                    font-weight:700;
                  ">
                    ${safePhone}
                  </td>
                </tr>

                <!-- Domain -->
                <tr>
                  <td style="
                    padding:12px 14px;
                    background:#f7fafc;
                    color:#64748b;
                    font-size:13px;
                    font-weight:700;
                  ">
                    Domain
                  </td>

                  <td style="
                    padding:12px 14px;
                    color:#334155;
                    font-size:14px;
                    font-weight:600;
                  ">
                    ${safeDomain || "-"}
                  </td>
                </tr>

              </table>

            </td>
          </tr>

          <!-- ===================================
               CUSTOMER MESSAGE
          ==================================== -->

          ${
            message
              ? `
          <tr>
            <td style="padding:25px 30px 30px;">

              <div style="
                color:#071827;
                font-size:17px;
                line-height:24px;
                font-weight:800;
                margin-bottom:12px;
              ">
                Customer Message
              </div>

              <div style="
                background:#f7fafc;
                border-left:4px solid #006cb5;
                border-radius:6px;
                padding:16px 18px;
                color:#334155;
                font-size:14px;
                line-height:23px;
                font-weight:400;
                white-space:pre-wrap;
              ">
                ${safeMessage}
              </div>

            </td>
          </tr>
          `
              : ""
          }

          <!-- ===================================
               FOOTER
          ==================================== -->

          <tr>
            <td
              align="center"
              style="
                background:#071827;
                padding:25px 20px;
              "
            >

              <div style="
                color:#53A6FF;
                font-size:18px;
                line-height:24px;
                font-weight:800;
              ">
                ZTERABYTE
              </div>

              <div style="
                margin-top:6px;
                color:#cbd5e1;
                font-size:12px;
                line-height:20px;
                font-weight:400;
              ">
                We Build Digital Success For Your Business
              </div>

              <div style="
                margin-top:12px;
                color:#94a3b8;
                font-size:11px;
                line-height:18px;
              ">
                This enquiry was submitted from the ZTERABYTE website.
              </div>

            </td>
          </tr>

        </table>

      </td>
    </tr>

  </table>

</body>
</html>
      `,
    });

    // Send the customer a copy of the submitted enquiry and selected plan.
    let customerConfirmationSent = false;
    try {
      await transporter.sendMail({
        from: `"ZTERABYTE" <${process.env.SMTP_USER}>`,
        to: email,
        replyTo: process.env.ENQUIRY_TO_EMAIL,
        subject: "We received your ZTERABYTE enquiry",
        text: `Hi ${name},

Thank you for contacting ZTERABYTE. We have received your enquiry and our team will get in touch with you.

Order details
Service: ${service}
Plan: ${plan}
Price: ${price || "To be confirmed"}
Billing: ${billing}
${features.length ? `Selected details:\n${features.map((feature: string) => `- ${feature}`).join("\n")}\n` : ""}
Your details
Name: ${name}
Company: ${company || "Not provided"}
Address: ${address || "Not provided"}
Email: ${email}
Phone: ${phone}
Domain: ${domain || "Not provided"}

Your message:
${message}

Regards,
ZTERABYTE Team`,
        html: `<!DOCTYPE html>
<html><body style="margin:0;padding:24px;background:#f3f6f9;font-family:Arial,Helvetica,sans-serif;color:#071827">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background:#fff;border-radius:14px;overflow:hidden">
    <tr><td style="padding:24px 30px;background:#071827;color:#fff"><div style="font-size:24px;font-weight:800;color:#53a6ff">ZTERABYTE</div><div style="margin-top:6px;font-size:13px;color:#cbd5e1">Enquiry confirmation</div></td></tr>
    <tr><td style="padding:28px 30px"><h1 style="margin:0 0 12px;font-size:22px">Thank you, ${safeName}!</h1><p style="margin:0 0 22px;color:#475569;line-height:1.6">We have received your enquiry. Our team will review the details and get in touch with you.</p>
      <h2 style="font-size:17px">Selected service</h2>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse">
        <tr><td style="padding:10px;background:#f7fafc;border-bottom:1px solid #e2e8f0">Service</td><td style="padding:10px;border-bottom:1px solid #e2e8f0">${safeService || "-"}</td></tr>
        <tr><td style="padding:10px;background:#f7fafc;border-bottom:1px solid #e2e8f0">Plan / Domain</td><td style="padding:10px;border-bottom:1px solid #e2e8f0">${safePlan || "-"}</td></tr>
        <tr><td style="padding:10px;background:#f7fafc;border-bottom:1px solid #e2e8f0">Price</td><td style="padding:10px;border-bottom:1px solid #e2e8f0">${safePrice || "To be confirmed"}</td></tr>
        <tr><td style="padding:10px;background:#f7fafc">Billing</td><td style="padding:10px">${safeBilling || "-"}</td></tr>
      </table>
      ${features.length ? `<h2 style="margin:24px 0 8px;font-size:17px">Selected details</h2><ul style="margin:0;padding-left:20px;color:#475569;line-height:1.7">${features.map((feature: string) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>` : ""}
      <h2 style="margin:24px 0 8px;font-size:17px">Your submitted details</h2>
      <p style="margin:0;color:#475569;line-height:1.7"><strong>Name:</strong> ${safeName}<br/><strong>Company:</strong> ${safeCompany || "Not provided"}<br/><strong>Address:</strong> ${safeAddress || "Not provided"}<br/><strong>Email:</strong> ${safeEmail}<br/><strong>Phone:</strong> ${safePhone}<br/><strong>Domain:</strong> ${safeDomain || "Not provided"}</p>
      <h2 style="margin:24px 0 8px;font-size:17px">Message</h2><p style="margin:0;padding:14px;background:#f7fafc;border-left:3px solid #006cb5;color:#475569;line-height:1.7;white-space:pre-wrap">${safeMessage}</p>
      <p style="margin:24px 0 0;color:#475569;line-height:1.6">Regards,<br/><strong>ZTERABYTE Team</strong></p>
    </td></tr>
  </table>
</body></html>`,
      });
      customerConfirmationSent = true;
    } catch (customerEmailError) {
      // The business has already received the enquiry; don't ask the customer
      // to resubmit and risk creating a duplicate if only confirmation failed.
      console.error("Customer enquiry confirmation email failed:", customerEmailError);
    }

    // --------------------------------
    // Success
    // --------------------------------
    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully.",
      customerConfirmationSent,
    });
  } catch (error) {
    console.error("Enquiry email error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to send enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
