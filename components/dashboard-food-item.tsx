"use client";

import Image from "next/image";

import FoodItemEditModal from "./food-item-edit-modal";
import FoodItemDeleteModal from "./food-item-delete-modal";

export default function DashboardFoodItem({
  foodItem,
}: {
  foodItem: FoodItem;
}) {
  return (
    <div
      key={foodItem.name}
      className="flex flex-col bg-gray-100 p-4 rounded-lg"
    >
      <Image
        className="size-48 w-full object-cover rounded-lg"
        width={1024}
        height={1024}
        src={foodItem.imgUrl ?? "/assets/images/dish.png"}
        alt={foodItem.name}
      />

      <div className="flex justify-between items-center mt-4">
        <div className="space-y-1 flex-1">
          <h2 className="text-lg font-medium capitalize">{foodItem.name}</h2>
          <p className="text-sm text-muted-foreground capitalize line-clamp-1">
            {foodItem.description}
          </p>
          <p className="text-sm font-medium">
            {foodItem.price.toLocaleString("en-US", {
              style: "currency",
              currency: "LKR",
            })}
          </p>
        </div>

        <div className="space-x-2">
          <FoodItemEditModal foodItem={foodItem} />
          <FoodItemDeleteModal foodItem={foodItem} />
        </div>
      </div>
    </div>
  );
}
