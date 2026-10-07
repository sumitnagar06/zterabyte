type PricePair = { regular: number; sale: number };

const limited: Record<string, PricePair> = {
  Starter: { regular: 1000, sale: 800 },
  Business: { regular: 1200, sale: 1000 },
  Premium: { regular: 2000, sale: 1800 },
};

const unlimited: Record<string, Record<string, PricePair>> = {
  India: {
    Business: { regular: 4000, sale: 3200 },
    Professional: { regular: 8800, sale: 7000 },
    Enterprise: { regular: 10600, sale: 8500 },
  },
  US: {
    Business: { regular: 3400, sale: 2720 },
    Professional: { regular: 8500, sale: 6800 },
    Enterprise: { regular: 10300, sale: 8200 },
  },
};

const wordpress: Record<string, PricePair> = {
  Starter: { regular: 6000, sale: 3900 },
  Performance: { regular: 7600, sale: 4940 },
  Business: { regular: 9000, sale: 5860 },
  Professional: { regular: 21900, sale: 14300 },
};

const emailRates: Record<string, Record<number, PricePair>> = {
  "Business Email Hosting": {
    1: { regular: 55, sale: 45 },
    3: { regular: 165, sale: 135 },
    5: { regular: 330, sale: 270 },
    12: { regular: 660, sale: 480 },
  },
  "Enterprise Email Hosting": {
    1: { regular: 100, sale: 89 },
    3: { regular: 300, sale: 249 },
    5: { regular: 600, sale: 399 },
    12: { regular: 1200, sale: 899 },
  },
};

const inr = (amount: number) => `₹${amount.toLocaleString("en-IN")}`;

/** Resolve enquiry pricing from server-owned plan prices, never from the browser. */
export function resolveTrustedPlanPrice(service: string, plan: string, billing: string) {
  let pair: PricePair | undefined;
  let suffix = "";

  if (service === "Limited Shared Hosting") {
    pair = limited[plan];
    suffix = "/Year";
  } else if (service.startsWith("Linux Shared Hosting - ")) {
    const region = service.endsWith("- India") ? "India" : service.endsWith("- US") ? "US" : "";
    pair = unlimited[region]?.[plan];
    suffix = "/year";
  } else if (service.startsWith("WordPress Hosting - ")) {
    if (!service.endsWith("- India") && !service.endsWith("- US")) return null;
    pair = wordpress[plan];
    suffix = "/year";
  } else if (service === "Business Email Hosting" || service === "Enterprise Email Hosting") {
    const accountCount = Number(plan.match(/- (\d+) Accounts?$/)?.[1]);
    const months = Number(billing.match(/^(1|3|5|12) Months?$/)?.[1]);
    const rate = emailRates[service]?.[months];
    if (!Number.isInteger(accountCount) || accountCount < 1 || accountCount > 200 || !rate) return null;
    pair = rate;
    const saleActive = service === "Business Email Hosting";
    return inr(accountCount * (saleActive ? rate.sale : rate.regular));
  } else {
    return null;
  }

  if (!pair) return null;
  return `${inr(pair.sale)}${suffix}`;
}
