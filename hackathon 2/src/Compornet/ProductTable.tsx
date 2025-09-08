import React from "react";
import { Product } from "../Types/Product";
import ProductItem from "./ProductItem";

interface ProductTableProps {
  products: Product[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({ products, onToggle, onDelete }) => {
  return (
    <div className="border p-3 rounded bg-white">
      <h3 className="font-bold mb-2">📋 Danh sách sản phẩm</h3>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">Tên sản phẩm</th>
            <th className="p-2 text-left">Giá</th>
            <th className="p-2 text-left">Trạng thái</th>
            <th className="p-2 text-left">Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0 ? (
            <tr>
              <td colSpan={4} className="text-center text-gray-500 py-3">
                Chưa có sản phẩm nào
              </td>
            </tr>
          ) : (
            products.map((p) => (
              <ProductItem
                key={p.id}
                product={p}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
