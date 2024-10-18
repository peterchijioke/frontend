import { Metadata } from "next";
import Cart from "../_components/cart/Cart";
import NavBar from "../_components/Navbar";

export const metadata: Metadata = {
  title: "Store | Login",
  description: "The login page",
};
export default function CartPage() {
  return (
    <div>
      <NavBar />
      <main className=" pt-20">
        <Cart />
      </main>
    </div>
  );
}
