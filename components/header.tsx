import Link from "next/link";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";

import { checkAdmin } from "@/actions";

import Cart from "./cart";
import { Button } from "./ui/button";
import { LayoutDashboardIcon } from "lucide-react";

export default async function Header() {
  const user = await currentUser();

  const isAdmin = await checkAdmin();

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/assets/images/FOODIE_logo3.png"
          alt="Foodie Logo"
          width={1024}
          height={1024}
          className="size-10 object-contain"
          priority
          unoptimized
        />
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4 relative">
        {isAdmin && (
          <>
            <Button variant="ghost" className="hidden md:block" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="flex md:hidden [&_svg]:size-7]"
              asChild
            >
              <Link href="/dashboard">
                <LayoutDashboardIcon className="size-7" />
              </Link>
            </Button>
          </>
        )}

        <Cart />

        {user ? <UserButton /> : <SignInButton />}
      </div>
    </header>
  );
}
