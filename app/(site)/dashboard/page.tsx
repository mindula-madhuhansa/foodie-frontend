import FoodSection from "@/components/food-section";
import FoodItemAddModal from "@/components/food-item-add-modal";

export default async function DashboardPage() {
  return (
    <div>
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-3xl font-medium">Dashboard</h1>
        <FoodItemAddModal />
      </div>

      <FoodSection isDashboard={true} />
    </div>
  );
}
