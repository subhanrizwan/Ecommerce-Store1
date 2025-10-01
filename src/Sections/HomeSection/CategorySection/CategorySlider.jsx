"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import CategoryCards from "./CategoryCards.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

const categories = [
  { icon: PhoneAndroidOutlinedIcon, title: "Mobile" },
  { icon: HeadphonesOutlinedIcon, title: "Laptop" },
  { icon: DesktopMacOutlinedIcon, title: "Computer" },
  { icon: SportsEsportsOutlinedIcon, title: "Accessories" },
  { icon: WatchOutlinedIcon, title: "Watch" },
];

export default function CategorySlider() {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {" "}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: true,
        }}

        modules={[Pagination, Autoplay]}
        className="!w-full !bg-transparent max-w-screen-xl h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >


        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="!flex !justify-center !items-center !p-1">
            <CategoryCards icon={cat.icon} title={cat.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
