import { useState } from 'react';
import { useNavigate } from 'react-router'

function TopHeader() {
  const navigate = useNavigate();

  const ShopNow = () => {
    navigate('/shop')
  }

  return (
    <>
      <section className='top-header bg-gradient-to-r from-[#03ADA4] to-white text-gray-800 py-3 text-center text-xs md:text-sm'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <b className='cursor-pointer' onClick={ShopNow}> Shop Now</b>  </p>
      </section>
    </>
  )
}
export default TopHeader