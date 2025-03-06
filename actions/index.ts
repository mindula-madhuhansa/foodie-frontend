"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";
import { auth, clerkClient } from "@clerk/nextjs/server";

type FoodItemValuesTypes = {
  name: string;
  description: string;
  price: string;
  imgUrl: string;
  shopOwnerId: string;
};

type OrderValuesTypes = {
  userId: string;
  shopOwnerId: string;
  foodItemIds: string[];
  totalPrice: number;
  quantity: number;
  orderStatus: string;
  deliveryAddress: string;
  contactNumber: string;
};

export async function addFoodItem(values: FoodItemValuesTypes) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food-items`,
      {
        name: values.name,
        description: values.description,
        price: parseFloat(values.price),
        imgUrl: values.imgUrl,
        shopOwnerId: values.shopOwnerId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    revalidatePath("/dashboard");

    return response.data;
  } catch (error) {
    console.error("Failed to add food item:", error);
    throw error;
  }
}

export async function updateFoodItem(id: string, values: FoodItemValuesTypes) {
  try {
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food-items/${id}`,
      {
        name: values.name,
        description: values.description,
        price: parseFloat(values.price),
        imgUrl: values.imgUrl,
        shopOwnerId: values.shopOwnerId,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    revalidatePath("/dashboard");

    return response.data;
  } catch (error) {
    console.error("Failed to update food item:", error);
    throw error;
  }
}

export async function deleteFoodItem(id: string) {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/food-items/${id}`
    );

    revalidatePath("/dashboard");

    return response.data;
  } catch (error) {
    console.error("Failed to delete food item:", error);
    throw error;
  }
}

export async function addOrder(values: OrderValuesTypes) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/orders`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    revalidatePath("/cart");

    return response.data;
  } catch (error) {
    console.error("Failed to add order:", error);
    throw error;
  }
}

export async function checkAdmin() {
  const { userId } = await auth();
  const clerk = await clerkClient();
  const org = await clerk.organizations.getOrganizationMembershipList({
    organizationId: "org_2tf8jzxi63PY0Ei0NETyTYFPzs9",
  });

  const isAdmin = org.data.map(
    (member) => member.publicUserData?.userId === userId
  );

  if (isAdmin) {
    return true;
  } else {
    return false;
  }
}
