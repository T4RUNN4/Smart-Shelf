import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoginModal from "@/components/LoginModal";
import AddProductsModal from "@/components/AddProductsModal";
import { ToastContainer } from "react-toastify";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Smart Shelf",
  description:
    "An online shelf that tells you when you products getting expired",
};

export default function RootLayout({ children }) {
  return (
    <html
      data-theme="light"
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-base-200">
        <Navbar />
        <main className="py-10 px-40">{children}</main>
        <Footer />
        <LoginModal />
        <AddProductsModal />
        <ToastContainer />
      </body>
    </html>
  );
}
