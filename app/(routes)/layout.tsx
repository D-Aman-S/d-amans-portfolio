import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const firaCode = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Aman singh | Software Developer",
  description:
    "Software Developer with 2 years of experince in Web, Mobile and Games",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={firaCode.className}>
        <div
          className="flex flex-col items-center justify-between w-full h-full max-h-screen
            bg-mainDivColor rounded-lg border border-borderColor overflow-hidden "
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
