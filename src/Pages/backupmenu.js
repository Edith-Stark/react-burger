import { menu } from "../MenuList";
import Cart from "../Assets/carts.png";
import Realmenu from "./Realmenu";
import { useReducer, useState } from "react";
import { ACTIONS } from "./Realmenu";

import CartPage from "./CartPage";

function reducer(cart, action) {
  switch (action.type) {
    case ACTIONS.toggle:
      return {};
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
  const cartfunction = () => {
    visible = !visible;
    if (visible) {
      document.getElementById("menuId").classList.add("flex");
      document.getElementById("menuId2").classList.add("overflow-y-scroll");

      document.getElementById("menuId").classList.add("w-wmenuw");
      document.getElementById("cartId").classList.remove("hidden");
    } else {
      document.getElementById("cartId").classList.add("hidden");
      document.getElementById("menuId").classList.remove("flex");
      document.getElementById("menuId").classList.remove("w-wmenuw");

      document.getElementById("menuId2").classList.remove("overflow-y-scroll");
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-between  ml-ml2 m-6">
          <h1 className="text-4xl text-orange-400 italic">Enjoy Your Meal!</h1>
          <div onClick={cartfunction}>
            <div className="mr-8 flex justify-center align-middle px-4 pt-2 border-2 cursor-pointer  border-red-200 rounded-xl hover:bg-blue-950 hover:scale-105 ease-in-out transition-all ">
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
      <div id="menuId" className={`${visible ? `grid grid-cols-2` : ``} `}>
        <div
          id="menuId2"
          className=" relative  scroll h-hm flex flex-wrap ml-4 classname"
        >
          {menu.map((menu) => {
            return (
              <div className="">
                <Realmenu key={menu.id} menus={menu} dispatch={dispatch} />
              </div>
            );
          })}
        </div>
        {cart.map((cart) => {
          return (
            <div
              id="cartId"
              className=" hidden  absolute right-10 bg-gray-500 w-wmenuw2 h-hm text-gray-800 "
            >
              <div>
                <CartPage cart={cart} dispatch={dispatch} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
