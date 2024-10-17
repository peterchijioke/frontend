import NavBar from "../_components/Navbar";
import ProductList from "../_components/ProductList";

export default function ProductsPage() {
  return (
    <div>
      <NavBar />
      <main className=" lg:mx-0 md:mx-5 mx-5">
        <ProductList />
      </main>
    </div>
  );
}
