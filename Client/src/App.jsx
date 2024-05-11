import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import Dashboard from "./pages/home/Dashboard";
import CategoryDetails from "./pages/home/CategoryDetails";
import ProductDetails from "./pages/home/ProductDetails";
import { useState } from "react";
import PageLoading from "./components/PageLoading";

export default function App() {

  const [loading, setLoading] = useState(true)

  setTimeout(()=>{
    setLoading(false)
  },1200)

  return (
    <>
    {
      loading ? (<PageLoading/>) : (
        <>
        <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Navbar />} /> */}
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />

          <Route>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <div> {/* Adjust margin as needed */}
                  <Outlet /> {/* This will render child routes */}
                </div>
                <Footer/>
              </div>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/category-details" element={<CategoryDetails />} />
            <Route path="/product-details" element={<ProductDetails />} />
            
          </Route>
        </Route>

        </Routes>
        
      </BrowserRouter>
        </>
      )
    }
    
    </>
  )
}