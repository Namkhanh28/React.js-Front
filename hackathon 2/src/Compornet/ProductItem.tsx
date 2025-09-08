import React from "react";
import { Product } from "../Types/Product";

interface ProductItemProps {
  product: Product;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onToggle, onDelete }) => {
  return (
    <tr>
      {/* Nếu hết hàng thì gạch ngang tên */}
      <td className={product.inStock ? "" : "line-through text-gray-400"}>
        {product.name}
      </td>
      <td className="text-green-600 font-bold">{product.price.toLocaleString()} đ</td>
      <td>
        {product.inStock ? (
          <span className="text-white bg-green-500 px-2 py-1 rounded">Còn hàng</span>
        ) : (
          <span className="text-white bg-red-500 px-2 py-1 rounded">Hết hàng</span>
        )}
      </td>
      <td>
        <button
          className="border border-blue-500 text-blue-500 px-2 py-1 rounded mr-2"
          onClick={() => onToggle(product.id)}
        >
          Đánh dấu
        </button>
        <button
          className="border border-red-500 text-red-500 px-2 py-1 rounded"
          onClick={() => onDelete(product.id)}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default ProductItem;
