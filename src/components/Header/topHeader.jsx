import { useState } from 'react';
import { useNavigate } from 'react-router'
import { useEffect } from 'react';

function TopHeader() {
  const [Announce, setAnnounce] = useState(false);
  const navigate = useNavigate();

  const ShopNow = () => {
    navigate('/shop')
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      setAnnounce(true);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className='top-header w-full bg-gradient-to-r from-[#03ADA4] to-white text-gray-800 py-3 text-center text-xs md:text-sm'>
        <p className={Announce ? 'block px-5' : 'hidden'}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <b className='cursor-pointer' onClick={ShopNow}> Shop Now</b>  </p>
        <p className={Announce ? 'hidden' : 'block'}>Announcement!</p>
      </section>
    </>
  )
}
export default TopHeader