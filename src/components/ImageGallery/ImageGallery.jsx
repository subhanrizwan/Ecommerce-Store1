import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './productSlide.css';
import { Mousewheel, Pagination } from 'swiper/modules';

export default function ImageGallery({ Images }) {
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
        {Images.map((imgObj, ind) => (
          <SwiperSlide key={ind.key}>
            <img src={imgObj.url} alt={`slide-${ind + 1}`} className="object-cover w-full h-full" />
          </SwiperSlide>
        ))
        }
      </Swiper>
    </>
  );
}
