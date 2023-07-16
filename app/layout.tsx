import { Header, Nav, TopLeftImg } from "@/components";
import "./globals.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer, toast } from "react-toastify";
import type { Metadata } from "next";
import { Inter, Sora, Pacifico } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const sora = Sora({
  subsets: ["latin"],
  // varible: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  variable: "--font-pacifico",
  // varible: "--font-sora",
  weight: "400",
  // weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
  // console.log(pacifico.className);
  return (
    <html lang="en">
      <body
        className={`${inter.className} page  relative font-sora  bg-cover bg-site text-white bg-no-reapte`}
      >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </body>
    </html>
  );
}
