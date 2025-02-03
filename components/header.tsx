import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default async function Header() {
  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/">
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <ShoppingBagIcon className="size-7" />

        <UserButton />
      </div>
    </header>
  );
}
