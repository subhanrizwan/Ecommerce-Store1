import React from 'react'
import { Route ,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router'
import { BrowserRouter } from 'react-router'  
  
const home =()=> {
  return (
    <div><h1 className='text-4xl text-center fw-bold'>home</h1></div>
  )
}

export default home