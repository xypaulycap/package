import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Metadata } from "next";
import { ClientLayout } from "@/components/client-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MerVault Financial Group | Swiss Banking Solutions",
  description: "MerVault Financial Group is a premier financial banking institution in Switzerland offering worldwide banking solutions.",
  metadataBase: new URL("https://mervaultfingroup.com"),
  openGraph: {
    title: "MerVault Financial Group",
    description: "MerVault Financial Group is a premier financial banking institution in Switzerland offering worldwide banking solutions.",
    url: "https://mervaultfingroup.com",
    siteName: "MerVault Financial Group",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏦</text></svg>" />
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