import { ShoppingBagIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/">
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <ShoppingBagIcon className="w-8 h-8" />

        <Button>Sign In</Button>
      </div>
    </header>
  );
}
