import CheckoutForm from "@/components/checkout-form";

export default function CartPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>

      <CheckoutForm />
    </div>
  );
}
