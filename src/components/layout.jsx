import React from 'react'
import Header from '../components/Header/header.jsx'
import Footer from './Footer/footer.jsx';
import { Outlet } from 'react-router';
function layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default layout