import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";


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
   <ClerkProvider>


    <html lang="en">
      <body
        className={`${inter.className}`}
      >
    
<Header/>


     <main className="min-h-screen">
     {children}
      </main> 
      <Toaster richColors />
      <footer className="bg-blue-50 py-12" >

        <div className="container mx-auto px-4 text-center text-gray-600">

        Made With ❤️ By Vishal Shukla
        </div>
        </footer>  
      
      </body>
    </html>
    </ClerkProvider>
  );
}
