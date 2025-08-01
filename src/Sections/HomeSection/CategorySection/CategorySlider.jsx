"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import CategoryCards from "./CategoryCards.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";

const categories = [
  { icon: HeadphonesOutlinedIcon, title: "Headphone" },
  { icon: PhoneAndroidOutlinedIcon, title: "Phone" },
  { icon: DesktopMacOutlinedIcon, title: "Desktop" },
  { icon: SportsEsportsOutlinedIcon, title: "Gaming" },
  { icon: WatchOutlinedIcon, title: "Watch" },
  { icon: CameraAltOutlinedIcon, title: "Camera" },
  { icon: HeadphonesOutlinedIcon, title: "Headphone" },
  { icon: PhoneAndroidOutlinedIcon, title: "Phone" },
  { icon: DesktopMacOutlinedIcon, title: "Desktop" },
  { icon: SportsEsportsOutlinedIcon, title: "Gaming" },
  { icon: WatchOutlinedIcon, title: "Watch" },
  { icon: CameraAltOutlinedIcon, title: "Camera" },
];
export default function CategorySlider() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      {" "}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        // pagination={{
        //   clickable: true,
        // }}
        autoplay={{
            delay:1500,
            disableOnInteraction: true,
        }}
        modules={[Pagination, Autoplay]}
        className="!w-4/5 h-96 !bg-gray-400 " // Applied w-full and h-96 (example height) directly
      >
          
        {categories.map((cat, idx) => (
          <SwiperSlide key={idx} className="bg-transparent flex justify-center items-center">
                    <CategoryCards icon={cat.icon} title={cat.title} />
        </SwiperSlide>
                  ))}
        {/* <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 2"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 3"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 4"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 5"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 6"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 7"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 8"}
        </SwiperSlide>
        <SwiperSlide className="text-center text-lg bg-[#444] flex justify-center items-center">
          {"Slide 9"}
        </SwiperSlide> */}
      </Swiper>
    </div>
  )
}
