"use client";

import { z } from "zod";
import Image from "next/image";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";
import { TrashIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import { addOrder } from "@/actions";
import { useCart } from "@/context/cart-context";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  userId: z.string(),
  shopOwnerId: z.string(),
  foodItemIds: z.array(z.string()),
  totalPrice: z.number(),
  quantity: z.number(),
  orderStatus: z.string(),
  deliveryAddress: z.string(),
  contactNumber: z.string(),
});

export default function CheckoutForm() {
  const { user } = useUser();
  const router = useRouter();

  const { cart, updateQuantity, removeItem, totalAmount, totalItems } =
    useCart();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userId: user?.id,
      shopOwnerId: cart[0]?.item.shopOwnerId,
      foodItemIds: cart.map((item) => item.item.id),
      totalPrice: totalAmount,
      quantity: totalItems,
      orderStatus: "Pending",
      deliveryAddress: "",
      contactNumber: "",
    },
  });
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addOrder(values);
      toast.success("Order placed successfully!");
      form.reset();
      localStorage.removeItem("cart");
      router.push("/");
    } catch (error) {
      console.error("Error adding food item:", error);
    }
  }

  return (
    <>
      <div>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-4">
              {cart.map(({ item, quantity }) => (
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
                        onClick={() => updateQuantity(item.id, quantity - 1)}
                        className="px-2 py-1 border rounded-md"
                      >
                        -
                      </button>
                      <span className="px-4">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, quantity + 1)}
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
          </>
        )}
      </div>

      {/* Checkout Form */}
      {cart.length > 0 && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-8 border p-6 rounded-lg shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Checkout Details</h2>

            <FormField
              control={form.control}
              name="deliveryAddress"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Delivery Address</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter delivery address" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image URL</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="Enter contact number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              className="mt-6 w-full bg-primary text-white py-2"
            >
              Submit
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
