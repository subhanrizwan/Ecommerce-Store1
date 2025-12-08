import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './productSlide.css';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function ImageGallery({ Images }) {
  
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
       {Images.map((imgs, ind) => (
          <SwiperSlide key={ind.key}>
            <img src={imgs} alt={`slide-${ind + 1}`} className="object-cover w-full h-full bg-no-repeat" />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </>
  );
}
