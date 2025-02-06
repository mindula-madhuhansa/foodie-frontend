import Link from "next/link";
import Image from "next/image";
import { ShoppingCartIcon } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import { SignInButton, UserButton } from "@clerk/nextjs";

export default async function Header() {
  const user = await currentUser();

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

      <div className="flex items-center space-x-4">
        <Link href="/cart">
          <ShoppingCartIcon className="size-7 text-gray-700 hover:text-primary transition" />
        </Link>

        {user ? <UserButton /> : <SignInButton />}
      </div>
    </header>
  );
}
