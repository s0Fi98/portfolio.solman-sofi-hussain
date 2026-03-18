import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./sidebar/page";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Solman Sofi Hussain - Portfolio",
  description: "Personal portfolio of Solman Sofi Hussain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/image/edited.me.jpg"/>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        <div className="flex flex-row w-full h-screen overflow-hidden">
          <Sidebar className="w-1/5 min-h-screen fixed" />
          <div className="flex flex-col w-4/5 h-full font-body text-black overflow-y-scroll overflow-x-hidden scroll-smooth bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
            <div className="flex w-full flex-grow ml-1">

              {children}

            </div>
            <div className="flex w-full mt-auto ml-1">
              <Footer />
            </div>
          </div>
        </div>

      </body>
    </html>
  );
}
