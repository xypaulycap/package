import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";
import { ClientLayout } from "@/components/client-layout";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  metadataBase: new URL("https://www.mervaultfingroup.com"),

  title: {
    default: "MerVault Financial Group | Swiss Banking Solutions",
    template: "%s | MerVault Financial Group",
  },

  icons: {
  icon: "/favbank.png",
  shortcut: "/favbank.png",
  apple: "/favbank.png",
},

  description:
    "Discover MerVault Financial Group and its financial services. Explore our banking solutions and available services.",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    url: "https://www.mervaultfingroup.com/",
    siteName: "MerVault Financial Group",
    title: "MerVault Financial Group | Swiss Banking Solutions",
    description:
      "Explore MerVault Financial Group's financial services and banking solutions.",
    images: [
      {
        url: "/favbank.png",
        width: 1200,
        height: 630,
        alt: "MerVault Financial Group",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "MerVault Financial Group | Swiss Banking Solutions",
    description:
      "Explore MerVault Financial Group's financial services and banking solutions.",
    images: ["/favbank.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/aquawolf04/font-awesome-pro@5cd1511/css/all.css"
        />
        
        <Script id="smartsupp-chat" strategy="afterInteractive">
          {`
            var _smartsupp = _smartsupp || {};
            _smartsupp.key = '5bf6649f729b7c0ac8be24e74c53987b2fedaef1';
            window.smartsupp||(function(d) {
              var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
              s=d.getElementsByTagName('script')[0];c=d.createElement('script');
              c.type='text/javascript';c.charset='utf-8';c.async=true;
              c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
            })(document);
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}



