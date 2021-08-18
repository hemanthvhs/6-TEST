import React from "react";

function CartItem({ id, product, qty, price, updateQty }) {
  const update = (id, qty) => {
    updateQty(id, qty);
  };
  return (
    <div>
      <div>{product}</div>
      <button onClick={() => update(id, qty - 1)} disabled={qty <= 1}>
        -
      </button>
      <div>{qty}</div>
      <button onClick={() => update(id, qty + 1)}>+</button>
      <div>${qty * price}</div>
    </div>
  );
}

export default CartItem;
