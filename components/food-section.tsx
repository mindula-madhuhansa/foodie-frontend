import axios from "axios";
import FoodItem from "@/components/food-item";

export default async function FoodSection() {
  const foodItems = await axios
    .get("http://localhost:8080/api/food-items")
    .then((res) => res.data);

  return (
    <div className="py-12">
      <h2 className="text-3xl font-medium">Featured Dishes</h2>
      <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foodItems.map((foodItem: FoodItem) => (
          <FoodItem key={foodItem.id} foodItem={foodItem} />
        ))}
      </section>
    </div>
  );
}
