import Link from "next/link";
import Image from "next/image";
import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const user = false;

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/">
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <ShoppingBagIcon className="w-7 h-7" />

        {user ? (
          <Image
            src="/assets/images/avatar.png"
            alt="Avatar"
            height={1024}
            width={1024}
            className="rounded-full border size-10 bg-primary cursor-pointer"
          />
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
