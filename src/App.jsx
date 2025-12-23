import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route path="/" element={<Home />} ></Route>
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
