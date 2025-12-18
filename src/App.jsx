import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';

const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Home />} ></Route>
    <Route path="/about" element={<About />} ></Route>
    <Route path="/contact" element={<Contact />} ></Route>
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
