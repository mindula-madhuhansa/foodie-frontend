"use client";

import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/auth-context";

export default function Header() {
  const { user, signOut } = useAuth();

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/">
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <ShoppingBagIcon className="w-7 h-7" />

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
