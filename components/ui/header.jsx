import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import {Button} from "../ui/button";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton
} from "@clerk/nextjs";
import { ArrowLeft, CarFront, Heart, Layout } from 'lucide-react';



export default function Header({isAdminPage=false}) {

  const isAdmin=false;
  return (
   <header className='fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b'>
    <nav className='mx-auto px-4 py-4 flex items-center justify-between '>
      <Link href={isAdminPage?"/admin":"/"} className='flex'>
      <Image src={"/logo.png"} alt="vehiql logo" width={200} height={60} className="h-12 w-auto object-cover"/>
{isAdminPage && (
  <span className='text-xs font-extralight'>
    admin
  </span>
)}

      </Link>
      <div className='flex items-center space-x-4'>
{isAdminPage ? (
    <Link href="/">
          <Button variant="outline" className="flex items-center gap-2">
            <ArrowLeft size={18}/>
           <span className='hidden md:inline'>Back To App</span>
          </Button>
          </Link>
)
:(

        <SignedIn>

          

          <Link href="/saved-cars">
          <Button>
            <Heart size={18}/>
           <span className='hidden md:inline'> Saved Cars</span>
          </Button>
          </Link>
          {!isAdmin ? (
            <Link href="/reservations">
          <Button variant="outline">
            <CarFront size={18}/>
           <span className='hidden md:inline'>My Reservations</span>
          </Button>
          </Link>):(
            <Link href="/admin">
          <Button variant="outline">
            <Layout size={18}/>
           <span className='hidden md:inline'>Admin Portal</span>
          </Button>
          </Link>)
          }


        </SignedIn>)}

        <SignedOut>
          <SignInButton forceRedirectUrl='/'>
          
          <Button varaint="outline">
            Login
          </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{elements:{
            avatarBox:"W-10 H-10",
          }}}/>

        
        </SignedIn>

      </div>
    </nav>
   </header>
  )
}
