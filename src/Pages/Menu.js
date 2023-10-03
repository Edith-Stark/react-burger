import { menu } from "../MenuList";
import Cart from "../Assets/carts.png";
import Realmenu from "./Realmenu";
import { useReducer, useState } from "react";
import { ACTIONS } from "./Realmenu";
import "./Menu.css";
import CartPage from "./CartPage";

function reducer(cart, action) {
  console.log(cart);
  switch (action.type) {
    case ACTIONS.remove: {
      const index = cart.indexOf(action.payload.menu);

      cart.splice(index, 1);

      return [...cart];
    }
    case ACTIONS.add: {
      if (action.payload.Added) {
        const index = cart.indexOf(action.payload.menu);
        if (index > -1) {
          cart.splice(index, 1);
        }

        return [...cart];
      } else return [...cart, action.payload.menu];
    }
    case ACTIONS.quantityplus: {
      return action.payload.quantity + 1;
    }
    case ACTIONS.quantityminus: {
      return action.payload.quantity - 1;
    }

    default:
      return cart;
  }
}

export default function Menu() {
  const [cart, dispatch] = useReducer(reducer, []);
  console.log(cart);
  let visible = false;
  const cartClick = () => {
    visible = !visible;
    console.log(visible);
    if (visible) {
      document.getElementById("hideId").classList.remove("hidden");
      document.getElementById("menuId").classList.add("grid");
      document.getElementById("menuId").classList.add("grid-cols-2");
      document.getElementById("menuId2").classList.add("overflow-y-scroll");
    } else {
      document.getElementById("hideId").classList.add("hidden");
      document.getElementById("menuId").classList.remove("grid");
      document.getElementById("menuId").classList.remove("grid-cols-2");
      document.getElementById("menuId2").classList.remove("overflow-y-scroll");
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-between  ml-ml2 m-6">
          <h1 className="text-4xl text-orange-400 italic">Enjoy Your Meal!</h1>
          <div>
            <div
              onClick={cartClick}
              className="mr-8 flex justify-center align-middle px-4 pt-2 border-2 cursor-pointer  border-red-200 rounded-xl hover:bg-blue-950 hover:scale-105 ease-in-out transition-all "
            >
              <p className="font-bold text-2xl   text-red-600 align-middle">
                Cart
              </p>
              <div className="relative">
                <div
                  className={`${
                    cart.length == 0 ? `hidden` : ``
                  }bg-red-400 w-5 h-5 absolute rounded-full  object-cover justify-center flex align-middle text-lg right-0 z-10`}
                >
                  <p
                    className={`${
                      cart.length == 0 ? `hidden` : ``
                    } -mt-1 text-white`}
                  >
                    {cart.length}
                  </p>
                </div>
                <img src={Cart} className="w-12 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="menuId" className="">
        <div
          id="menuId2"
          className={` scroll h-hm flex flex-wrap ml-4 classname`}
        >
          {menu.map((menu) => {
            return (
              <div className="">
                <Realmenu key={menu.id} menus={menu} dispatch={dispatch} />
              </div>
            );
          })}
        </div>
        <div id="hideId" className="hidden">
          <div className="bg-gray-400 w-wmenuw2 h-hm m-12 rounded text-gray-800 justify-center align-middle flex py-2">
            <div className="bg-white w-wmenuw22 h-hm1">
              <div className="">
                <div className="flex justify-between mx-16 pt-4">
                  <p className="text-2xl font-semibold">Shopping Cart</p>
                  <button className="bg-red-500  w-16 rounded-lg hover:bg-gray-200">
                    Close
                  </button>
                </div>
                <div className="flex justify-between m-12 pl-16 italic">
                  <p>Description</p>
                  <p>Quantity</p>
                  <p>Remove</p>
                  <p>Price</p>
                </div>
                {cart.map((cart) => {
                  return (
                    <div>
                      <CartPage
                        cart={cart}
                        dispatch={dispatch}
                        className="z-10"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
