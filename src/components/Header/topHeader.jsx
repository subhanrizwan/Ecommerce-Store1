import React from 'react'
import { useNavigate } from 'react-router'

function TopHeader() {
    const navigate = useNavigate();

    const ShopNow=()=>{
        navigate('/shop')
    }
  return (
    <>
    <section className='top-header w-full bg-primary text-white p-3 text-center text-sm'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href=""><b onClick={ShopNow}> Shop Now</b></a>  </p>
    </section>
    </>
  )
}

export default TopHeader