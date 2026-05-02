import "./zeptoLoginCart.css";
import { useNavigate } from "react-router-dom";

function ZeptoLoginCart() {
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="LoginCart">
      <button onClick={() => navigate("/login")}>
        <i className="fa-regular fa-circle-user"></i>
      </button>

      <button onClick={goToCart}>
        <i className="fa-solid fa-cart-shopping"></i>
      </button>
    </div>
  );
}

export default ZeptoLoginCart;
