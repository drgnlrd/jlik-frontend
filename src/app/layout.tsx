import type { Metadata } from "next";
import { Montserrat, Fira_Sans } from "next/font/google";
import { ClientLayout } from "@/components/ClientLayout";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { CookieConsent } from "@/components/CookieConsent";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JLIK Overseas Education - Study Abroad & Education Visa Consultancy",
  description:
    "Your trusted partner for overseas education and student visa consultancy. We help students achieve their dreams of studying at world-renowned universities.",
  keywords: [
    "overseas education",
    "student visa",
    "study abroad",
    "visa consultancy",
    "international education",
    "university admissions",
  ],
  authors: [{ name: "JLIK Overseas Education" }],
  creator: "JLIK Overseas Education",
  publisher: "JLIK Overseas Education",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jlikoverseas.com",
    siteName: "JLIK Overseas Education",
    title:
      "JLIK Overseas Education - Study Abroad & Education Visa Consultancy",
    description:
      "Your trusted partner for overseas education and student visa consultancy.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "JLIK Overseas Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "JLIK Overseas Education - Study Abroad & Education Visa Consultancy",
    description:
      "Your trusted partner for overseas education and student visa consultancy.",
    images: ["/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: "#ba394b",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${firaSans.variable}`}>
      <body>
        <ErrorBoundary>
          <ClientLayout>{children}</ClientLayout>
          <CookieConsent />
          <Toaster position="top-center" richColors />
        </ErrorBoundary>
      </body>
    </html>
  );
}
