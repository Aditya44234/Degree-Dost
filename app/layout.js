import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./notes.css"; 
import "./mobile.css"; 

import Header from '@/Components/Header'
import NewsLetter from "@/Components/NewsLetter";
   



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Degree Dost",
  description: "Developed by AJ & Suraj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <Header/> 
        {children}
        <NewsLetter/>
      </body>
    </html>
  );
}
