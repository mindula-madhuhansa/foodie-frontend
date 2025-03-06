import axios from "axios";

import FoodItem from "@/components/food-item";

type SearchParamProps = {
  searchParams: Promise<{ query: string }>;
};

export default async function SearchResultPage({
  searchParams,
}: SearchParamProps) {
  const { query } = await searchParams;

  const foodItems = await axios
    .get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food-items/search?query=${query}`
    )
    .then((res) => res.data);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-medium">Seach results for {`"${query}"`}</h2>

      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((foodItem: FoodItem) => (
          <FoodItem key={foodItem.id} foodItem={foodItem} />
        ))}
      </section>
    </div>
  );
}
