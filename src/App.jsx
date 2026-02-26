import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Login from './pages/Login';
import RootLayout from './components/RootLayout';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Error from './pages/Error';
import ProductDetails from './pages/ProductDetails';
import Contact from './pages/Contact';
import Checkout from './pages/Checkout';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<RootLayout />} >
       <Route path="/" element={<Home />} ></Route>
       <Route path="/products" element={<Products />} ></Route>
       <Route path="/login" element={<Login />} ></Route>
       <Route path="/signup" element={<Signup />} ></Route>
       <Route path="/cart" element={<Cart />} ></Route>
       <Route path="/productdetails" element={<ProductDetails />} ></Route>
       <Route path="/contact" element={<Contact/>} ></Route>
       <Route path="/checkout" element={<Checkout/>} ></Route>
       <Route path="/*" element={<Error />} ></Route>
    </Route>
    
   </>
  )
);

const App = () => {
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App
