import { useState } from "react";
import { ACTIONS } from "./Realmenu";
function CartPage({ cart, dispatch }) {
  const [quantity, setquantity] = useState(1);
  const plusCartList = () => {
    setquantity((prev) => prev + 1);
  };
  const minusCartList = () => {
    setquantity((prev) => prev - 1);
  };
  const removeFunc = () => {
    dispatch({ type: ACTIONS.remove, payload: { menu: cart } });
  };
  return (
    <div>
      <div className="w-wmenuw22 h-hcart cursor-pointer mt-6">
        <div className="flex ml-4 ">
          <div className="w-wcart2  object-cover">
            <img src={cart.img} className="rounded object-cover" />
          </div>
          <div className="py-4 pl-4">
            <p>{cart.name}</p>
          </div>
          <div className="flex ">
            <button
              onClick={plusCartList}
              className="ml-4 bg-gray-200 w-8 text-xl border-2 border-gray-400 hover:bg-white"
            >
              +
            </button>
            <p className="ml-4 py-4  ">{quantity}</p>
            <button
              onClick={minusCartList}
              className="ml-4 bg-gray-200 w-8 text-xl border-2 border-gray-400 hover:bg-white"
            >
              -
            </button>
          </div>
          <div className="p-4 ml-8 bg-red-500 hover:bg-red-200 transition-all ease-in-out">
            <button onClick={removeFunc}>X</button>
          </div>
          <div className="p-4 ml-10">
            <p>{cart.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
