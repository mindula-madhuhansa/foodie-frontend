import Image from "next/image";
import { ShoppingCartIcon, StarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function FoodItem({ foodItem }: { foodItem: FoodItem }) {
  return (
    <div
      key={foodItem.name}
      className="flex flex-col md:flex-row gap-0 md:gap-4 bg-gray-100 p-4 rounded-lg shadow-md border md:hover:scale-[1.02] transition-all"
    >
      <Image
        className="w-full h-48 md:size-48 object-cover rounded-lg"
        width={1024}
        height={1024}
        src={foodItem.imgUrl ?? "/assets/images/dish.png"}
        alt={foodItem.name}
      />

      <div className="flex flex-col justify-between gap-2 w-full">
        <div>
          <div className="flex justify-between items-center gap-2">
            <h3 className="font-medium capitalize">{foodItem.name}</h3>

            <div className="flex items-center gap-2 text-xs">
              <StarIcon className="size-4 text-yellow-400 fill-current" />
              <p>4.8</p>
            </div>
          </div>

          <p className="mt-4 text-gray-500 text-sm line-clamp-2 capitalize">
            {foodItem.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">
            {foodItem.price.toLocaleString("en-US", {
              style: "currency",
              currency: "LKR",
            })}
          </p>
          <Button className="py-2 px-4 [&_svg]:size-5">
            <ShoppingCartIcon />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
