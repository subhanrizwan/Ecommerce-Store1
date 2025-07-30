import { useState } from 'react';
import { useNavigate } from 'react-router'
import { useEffect } from 'react';
function TopHeader() {
  const [Announce,setAnnounce] = useState(false);
    const navigate = useNavigate();

    const ShopNow=()=>{
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
    <section className='top-header w-full bg-primary text-white py-4 text-center text-xs md:text-sm'>
        <p className={Announce ? 'block' : 'hidden'}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <b onClick={ShopNow}> Shop Now</b>  </p>
        <p className={Announce ? 'hidden' : 'block'}>Announcement!</p>
    </section>
    </>
  )
}

export default TopHeader