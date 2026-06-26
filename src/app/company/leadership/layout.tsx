import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership Team | Akshay Infotech",
  description: "Learn about the systems architects, designers, and developers leading Akshay Infotech's technical consulting division.",
  alternates: {
    canonical: "https://akshayinfotech.com/company/leadership",
  },
  openGraph: {
    title: "Leadership Team | Akshay Infotech",
    description: "Learn about the systems architects, designers, and developers leading Akshay Infotech's technical consulting division.",
    url: "https://akshayinfotech.com/company/leadership",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Team | Akshay Infotech",
    description: "Learn about the systems architects, designers, and developers leading Akshay Infotech's technical consulting division.",
  },
};

export default function LeadershipLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
