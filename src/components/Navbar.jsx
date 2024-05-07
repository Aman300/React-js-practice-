import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = ()  => {
    return (
      <>
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-1 border-b">

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
          
      </header>
      {/* <Header/> */}

      </>
    )
  }

export default Navbar