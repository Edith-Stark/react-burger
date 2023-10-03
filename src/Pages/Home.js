import img from "../Assets/burger1.png";
import img2 from "../Assets/burger2.png";
import img3 from "../Assets/burder3.png";
import img4 from "../Assets/burgerLady.jpg";
import pic2 from "../Assets/pic2.jpg";
import pic5 from "../Assets/pic5.jpg";
import pic4 from "../Assets/pic4.jpg";
import "../App.css";
import icon from "../Assets/icons8-where-50.png";
import icon2 from "../Assets/icons8-iphone-se-30.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";

export default function Home() {
  return (
    <div className="relative">
      <div className="grid grid-cols-2">
        <div className="my-12">
          <h1 className="font-bold text-6xl text-gray-100 p-8">
            The Way It Should Be.
          </h1>
          <p className="px-10 md:contents hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            blanditiis odio repellendus corrupti maxime sequi eveniet
            recusandae? Mollitia, incidunt ex. Facere, magnam. Ipsum qui
            adipisci ex error? Eos, voluptate atque.
          </p>
          <div className="flex-col ">
            <div className="mt-6">
              <div className="justify-center align-middle  flex ">
                <button className=" hover:border-yellow-500 w-28 text-xl py-2 font-bold border-2 text-center ">
                  Menu
                </button>
              </div>
              <div className="justify-center align-middle  flex ">
                <a className=" hover:text-red-200 cursor-pointer text-red-500 italic text-x">
                  Make a Reservation?
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:w-wprimaryburger w-wsmburger  ">
            <img src={img} />
          </div>
        </div>
      </div>
      <div>
        <div className="md:grid grid-cols-2">
          <div>
            <div className="flex align-middle justify-center my-10">
              <div>
                <div className="m-6">
                  <p>Welcome to</p>
                  <h1 className="text-5xl font-semibold">Sal's Burger</h1>
                </div>

                <div className="m-4">
                  <div className="flex m-2">
                    <img src={icon} className="w-7" />
                    <p className="font-semibold">257W 27ST,NEWYORK,NY 2023</p>
                  </div>
                  <div className="flex m-2">
                    <img src={icon2} className="w-7" />
                    <p className="font-semibold">(555) 123-456</p>
                  </div>
                  <div className="flex m-2">
                    <img src={icon} className="w-7" />
                    <p className="font-semibold">257W 27ST,NEWYORK,NY 2023</p>
                  </div>
                  <div className="flex m-2">
                    <img src={icon2} className="w-7" />
                    <p className="font-semibold">(555) 123-456</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <img src={img4} className="md:w-primary ml-14" />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <div className="md:grid grid-cols-3 m-6 my-12 ">
          <div className="w-80 md:contents hidden">
            <img src={img2} />
          </div>
          <div className="flex justify-center align-middle md:my-12 md:text-pixels30 text-pixels50 text-green-200 ">
            <div>
              <h2 className="underline md:text-xl text-5xl  font-semibold  italic text-center md:m-4 ml-14">
                About Us
              </h2>
              <p>-We Serve The Best Burgers in the City</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita blanditiis odio repellendus corrupti maxime sequi
                eveniet recusandae? Mollitia, incidunt ex. Facere, magnam. Ipsum
                qui adipisci ex error? Eos, voluptate atque.
              </p>
            </div>
          </div>
          <div className="w-80 md:contents hidden">
            <img src={img3} />
          </div>
        </div>
        <div className="">
          <div>
            <h2 className="text-pixels40 underline italic flex justify-center align-middle text-gray-200 md:text-xl text-4xl ml-mtest2">
              Testimonials
            </h2>
          </div>
          <div className="md:flex gap-10 md:m-14 ml-mtest">
            <div className=" bg-blue-100 md:w-width20px md:h-width20px w-wsm2 h-hsm2 rounded-xl relative">
              <div className="justify-center align-middle flex mt-8 ">
                <img
                  src={pic2}
                  className="m-4  z-10 absolute md:w-width10px md:h-width10px w-wsm3 h-hsm3 rounded-full object-cover"
                />
                <img
                  src={twitter}
                  className="  z-10 w-12 -ml-16 m-8 mt-4 rounded-full object-cover"
                />
              </div>
              <div className="md:h-h20px md:w-width20px w-wsm4 h-hsm4 bg-blue-400 absolute rounded-xl bottom-0 ">
                <div className="bg-gray-200 h-h30px  rounded-r-3xl  rounded-bl-3xl w-width30px z-10 md:m-16 m-mtest ">
                  <p className="p-4">
                    <p className="text-blue-600 md:text text-xl">@SalsBurger</p>{" "}
                    <p className="text-black ">Best Burger Ever!!!</p>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-blue-100 md:w-width20px md:h-width20px w-wsm2 h-hsm2 rounded-xl relative">
              <div className="justify-center align-middle flex mt-8 ">
                <img
                  src={pic5}
                  className="m-4  z-10 absolute  md:w-width10px md:h-width10px w-wsm3 h-hsm3 rounded-full object-cover"
                />
                <img
                  src={instagram}
                  className="  z-10 w-12 -ml-16 m-8 mt-4 rounded object-cover"
                />
              </div>
              <div className="md:h-h20px md:w-width20px w-wsm4 h-hsm4 bg-pink-500 absolute rounded-xl bottom-0 ">
                <div className="bg-gray-200 h-h30px  rounded-r-3xl  rounded-bl-3xl w-width30px z-10 md:m-16 m-mtest ">
                  <p className="p-4">
                    <p className="text-blue-600 md:text text-xl">@SalsBurger</p>{" "}
                    <p className="text-black">Good Customer Service</p>
                  </p>
                </div>
              </div>
            </div>
            <div className=" bg-blue-100  md:w-width20px md:h-width20px w-wsm2 h-hsm2 rounded-xl relative">
              <div className="justify-center align-middle flex mt-8 ">
                <img
                  src={pic4}
                  className="m-4  z-10 absolute  md:w-width10px md:h-width10px w-wsm3 h-hsm3 rounded-full object-cover"
                />
                <img
                  src={twitter}
                  className="  z-10 w-12 -ml-16 m-8 mt-4 rounded-full object-cover"
                />
              </div>
              <div className="md:h-h20px md:w-width20px w-wsm4 h-hsm4  bg-blue-400 absolute rounded-xl bottom-0 ">
                <div className="bg-gray-200 h-h30px  rounded-r-3xl  rounded-bl-3xl w-width30px z-10 md:m-16 m-mtest ">
                  <p className="p-4">
                    <p className="text-blue-600 md:text text-xl">@SalsBurger</p>{" "}
                    <p className="text-black "> I'm Definatly Going Back</p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute  w-widthfooter ">
        <div className="  overflow-none  mt-14">
          <div className="bg-gray-800 h-height30px rounded  ">
            <div className="justify-center flex align-middle">
              <div className=" w-width70 bg-white h-11 rounded-3xl -m-6 relative">
                <input
                  placeholder="Email"
                  type="text"
                  className=" m-3 searchBar bg-none text-black text-pixels15"
                />
                <button className="style-none text-gray-200 text-pixels30 bg-red-700 hover:bg-red-600 h-8 w-widithsearch absolute m-1 rounded-2xl right-0 ">
                  Submit
                </button>
              </div>
            </div>
            <div className="text-white ">
              <div className="flex ml-10 mt-4 p-16 justify-between cursor-pointer">
                <div>
                  <h2 className="font-semibold ml-6 text-pixels30">
                    {" "}
                    Discover
                  </h2>
                  <div className="text-gray-200">
                    <p> Our Other Resturants</p>
                    <p> Open Jobs</p>
                    <p>Help & Support</p>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ml-6 text-pixels30">About</h2>
                  <div className="text-gray-200 text-pixels15">
                    <p> Staff</p>
                    <p> Teams</p>
                    <p>Open Jobs</p>
                    <p>Blog</p>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ml-6 text-pixels30">Social</h2>
                  <div className="text-gray-200 text-pixels15 ">
                    <li href="#" className="hover:text-red-500 ">
                      {" "}
                      Facebook
                    </li>
                    <li href="#" className="hover:text-red-500 ">
                      {" "}
                      Instagram
                    </li>
                    <li href="#" className="hover:text-red-500 ">
                      Twitter
                    </li>
                    <li href="#" className="hover:text-red-500 ">
                      Tik-Tok
                    </li>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold ml-6 text-pixels30">
                    Contacts & Address
                  </h2>
                  <div className="text-gray-200">
                    <div className="flex m-2">
                      <img src={icon} className="w-7" />
                      <p className="">257W 27ST,NEWYORK,NY 2023</p>
                    </div>
                    <div className="flex m-2">
                      <img src={icon2} className="w-7" />
                      <p className="font-semibold">(555) 123-456</p>
                    </div>
                    <div className="flex m-2">
                      <img src={icon} className="w-7" />
                      <p className="">257W 27ST,NEWYORK,NY 2023</p>
                    </div>
                    <div className="flex m-2">
                      <img src={icon2} className="w-7" />
                      <p className="font-semibold">(555) 123-456</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-10 ml-ml">
              <div className="bg-white w-wfooter h-hfooter text-black">
                <div className="p-4 pl-6">
                  <h2 className="font-bold text-pixels40 ml-4">Find Us</h2>
                  <div className=" text-gray-800">
                    121 Rock Street,
                    <br />
                    Avenue New York
                    <br />
                    NY926758
                  </div>
                </div>
              </div>
              <div className="bg-white w-wfooter h-hfooter text-black">
                <div className="p-4 pl-6">
                  <h2 className="font-bold text-pixels40 ml-4">Find Us</h2>
                  <div className=" text-gray-800">
                    121 Rock Street,
                    <br />
                    Avenue New York
                    <br />
                    NY926758
                  </div>
                </div>
              </div>
              <div className="bg-white w-wfooter h-hfooter text-black">
                <div className="p-4 pl-6">
                  <h2 className="font-bold text-pixels40 ml-4">Find Us</h2>
                  <div className=" text-gray-800">
                    121 Rock Street,
                    <br />
                    Avenue New York
                    <br />
                    NY926758
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
