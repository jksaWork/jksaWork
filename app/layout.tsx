import { Header, Nav, TopLeftImg } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
  // varible: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "Mohammed Altigani Osman",
  description: "Software Engnering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} page relative font-sora  bg-cover bg-site text-white bg-no-reapte`}
      >
        <TopLeftImg />
        <Nav />
        <Header />

        {children}
      </body>
    </html>
  );
}
