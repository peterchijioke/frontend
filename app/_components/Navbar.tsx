export default function NavBar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Store</div>
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="/products" className="text-gray-300 hover:text-white">
            Products
          </a>
          <a href="/login" className="text-gray-300 hover:text-white">
            Login
          </a>
          <a href="/register" className="text-gray-300 hover:text-white">
            Register
          </a>
        </div>
      </div>
    </nav>
  );
}
