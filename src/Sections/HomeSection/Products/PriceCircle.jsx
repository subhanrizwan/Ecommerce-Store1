import React from 'react'

const PriceCircle=()=> {
  return (
    <>
    <div className="circle absolute -translate-y-24 -translate-x-3 w-12 h-12 rounded-[100%] flex justify-center items-center bg-secondary mx-auto">
        <div className="price text-center text-xs text-white">$999</div>
    </div>
    </>
  )
}

export default PriceCircle