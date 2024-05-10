import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = ()  => {
    return (
      <>
      {/* <header className="lg:px-16 px-4 flex flex-wrap items-center py-1 border-b">

      <div className="w-full flex justify-between items-center">
        <div className="">
            <NavLink to={"/"} className="text-xl flex justify-center items-center">
            <img src="https://rkbattle.com/Images/LandingPage_img/logo.png" className=" w-10" alt="" />
            <h1>LUDO</h1>
            </NavLink>
        </div>
       
        <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  AboutUs
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  View Game
                </a>
              </li>
              <li>
                <a className="md:p-4 py-3 px-0 block" href="#">
                  Blog
                </a>
              </li>
              <li>
                <NavLink to={"/contact"} className="md:p-4 py-3 px-0 block md:mb-0 mb-2" href="#">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-center items-center gap-2">
                    {
                        localStorage.getItem("token") ?  (
                          <div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                          </svg>
                          <button onClick={(e) => localStorage.clear()} className="bg-rose-500 text-white py-2 px-5 font-semibold rounded-3xl">Logout</button>
                          </div>
                           
                        ) : (
                          <>
                          
                          <div className="flex justify-center items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                          </svg>
                            <NavLink to={"/signin"} className="bg-black text-white py-2 px-5 font-semibold rounded-3xl">Sign in</NavLink>
                            <NavLink to={"/signup"} className="bg-white border  text-black py-2 px-5 font-semibold rounded-3xl">Sign up</NavLink>
                            </div>
                            </>)
                    }
                
                  
        </div>

          </div>
          
      </header> */}
      {/* <Header/> */}

      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-[#064d4f]">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-3 lg:px-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
                  />
                </svg>
                <p className=" font-semibold text-white">LOGO</p>
                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex justify-items-center items-center gap-4 lg:px-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-yellow-300 hidden lg:block md:block"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-white hidden lg:block md:block">
                  Order now and get it within
                  <span className="text-yellow-300"> 15 mint!</span>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 relative"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                  {/* <text x="13" y="8" class="text-xs text-yellow-300">2</text> Adjust position as needed */}
                </svg>
                <img
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>


      </>
    )
  }

export default Navbar