import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/Navbar";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ecommerse",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className="dark bg-gray-100 text-gray-950 dark:bg-gray-950 dark:text-white">
        <NavBar />
          <div className='min-h-[90.9vh]'>
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
