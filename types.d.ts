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
  imgUrl?: string;
  shopOwnerId?: string;
}
