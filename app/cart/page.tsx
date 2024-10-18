import LoginForm from "../_components/(login)/LoginForm";
import Cart from "../_components/cart/Cart";
import NavBar from "../_components/Navbar";

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
