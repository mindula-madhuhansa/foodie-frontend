import axios from "axios";

import FoodItem from "@/components/food-item";
import DashboardFoodItem from "@/components/dashboard-food-item";

export default async function FoodSection({
  isDashboard = false,
}: {
  isDashboard?: boolean;
}) {
  const foodItems = await axios
    .get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food-items`)
    .then((res) => res.data)
    .catch((err) => console.error(err));

  return (
    <section className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {foodItems.length > 0 ? (
        foodItems.map((foodItem: FoodItem) =>
          isDashboard ? (
            <DashboardFoodItem key={foodItem.id} foodItem={foodItem} />
          ) : (
            <FoodItem key={foodItem.id} foodItem={foodItem} />
          )
        )
      ) : (
        <p className="text-muted-foreground">No food items found</p>
      )}
    </section>
  );
}
