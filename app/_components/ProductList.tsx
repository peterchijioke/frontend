const products = [
  {
    id: 1,
    name: "Product 1",
    price: "$10.00",
    description: "This is product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "$20.00",
    description: "This is product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "$30.00",
    description: "This is product 3",
  },
];

export default function ProductList() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Product Listing</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
