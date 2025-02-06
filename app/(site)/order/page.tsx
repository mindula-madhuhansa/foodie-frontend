"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeCheck, Clock, XCircle } from "lucide-react";

type Order = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  quantity: number;
  orderDate: string;
  status: string;
};

const sampleOrders = [
  {
    id: 1,
    name: "Spicy Garlic Ramen",
    price: 12.99,
    imgUrl: "/assets/images/dish_1.png",
    quantity: 1,
    orderDate: "2024-02-10",
    status: "Processing",
  },
  {
    id: 2,
    name: "Classic Margherita Pizza",
    price: 10.99,
    imgUrl: "/assets/images/dish_2.jpg",
    quantity: 1,
    orderDate: "2024-02-09",
    status: "Delivered",
  },
];

export default function OrderPage() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    setOrders(sampleOrders);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered":
        return "text-green-600 bg-green-100";
      case "Processing":
        return "text-yellow-600 bg-yellow-100";
      case "Cancelled":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Your Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">
          You have no orders yet.{" "}
          <Link href="/" className="text-primary hover:underline">
            Go back to menu
          </Link>
        </p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="p-4 border rounded-lg shadow-sm">
              {/* Order Details */}
              <div className="flex items-center gap-4">
                <Image
                  src={order.imgUrl}
                  alt={order.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-medium">{order.name}</h2>
                  <p className="text-gray-500">${order.price.toFixed(2)}</p>
                  <p className="text-sm text-gray-500">
                    Ordered on: {order.orderDate}
                  </p>
                </div>

                {/* Order Status */}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status === "Delivered" && (
                    <BadgeCheck className="inline w-4 h-4 mr-1" />
                  )}
                  {order.status === "Processing" && (
                    <Clock className="inline w-4 h-4 mr-1" />
                  )}
                  {order.status === "Cancelled" && (
                    <XCircle className="inline w-4 h-4 mr-1" />
                  )}
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
