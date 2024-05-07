import { Link, NavLink } from "react-router-dom";
import Header from "./Header";

const Navbar = ()  => {
    return (
      <>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-1 shadow-md">

      <div className="w-full flex justify-between items-center">
        <div className="">
            <NavLink to={"/"} className="text-xl">
            <img src="https://rkbattle.com/Images/LandingPage_img/logo.png" className=" w-10" alt="" />
            <h1>LOGO</h1>
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
                            <button onClick={(e) => localStorage.clear()} className="bg-rose-500 text-white py-2 px-5 font-semibold rounded-3xl">Logout</button>
                        ) : (
                          <div className="flex justify-center items-center gap-2">
                            <NavLink to={"/signin"} className="bg-black text-white py-2 px-5 font-semibold rounded-3xl">Sign in</NavLink>
                            <NavLink to={"/signup"} className="bg-white border  text-black py-2 px-5 font-semibold rounded-3xl">Sign up</NavLink>
                            </div>)
                    }
                
                  
        </div>

          </div>
          
      </header>
      {/* <Header/> */}

      </>
    )
  }

export default Navbar