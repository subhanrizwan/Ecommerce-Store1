import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router";

import Iphone from "../../../../assets/images/home hero/headphone_31.png";
import Banner1 from "../../../../assets/images/banner/banner1.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    title: "Welcome to Subhii Store",
    subtitle: <><AppleIcon /> Latest Electronics</>,
    text: `Discover top-notch electronic gadgets for every need — from smartphones to smartwatches, power banks to Bluetooth speakers. Explore a world of innovation with quality you can trust.`,
    img: Iphone,
    bg: Banner1,
  },
  {
    id: 2,
    title: "Big Collection of Mobile Accessories",
    subtitle: <><AppleIcon /> Big Collection</>,
    text: `Enhance your mobile experience with our premium range of accessories — fast chargers, durable cables, protective cases, and high-quality earphones. Style and performance, all in one place.`,
    img: Iphone, 
    bg: Banner1,
  },
  {
    id: 3,
    title: "Crystal Clear Sound",
    subtitle: <><AppleIcon /> Headphones</>,
    text: `Immerse yourself in powerful audio with our noise-cancelling headphones. Designed for comfort, clarity, and deep bass — perfect for music, gaming, or calls.`,
    img: Iphone,
    bg: Banner1,
  },
];


export default function Slider() {
  
  const navigate = useNavigate();

  const gotoShop=()=>{
    navigate('/shop');
  }

  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        background: 'transparent'
      }}
      speed={1000}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}

      parallax
      pagination={{ clickable: true }}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="rounded-none mySwiper md:rounded "
    >

      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: '2rem 0rem 3rem 0rem',
          }}
        >
          <span className="absolute top-0 z-10 rounded-full w-72 h-72 bg-secondary opacity-15 left-72 animate-float"></span>
          <span className="absolute w-32 h-32 z-10 bg-teal-400 rounded-full opacity-15 -bottom-8 right-1/3 animate-float [animation-delay:2s]"></span>
          <span className="absolute w-20 h-20 z-10 bg-teal-400 rounded-full opacity-15 top-1/3 -right-8 animate-float [animation-delay:1s]"></span>
          <div className="flex flex-col items-center justify-between w-full h-full p-6 mx-auto content md:flex-row max-w-7xl md:px-6 lg:px-8">
            {/* Left Content Section */}
            <div className="flex flex-col justify-center flex-1 p-0 py-6 text-center text-black left md:text-left md:p-12">
              {/* Subtitle with Apple Icon */}
              <div className="gap-2 mb-2 text-base font-medium text-gray-700 md:inline-flex md:text-lg" data-swiper-parallax="-200">
                {slide.subtitle}
              </div>
              {/* Main Title */}
              <div
                className="mb-5 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl md:mb-6"
                data-swiper-parallax="-300"
              >
                {slide.title}
              </div>
              {/* Paragraph Text */}
              <div className="mb-8 text-base text-gray-700 md:text-lg md:mb-10">
                <p>{slide.text}</p>
              </div>
              {/* Shop Button */}
              <div className="mt-2 submit-btn">
                <Button
                onClick={gotoShop}
                  className="w-40 h-12 !bg-[#00C7B1] hover:!bg-[#00A08C] !text-white gap-1 !rounded-md !shadow-lg !transition-all !duration-300" // Teal color from screenshot
                  variant="contained"
                >
                  Shop
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
              </div>
            </div>
            {/* Right Image Section */}
            <div className="hidden right md:flex md:p-12">
              <div className="image" data-swiper-parallax="-300">
                <img src={slide.img || "/placeholder.svg"} alt="Product" className="object-contain h-auto max-w-full" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

