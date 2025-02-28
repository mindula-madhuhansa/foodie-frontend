"use client";

import Image from "next/image";
import { useState } from "react";
import { TrashIcon } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const initialCart = [
  {
    id: 1,
    name: "Spicy Noodles",
    price: 250,
    imgUrl: "/assets/images/dish_1.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Kottu",
    price: 650,
    imgUrl: "/assets/images/dish_3.jpg",
    quantity: 1,
  },
];

export default function CartPage() {
  const [cart, setCart] = useState(initialCart);
  const [pickup, setPickup] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("");

  const updateQuantity = (id: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border rounded-lg shadow-sm"
              >
                <Image
                  src={item.imgUrl}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 object-cover rounded-lg"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-medium">{item.name}</h2>
                  <p className="text-gray-500">Rs.{item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-2 py-1 border rounded-md"
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-2 py-1 border rounded-md"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <TrashIcon className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>

          {/* Total Amount */}
          <div className="mt-6 p-4 border rounded-lg shadow-sm text-right bg-primary">
            <h3 className="text-xl font-semibold ">
              Total: Rs {totalAmount.toFixed(2)}
            </h3>
          </div>

          {/* Checkout Form */}
          <div className="mt-8 border p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Checkout Details</h2>

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Name</Label>
                <Input type="text" placeholder="First Name" required />
              </div>
              <div>
                <Label>&nbsp;</Label>
                <Input type="text" placeholder="Last Name" required />
              </div>
            </div>

            {/* Email */}
            <div className="mt-4">
              <Label>Email</Label>
              <Input type="email" placeholder="example@email.com" required />
            </div>

            {/* Phone Number */}
            <div className="mt-4">
              <Label>Phone Number</Label>
              <Input type="tel" placeholder="(000) 000-0000" required />
            </div>

            {/* Pickup or Delivery */}
            <div className="mt-4">
              <Label>Do you want to pick up your order?</Label>
              <RadioGroup
                value={pickup}
                onChange={setPickup}
                className="flex gap-4 mt-2"
              >
                <RadioGroupItem value="pickup" /> <span>Yes.</span>
                <RadioGroupItem value="delivery" />{" "}
                <span>No, I request for a delivery.</span>
              </RadioGroup>
            </div>

            {/* Delivery Address (only if delivery is selected) */}
            {pickup === "delivery" && (
              <div className="mt-4 border p-4 rounded-lg">
                <Label>Delivery Address</Label>
                <Input type="text" placeholder="Street Address" required />
                <Input
                  type="text"
                  placeholder="Street Address Line 2"
                  className="mt-2"
                />
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <Input type="text" placeholder="City" required />
                  <Input type="text" placeholder="State / Province" required />
                </div>
                <Input
                  type="text"
                  placeholder="Postal / Zip Code"
                  className="mt-2"
                  required
                />
              </div>
            )}

            {/* Comments */}
            <div className="mt-4">
              <Label>Comments</Label>
              <Textarea placeholder="Any special requests?" />
            </div>

            {/* Payment Methods */}
            <div className="mt-6 border p-4 rounded-lg bg-red-100">
              <Label className="font-semibold">Payment Methods</Label>
              <RadioGroup
                value={paymentMethod}
                onChange={setPaymentMethod}
                className="flex gap-4 mt-2"
              >
                <RadioGroupItem value="card" />{" "}
                <span>Debit or Credit Card</span>
                <RadioGroupItem value="paypal" />{" "}
                <span className="italic">PayPal</span>
              </RadioGroup>

              {paymentMethod === "paypal" && (
                <p className="text-red-500 text-sm mt-2">
                  PayPal Script not reloaded, please reload your page.
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button className="mt-6 w-full bg-primary text-white py-2">
              Submit
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
