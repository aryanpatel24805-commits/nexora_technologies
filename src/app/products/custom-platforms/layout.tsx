import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Platforms | Akshay Infotech",
  description: "Build custom high-performance web applications, dashboard portals, and business engines tailored to your logic.",
  alternates: {
    canonical: "https://akshayinfotech.com/products/custom-platforms",
  },
  openGraph: {
    title: "Custom Platforms | Akshay Infotech",
    description: "Build custom high-performance web applications, dashboard portals, and business engines tailored to your logic.",
    url: "https://akshayinfotech.com/products/custom-platforms",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Platforms | Akshay Infotech",
    description: "Build custom high-performance web applications, dashboard portals, and business engines tailored to your logic.",
  },
};

export default function CustomPlatformsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
