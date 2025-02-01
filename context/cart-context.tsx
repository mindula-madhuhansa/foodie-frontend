// app/context/cart-context.tsx
import React, { createContext, useContext, useReducer } from 'react';

interface CartState {
  items: { id: string; quantity: number }[];
}

type CartAction =
  | { type: 'ADD_ITEM'; item: { id: string; quantity: number } }
  | { type: 'REMOVE_ITEM'; id: string };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, items: [...state.items, action.item] };
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.id) };
    default:
      return state;
  }
}

const CartContext = createContext<{ state: CartState; dispatch: React.Dispatch<CartAction>; }>({ state: { items: [] }, dispatch: () => null });

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
