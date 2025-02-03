import Link from "next/link";
import { ShoppingBagIcon, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Button } from "your-button-component"; // Assuming Button is imported elsewhere
import { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUserData = await currentUser();
      setUser(currentUserData);
    };

    fetchUser();
  }, []);

  return (
    <header className="flex items-center justify-between w-full max-w-screen-2xl mx-auto p-6 lg:p-12">
      <Link href="/" className="flex items-center space-x-3">
        <Image
          src="/assets/images/FOODIE_logo3.png"
          alt="Foodie Logo"
          width={50}
          height={50}
          className="h-10 w-auto object-contain"
          priority
          unoptimized
        />
        <h1 className="text-3xl font-bold tracking-wide">Foodie</h1>
      </Link>

      <div className="flex items-center space-x-4">
        <Link href="/order">
          <ShoppingBagIcon className="w-7 h-7 text-gray-700 hover:text-primary transition" />
        </Link>
        <Link href="/cart" className="relative">
          <ShoppingCartIcon className="w-7 h-7 text-gray-700 hover:text-primary transition" />
        </Link>

        {user ? (
          <>
            <p>{user.fullName}!</p>
            <Button onClick={() => signOut()}>Sign Out</Button>
          </>
        ) : (
          <>
            <Link href="/sign-in" className="hidden md:flex">
              <Button variant="secondary">Sign In</Button>
            </Link>
          </>
        )}

        <UserButton />
      </div>
    </header>
  );
}
