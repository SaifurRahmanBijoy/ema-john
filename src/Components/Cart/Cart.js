import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart,children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity += product.quantity;
    total += product.price * product.quantity;
    shipping += product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;
  return (
    <div className="cart mt-5">
      <h4 className="text-2xl my-3">Order Summary</h4>
      <p className="mb-2">Selected Items: {quantity}</p>
      <p className="mb-2">Total Price: ${total}</p>
      <p className="mb-2">Total Shipping: ${shipping}</p>
      <p className="mb-2">Tax: ${tax}</p>
      <h5 className="mb-2">Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button className="btn-cart-2 w-full my-2" onClick={clearCart}>Clear Cart</button> <br />
      <button className="btn-cart-3 w-full my-2">{children}</button>
    </div>
  );
};

export default Cart;
