interface User {
  id?: string;
  fullName: string;
  email: string;
  password: string;
  role?: "USER" | "OWNER";
}

interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
  shopOwnerId?: string;
}

interface Order {
  id?: string;
  userId: string;
  shopOwnerId: string;
  foodItemIds: string[];
  totalPrice: number;
  quantity: number;
  status: "PENDING" | "COMPLETED" | "CANCELLED";
  deliveryAddress: string;
  contactNumber: string;
}
