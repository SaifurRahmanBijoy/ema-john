import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  addToDb,
  deleteShoppingCart,
  getStoredCart,
} from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

/*
count:loaded
perPage (size):10
pages: count/perPage
page,

*/

const Shop = () => {
  // const { products, count } = useLoaderData([]);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `http://localhost:5000/products?page=${page}&size=${size}`;
    console.log(page, size);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setProducts(data.products);
      });
  }, [page, size]);

  const pages = Math.ceil(count / size);

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    const ids = Object.keys(storedCart);
    console.log(ids);
    fetch("http://localhost:5000/productsByIds", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((data) => {
        for (const id in storedCart) {
          const addedProduct = data.find((product) => product._id === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      });
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product._id === selectedProduct._id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter(
        (product) => product._id !== selectedProduct._id
      );
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct._id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container rounded m-3">
        <Cart clearCart={clearCart} cart={cart}>
          <Link to="/orders">Review Orders</Link>
        </Cart>
      </div>
      <div className="mx-auto my-2">
        <h1 className="text-center">
          Page: {page} Size: {size}
        </h1>
        {[...Array(pages).keys()].map((n) => (
          <button
            key={n}
            onClick={() => setPage(n)}
            className={
              page === n
                ? "py-4 px-6 m-2 leading-tight text-gray-900 bg-yellow-200 border rounded border-yellow-300 hover:bg-yellow-400 hover:text-gray-600"
                : "py-2 px-3 m-1 leading-tight text-gray-900 bg-blue-100 border rounded border-red-300 hover:bg-slate-500 hover:text-gray-50"
            }
          >
            {n + 1}
          </button>
        ))}
        <select
          onChange={(event) => setSize(event.target.value)}
          className="bg-blue-200 py-2 px-2 ml-4"
          name=""
          id=""
        >
          <option value="5">5</option>
          <option value="10" selected>
            10
          </option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
