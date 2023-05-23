import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import "./style.css";
import "./style1.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "teeth",
  description:
    "MediTro is a Fully Creative Mobile Responsive React Template. It is designed specifically for Clinic, Medical Health Center, Health Dental, Creative, Healthcare, Industry, Lifestyle, Blogging, meditation, Design",
  keywords:
    "Clinic, Medical Health Center, Health Dental, Creative, Healthcare, Industry, Lifestyle, Blogging, meditation, Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>



        {children}
        <Footer/>
        
        </body>
    </html>
  )
}
