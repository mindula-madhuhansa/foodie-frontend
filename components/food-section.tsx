import axios from "axios";

import FoodItem from "@/components/food-item";

export default async function FoodSection() {
  const foodItems = await axios
    .get(`${process.env.BACKEND_URL}/api/food-items`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return (
    <div className="py-12">
      <h2 className="text-3xl font-medium">Featured Dishes</h2>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems ? (
          foodItems.map((foodItem: FoodItem) => (
            <FoodItem key={foodItem.id} foodItem={foodItem} />
          ))
        ) : (
          <p className="text-center">No food items found</p>
        )}
      </section>
    </div>
  );
}
