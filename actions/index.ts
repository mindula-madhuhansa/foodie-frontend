"use server";

import axios from "axios";
import { revalidatePath } from "next/cache";

type ValuesTypes = {
  name: string;
  description: string;
  price: string;
  shopOwnerId: string;
};

export async function addFoodItem(values: ValuesTypes) {
  try {
    const response = await axios.post(
      "https://foodies-production.up.railway.app/api/food-items",
      {
        name: values.name,
        description: values.description,
        price: parseFloat(values.price),
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

export async function updateFoodItem(id: string, values: ValuesTypes) {
  try {
    const response = await axios.put(
      `https://foodies-production.up.railway.app/api/food-items/${id}`,
      {
        name: values.name,
        description: values.description,
        price: parseFloat(values.price),
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
      `https://foodies-production.up.railway.app/api/food-items/${id}`
    );

    revalidatePath("/dashboard");

    return response.data;
  } catch (error) {
    console.error("Failed to delete food item:", error);
    throw error;
  }
}
