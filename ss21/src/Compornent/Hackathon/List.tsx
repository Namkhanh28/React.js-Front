import React, { useState } from 'react'

interface Product {
    id: number;
    name: string;
    price: string;
    status: string;
}

export default function List() {
    const [products, setProducts] = useState<Product[]>([
        { id: 1, name: 'Iphone 14 Pro Max', price: '30.000.000 đ', status: 'Còn hàng' },
        { id: 2, name: 'Iphone 13 Pro Max', price: '25.000.000 đ', status: 'Hết hàng' },
        { id: 3, name: 'Iphone 12 Pro Max', price: '20.000.000 đ', status: 'Còn hàng' },
        { id: 4, name: 'Iphone 11 Pro Max', price: '15.000.000 đ', status: 'Hết hàng' },
        { id: 5, name: 'Iphone Xs Max', price: '10.000.000 đ', status: 'Còn hàng' },
    ]);
    const [form, setForm] = useState<Product>({ id: 0, name: '', price: '', status: 'Còn hàng' });
    const [isEdit, setIsEdit] = useState(false);

    // Thêm sản phẩm
    const handleAdd = () => {
        if (!form.name || !form.price) return;
        setProducts([...products, { ...form, id: Date.now() }]);
        setForm({ id: 0, name: '', price: '', status: 'Còn hàng' });
    };

    // Xóa sản phẩm
    const handleDelete = (id: number) => {
        setProducts(products.filter(p => p.id !== id));
    };

    // Sửa sản phẩm
    const handleEdit = (product: Product) => {
        setForm(product);
        setIsEdit(true);
    };

    // Lưu sản phẩm đã sửa
    const handleSave = () => {
        setProducts(products.map(p => p.id === form.id ? form : p));
        setForm({ id: 0, name: '', price: '', status: 'Còn hàng' });
        setIsEdit(false);
    };

    return (
        <div>
            <h3>{isEdit ? 'Sửa sản phẩm' : 'Thêm sản phẩm'}</h3>
            <input
                placeholder="Tên sản phẩm"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
                placeholder="Giá"
                value={form.price}
                onChange={e => setForm({ ...form, price: e.target.value })}
            />
            <select
                value={form.status}
                onChange={e => setForm({ ...form, status: e.target.value })}
            >
                <option value="Còn hàng">Còn hàng</option>
                <option value="Hết hàng">Hết hàng</option>
            </select>
            {isEdit ? (
                <button onClick={handleSave}>Lưu</button>
            ) : (
                <button onClick={handleAdd}>Thêm</button>
            )}

            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center", marginTop: 20 }}>
                <thead>
                    <tr style={{ backgroundColor: "#f2f2f2" }}>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Price</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Status</th>
                        <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.id}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.name}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.price}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>{product.status}</td>
                            <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                <button onClick={() => handleEdit(product)}>Sửa</button>
                                <button onClick={() => handleDelete(product.id)} style={{ marginLeft: 8 }}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}       
