import React from 'react'
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Home from './pages/Home';
import HomeLayout from './Layout/HomeLayout';

import './connection'
import { ThriftContextProvider } from './context/ThriftContextProvider';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<HomeLayout />}>
      <Route index element={<Home />} />
      </Route>
      </Route>
    
  )
);

const App = () => {
  return (
     <div className="contain mx-auto font-dmsans text-[16px] text-dark w-[100%]">
      <ThriftContextProvider>
         <RouterProvider router={router} />
         </ThriftContextProvider>
       </div>
  )
}

export default App