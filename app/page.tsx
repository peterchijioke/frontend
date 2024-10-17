import NavBar from "./_components/Navbar";
import ProductList from "./_components/ProductList";

export default function HomePage() {
  return (
    <div className="">
      <NavBar />
      <main className=" pt-10">
        <ProductList />
      </main>
    </div>
  );
}
