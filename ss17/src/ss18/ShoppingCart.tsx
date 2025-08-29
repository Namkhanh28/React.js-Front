// import React from 'react'
import { useMemo } from 'react';
interface CartItem {
    id: number; 
    name: string;
    price: number;
    quantity: number;
}
 const cartItems :CartItem[]= [
        { id: 1, name: 'Sản phẩm 1', price: 100  ,quantity : 2},
        { id: 2, name: 'Sản phẩm 2', price: 200 ,quantity : 1},
         {id: 3, name: 'Sản phẩm 3', price: 300 ,quantity : 3},
    ];
    const totalPrice = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartItems]);
// const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
export default function ShoppingCart() {
  return (
    <div>
      <h2>ShoppingCart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price} x {item.quantity} = {item.price * item.quantity} VND
          </li>
        ))}
      </ul>
      <div>
        <strong>Total Price: {totalPrice} VND</strong>
      </div>
    </div>
  )
}
