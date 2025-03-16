import { Cormorant_Upright, Fira_Code, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Upright({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

// Add Inter font
const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Add Fira Mono (or Fira Code as it's available in Google Fonts)
const firaMono = Fira_Code({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-fira-mono",
  display: "swap",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.cdnfonts.com/css/ciutadella-trial"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${cormorant.variable} ${inter.variable} ${firaMono.variable} font-ciutadella antialiased`}
        style={{
          fontFamily: "'Ciutadella TRIAL', sans-serif",
          background: "#F5F5F5",
        }}
      >
        <section className="w-[1440px] mx-auto pt-10">{children}</section>
      </body>
    </html>
  );
}
