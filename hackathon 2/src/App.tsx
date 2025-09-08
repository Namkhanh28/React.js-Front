import React, { useState } from "react";
import ProductForm from "./Compornet/ProductForm";
import ProductTable from "./Compornet/ProductTable";
import { Product } from "./Types/Product";

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Laptop Dell XPS 13", price: 29990000, inStock: true },
    { id: 2, name: "Chuột Logitech MX Master 3S", price: 2490000, inStock: false },
    { id: 3, name: "Bàn phím Keychron K6", price: 2190000, inStock: true },
  ]);
  const addProduct = (product: Product) => {
    setProducts([...products, product]);
  };
  const toggleProduct = (id: number) => {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, inStock: !p.inStock } : p
      )
    );
  };
  const deleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
         Quản lý Sản phẩm
      </header>
      <main className="max-w-3xl mx-auto mt-6 space-y-4">
        <ProductForm onAdd={addProduct} />
        <ProductTable
          products={products}
          onToggle={toggleProduct}
          onDelete={deleteProduct}
        />
      </main>
    </div>
  );
};

export default App;
