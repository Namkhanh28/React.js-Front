import React from 'react'

export default function BT2() {
  const [product] = React.useState({
    id: 1,
    name: "Iphone 14 Pro Max",
    price: 30990000,
    quantity: 10,
  });

  return (
    <div>
      <h2>Product Information</h2>
      <p>ID: {product.id}</p>
      <p>Name: {product.name}</p>
      <p>Price: {product.price.toLocaleString()} VND</p>
      <p>Quantity: {product.quantity}</p>
    </div>
  )
}
