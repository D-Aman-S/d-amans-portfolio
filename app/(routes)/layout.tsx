import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

const firaCode = Fira_Code({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={firaCode.className}>
        <div
          className="flex flex-col items-center justify-between w-full h-full 
            bg-mainDivColor rounded-lg border border-borderColor overflow-hidden"
        >
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
