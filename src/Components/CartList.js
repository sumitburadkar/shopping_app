import { useEffect, useState } from "react";
import "../App.css";

function CartList({ cart }) {
  const [CART, setCART] = useState([]);

  useEffect(() => {
    setCART(cart);
  }, [cart]);

  return (
    <div>
      {CART?.map((cartItem, cartindex) => {
        return (
          <div className="contianer1">
            <div className="items_name">
              <img src={cartItem.url} width={100} alt="" />
              <span> {cartItem.name} </span>
            </div>
            <div>
              <button
                className="button"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? {
                          ...item,
                          quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                        }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                -
              </button>
              <span> {cartItem.quantity} </span>
              <button
                className="button"
                onClick={() => {
                  const _CART = CART.map((item, index) => {
                    return cartindex === index
                      ? { ...item, quantity: item.quantity + 1 }
                      : item;
                  });
                  setCART(_CART);
                }}
              >
                +
              </button>
            </div>
            <span> Rs. {cartItem.price * cartItem.quantity} </span>
          </div>
        );
      })}

      <p className="total">
        <span>Total Rs.</span>{" "}
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}{" "}
        /- <button className="paybutton">Proceed To Pay..😍</button>
      </p>
    </div>
  );
}

export default CartList;
