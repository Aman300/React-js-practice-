import Navbar from "./components/Navbar";
import Signin from "./pages/auth/Signin";
import { Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';
import Signup from "./pages/auth/Signup";
import Footer from "./components/Footer";
import Contact from "./pages/home/Contact";
import Dashboard from "./pages/home/Dashboard";

export default function App() {
  return (
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
            <Route path="/contact" element={<Contact />} />
            
          </Route>
        </Route>

        </Routes>
        
      </BrowserRouter>
    </>
  )
}