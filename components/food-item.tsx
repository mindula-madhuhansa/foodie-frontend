import Link from "next/link";
import Image from "next/image";

export default function FoodItem({ foodItem }: { foodItem: FoodItem }) {
  return (
    <Link
      href={`/dish/${foodItem.id}`}
      key={foodItem.name}
      className="flex space-x-4 bg-gray-100 p-4 rounded-lg shadow-md border hover:scale-[1.02] transition-all"
    >
      <Image
        className="size-48 object-cover rounded-lg"
        width={1024}
        height={1024}
        src={foodItem.imgUrl ?? "/assets/images/dish.png"}
        alt={foodItem.name}
      />

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-medium capitalize">{foodItem.name}</h3>
        <p className="text-gray-500 text-sm line-clamp-1 capitalize">
          {foodItem.description}
        </p>
        <p className="text-gray-600">LKR {foodItem.price}</p>
      </div>
    </Link>
  );
}
