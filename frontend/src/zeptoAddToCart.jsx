import "./zeptoAddToCart.css";
import { useState } from "react";
import axios from "axios";
import { useCart } from "./context/CartContext";

function AddToCartButton({ className, product }) {
  const [count, setCount] = useState(0);
  const { addToCart, decreaseFromCart } = useCart();

  const handleAdd = async () => {
    setCount(count + 1);
    addToCart(product);

    try {
      await axios.post("http://localhost:5000/api/cart/add", {
        productId: product._id,
        quantity: 1,
      });
    } catch (err) {
      console.error("Backend error:", err.message);
    }
  };

  const handleRemove = async () => {
    setCount(count - 1);
    decreaseFromCart(product._id);

    try {
      await axios.post("http://localhost:5000/api/cart/add", {
        productId: product._id,
        quantity: -1,
      });
    } catch (err) {
      console.error("Backend error:", err.message);
    }
  };

  return (
    <>
      {count === 0 ? (
        <button className={className} onClick={handleAdd}>
          Add To Cart
        </button>
      ) : (
        <div className={className}>
          <button onClick={handleRemove}>-</button>
          <p>{count}</p>
          <button onClick={handleAdd}>+</button>
        </div>
      )}
    </>
  );
}

export default AddToCartButton;
