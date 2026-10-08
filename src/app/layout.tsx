// import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";

// import Header from "@/components/layout/Header";
// import Footer from "@/components/layout/Footer";

// import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Zterabyte | Digital & Hosting Solutions",
//   description:
//     "Zterabyte provides domain registration, web hosting, email hosting, website development, design and digital marketing solutions.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//   lang="en"
//   data-scroll-behavior="smooth"
//   className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
// >
//       <body className="min-h-full flex flex-col" >

//         <Header />

//         <main className="flex-1">
//           {children}
//         </main>

//         <Footer />

//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NavigationProgress from "@/components/layout/NavigationProgress";
import WhatsAppChat from "@/components/common/WhatsAppChat";
import TawkChat from "@/components/TawkChat/TawkChat";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zterabyte.com"),

  title: {
    default:
      "Website Development & Digital Marketing Company in Kota | ZTERABYTE",
    template: "%s | ZTERABYTE",
  },

  description:
    "ZTERABYTE provides domain registration, web hosting, email hosting, website development, eCommerce development and digital marketing services in Kota and across India.",

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <NavigationProgress />

        {/* Google Tag Manager */}
        {GTM_ID && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
            >
              {`
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({
                    'gtm.start': new Date().getTime(),
                    event:'gtm.js'
                  });
                  var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),
                      dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${GTM_ID}');
              `}
            </Script>

            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
                height="0"
                width="0"
                style={{
                  display: "none",
                  visibility: "hidden",
                }}
              />
            </noscript>
          </>
        )}

        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp */}
        <WhatsAppChat />
        <TawkChat />
      </body>
    </html>
  );
}
