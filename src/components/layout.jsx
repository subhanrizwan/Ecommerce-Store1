import React from 'react'
import Header from '../components/header.jsx'
import Footer from '../components/footer.jsx';
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