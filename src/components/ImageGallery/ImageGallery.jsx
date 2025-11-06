import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Mousewheel, Pagination } from 'swiper/modules';


export default function ImageGallery({Images}) {
    console.log(Images);
    
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        {/* {Images.map((imgObj, ind) =>(
          <SwiperSlide key={ind.key}>{imgObj.image}Slide 1</SwiperSlide>
        ))
    } */}


        
      </Swiper>
    </>
  );
}
