"use client";

import useCartStore from "@/app/_store/cart.store";
import { Button } from "@/components/ui/button";

export default function Cart() {
  const { cart, removeFromCart } = useCartStore();

  const handleRemoveFromCart = (id: number) => {
    removeFromCart(id);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between p-4 border-b">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <Button size="sm" onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
