import { NavLink, Outlet } from "react-router-dom";
import "./Nav.css";
export default function Nav() {
  return (
    <div className="text-white w-full h-32 ">
      <div className="flex justify-between">
        <div className="m-4 p-6">
          <h1 className="text-sans italic text-lime-400 md:text-4xl text-6xl">
            Sal's Burger
          </h1>
        </div>
        <nav className=" px-10 flex  justify-end  ">
          <ul className=" m-12 text-xl px-2 rounded-lg font-semibold cursor-pointer justify-end ">
            <NavLink to="/" className="m-4 px-4  hover:text-orange-600  ">
              Home
            </NavLink>
            <NavLink to="/Menu " className="m-4 px-4   hover:text-red-500 ">
              Menu
            </NavLink>
            <a className="m-4 px-4   hover:text-red-500 ">About</a>
            <a className="m-4 px-4   hover:text-red-500 ">Contact</a>
            <button className=" hover:border-red-500 border-2 p-2   text-xl">
              Reserve A Table
            </button>
          </ul>
        </nav>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
}
