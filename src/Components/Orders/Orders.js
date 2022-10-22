import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            handleRemoveItem={handleRemoveItem}
            product={product}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2 className="px-3 text-center my-8 text-3xl font-serif">
            You have no items in your cart! Please do{" "}
            <Link className="text-blue-400 underline" to="/">
              Shopping
            </Link>
            !
          </h2>
        )}
      </div>
      {/* -------- */}
      <div className="cart-container m-2">
        <Cart clearCart={clearCart} cart={cart}></Cart>
        <Link className="pl-5" to="/shipping">
          <button className="bg-green-400 text-gray-700 px-20 sm:px-9 rounded py-2 mb-3">Proceed Shipping</button>
        </Link>
      </div>
    </div>
  );
};

export default Orders;
