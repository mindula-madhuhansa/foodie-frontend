import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

import FoodItem from "@/components/food-item";
import axios from "axios";

type SearchParamProps = {
  searchParams: { query: string };
};

export default async function SearchResultPage({
  searchParams,
}: SearchParamProps) {
  const { query } = await searchParams;

  const foodItems = await axios
    .get("http://localhost:8080/api/food-items")
    .then((res) => res.data);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-medium">Seach results for {`"${query}"`}</h2>

      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((foodItem: FoodItem) => (
          <FoodItem key={foodItem.id} foodItem={foodItem} />
        ))}
      </section>

      <Link
        href="/"
        className="text-primary font-medium flex items-center justify-end gap-3"
      >
        View More <ChevronRightIcon className="size-5" />
      </Link>
    </div>
  );
}
