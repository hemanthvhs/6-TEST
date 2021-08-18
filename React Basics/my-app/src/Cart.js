import React, { useState } from "react";
import CartItem from "./Cart-Item";

function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, qty) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, qty };
      }
      return item;
    });

    setItems(newItems);
  };

  const grandTotal = items.reduce((total, item) => {
    return total + item.qty * item.price;
  }, 0);

  return (
    <>
      {items.map((item) => {
        return <CartItem key={item.id} {...item} updateQty={updateQty} />;
      })}
      <div>Grand Total: ${grandTotal}</div>
    </>
  );
}

export default Cart;
