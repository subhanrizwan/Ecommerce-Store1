import React from 'react'
import Header from '../components/Header/header.jsx'
import Footer from './Footer/footer.jsx';
import { Outlet } from 'react-router';
import TopHeader from './Header/topHeader.jsx';
function layout() {
  return (
    <>
    <TopHeader />
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default layout