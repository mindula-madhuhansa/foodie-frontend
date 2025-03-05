"use client";

import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { useCart } from "@/context/cart-context";

export default function Cart() {
  const { totalItems } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartIcon className="size-7 text-gray-700 hover:text-primary transition" />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
          {totalItems}
        </span>
      )}
    </Link>
  );
}
