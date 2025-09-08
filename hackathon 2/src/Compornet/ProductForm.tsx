import React, { useState } from "react";
import { Product } from "../Types/Product";

interface ProductFormProps {
  onAdd: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ onAdd }) => {
  const [name, setName] = useState(""); 
  const [price, setPrice] = useState(""); 
  const [inStock, setInStock] = useState(true);

  const handleAdd = () => {
    if (!name || !price) return; 
    const newProduct: Product = {
      id: Date.now(), 
      name,
      price: Number(price),
      inStock,
    };
    onAdd(newProduct);
    setName("");
    setPrice("");
    setInStock(true);
  };

  return (
    <div className="border p-3 rounded mb-4 bg-white">
      <h3 className="font-bold mb-2">➕ Thêm sản phẩm mới</h3>
      <input
        className="border p-2 rounded mr-2"
        type="text"
        placeholder="Tên sản phẩm"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 rounded mr-2"
        type="number"
        placeholder="Giá (đ)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label className="mr-2">
        <input
          type="checkbox"
          checked={inStock}
          onChange={() => setInStock(!inStock)}
        />{" "}
        Còn hàng
      </label>
      <button className="bg-blue-500 text-white px-3 py-1 rounded" onClick={handleAdd}>
        Thêm
      </button>
    </div>
  );
};

export default ProductForm;
