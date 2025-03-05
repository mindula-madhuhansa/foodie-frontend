"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

export interface CartItem {
  item: FoodItem;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: FoodItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  totalItems: number;
  totalAmount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isClient, setIsClient] = useState(false); // State to check if we are on the client-side

  // Use effect to check for localStorage only on the client-side
  useEffect(() => {
    setIsClient(true); // Set isClient to true once the component is mounted on the client
  }, []);

  useEffect(() => {
    if (isClient) {
      const savedCart = localStorage.getItem("cart");
      setCart(savedCart ? JSON.parse(savedCart) : []);
    }
  }, [isClient]);

  // Save the cart to localStorage whenever it changes
  useEffect(() => {
    if (isClient && cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isClient]);

  const addToCart = (foodItem: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.item.id === foodItem.id
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.item.id === foodItem.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { item: foodItem, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.item.id === id
          ? { ...cartItem, quantity: Math.max(1, quantity) }
          : cartItem
      )
    );
  };

  const removeItem = (id: string) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.item.id !== id)
    );
  };

  const totalItems = cart.reduce(
    (total, cartItem) => total + cartItem.quantity,
    0
  );

  const totalAmount = cart.reduce(
    (total, cartItem) => total + cartItem.item.price * cartItem.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeItem,
        totalItems,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
