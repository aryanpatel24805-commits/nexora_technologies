import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Publications & Technical Insights | Akshay Infotech",
  description: "Deep-dives into modern web architectures, compliance-level security designs, and serverless compute deployments.",
  alternates: {
    canonical: "https://akshayinfotech.com/blog",
  },
  openGraph: {
    title: "Engineering Publications & Technical Insights | Akshay Infotech",
    description: "Deep-dives into modern web architectures, compliance-level security designs, and serverless compute deployments.",
    url: "https://akshayinfotech.com/blog",
    type: "website",
    siteName: "Akshay Infotech",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Publications & Technical Insights | Akshay Infotech",
    description: "Deep-dives into modern web architectures, compliance-level security designs, and serverless compute deployments.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
