import { redirect } from "next/navigation";
import { auth, clerkClient } from "@clerk/nextjs/server";

import FoodSection from "@/components/food-section";
import FoodItemAddModal from "@/components/food-item-add-modal";

export default async function DashboardPage() {
  const { userId } = await auth();

  const clerk = await clerkClient();
  const org = await clerk.organizations.getOrganizationMembershipList({
    organizationId: "org_2tf8jzxi63PY0Ei0NETyTYFPzs9",
  });

  if (org.data[0].publicUserData?.userId !== userId) {
    return redirect("/");
  }

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
