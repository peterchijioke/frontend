"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getApiService } from "../service/api.service";
import useSwr from "swr";
import { Loader } from "lucide-react";
import useCartStore from "../_store/cart.store";
import toast from "react-hot-toast";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

export default function ProductList() {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { data, error, isLoading } = useSwr<Product[]>(
    "/products",
    getApiService
  );

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-right",
    });
  };

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
    toast.success("Product removed from cart!", {
      position: "top-right",
    });
  };

  const products = data || [];

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <Loader className="animate-spin h-6 w-6" />
      </div>
    );
  }

  if (error) {
    return <div>Error loading products...</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product: Product) => {
          // Check if the product is in the cart
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <Card key={product.id} className="p-4">
              <CardContent>
                <h2 className="font-semibold mb-2 text-sm">{product.title}</h2>
                <span className="text-gray-600 mb-4 line-clamp-2 text-xs">
                  {product.description}
                </span>
                <p className="text-lg font-bold">${product.price}</p>
              </CardContent>
              <CardFooter>
                {isInCart ? (
                  <Button
                    onClick={() => {
                      handleRemoveFromCart(product.id);
                    }}
                    className="text-sm"
                    size={"sm"}
                  >
                    Remove from Cart
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleAddToCart(product)}
                    className="text-sm"
                    size={"sm"}
                  >
                    Add to Cart
                  </Button>
                )}
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
