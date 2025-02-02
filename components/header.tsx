"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";


import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/" className="flex items-center space-x-3">
          
      <Image
          src="/assets/images/FOODIE_logo3.png"
          alt="Foodie Logo"
          width={50} // Adjust size as needed
          height={50}
          className="h-10 w-auto object-contain"
          priority
          unoptimized
        />

        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/order">
          <ShoppingBagIcon className="w-7 h-7  text-gray-700 hover:text-primary transition" />
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingCartIcon className="w-7 h-7 text-gray-700 hover:text-primary transition" />
        </Link>




        {user ? (
          <>
            <p>{user.fullName}!</p>

            <Button onClick={signOut}>Sign Out</Button>
          </>
        ) : (
          <>
            <Link href="/sign-in" className="hidden md:flex">
              <Button variant="secondary">Sign In</Button>
            </Link>

            <Link href="/sign-up">
              <Button>Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
