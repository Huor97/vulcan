import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "700"],
  style: ["italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vulcan International | Branding • Design • Architecture",
  description: "Creative Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* <Header /> */}
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
