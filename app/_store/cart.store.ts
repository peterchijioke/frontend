import { create } from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  quantity?: number;
}

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  cartCount: number;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => {
    const isProductInCart = state.cart.some((item) => item.id === product.id);
    
    if (!isProductInCart) {
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    } else {
      return {
        cart: state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity! + 1 } : item
        ),
      };
    }
  }),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),
  clearCart: () => set(() => ({ cart: [] })),
  cartCount: 0,
}));

useCartStore.subscribe((state) => {
  state.cartCount = state.cart.reduce((total, item) => total + (item.quantity || 1), 0);
});

export default useCartStore;
