import type { Metadata } from "next";
import WordPressHostingPage from "@/components/hosting/WordPressHostingPage";

export const metadata: Metadata = {
  alternates: { canonical: '/hosting/wordpress-hosting' },
  title: "WordPress Hosting Plans | ZTERABYTE",
  description:
    "Explore WordPress hosting plans from ZTERABYTE for personal websites, businesses and growing projects. Contact our team for plan pricing and details.",
};

export default function WordPressHostingRoute() {
  return <WordPressHostingPage />;
}
