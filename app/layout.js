import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter=Inter({subsets:["latin"]});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Vehiql",
  description: "Find your dream Car",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >

     <main className="min-h-screen">
     {children}
      </main> 
      <footer className="bg-blue-50 py-12" >

        <div className="container mx-auto px-4 text-center text-gray-600">

        Made With ❤️ By Vishal Shukla
        </div>
        </footer>  
      
      </body>
    </html>
  );
}
