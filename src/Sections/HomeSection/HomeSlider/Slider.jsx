import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
// import Iphone from "../../../../assets/images/home hero/iphone.png";
import Iphone from "../../../../assets/images/home hero/headphone_31.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import AppleIcon from "@mui/icons-material/Apple";
import Banner1 from "../../../../assets/images/banner/banner1.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  const slides = [
  {
    id: 1,
    title: "Welcome to Subhii Store",
    subtitle: <><AppleIcon /> Latest Electronics</>,
    text: `Discover top-notch electronic gadgets for every need — from smartphones to smartwatches, power banks to Bluetooth speakers. Explore a world of innovation with quality you can trust.`,
    img: Iphone, // Replace with Headphones image if needed
    bg: Banner1,
  },
  {
    id: 2,
    title: "Big Collection of Mobile Accessories",
    subtitle: <><AppleIcon /> Big Collection</>,
    text: `Enhance your mobile experience with our premium range of accessories — fast chargers, durable cables, protective cases, and high-quality earphones. Style and performance, all in one place.`,
    img: Iphone, // Replace with mobile accessories image
    bg: Banner1,
  },
  {
    id: 3,
    title: "Crystal Clear Sound",
    subtitle: <><AppleIcon /> Headphones</>,
    text: `Immerse yourself in powerful audio with our noise-cancelling headphones. Designed for comfort, clarity, and deep bass — perfect for music, gaming, or calls.`,
    img: Iphone, // Replace with headphone image
    bg: Banner1,
  },
];


  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#fff",
        "--swiper-pagination-color": "#fff",
        background:'transparent'
      }}
      speed={600}
      parallax
      pagination={{ clickable: true }}
      modules={[Parallax, Pagination, Navigation]}
      className="mySwiper md:rounded rounded-none "
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide.id}
          style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            backgroundImage: `url(${slide.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding:'2rem 0rem 3rem 0rem',
          }}
        >
           <div className="content flex flex-col md:flex-row justify-between items-center w-full h-full max-w-7xl mx-auto p-6 md:px-6 lg:px-8">
          {/* Left Content Section */}
          <div className="left flex flex-col justify-center text-center md:text-left flex-1 p-0 py-6 md:p-12 text-black">
            {/* Subtitle with Apple Icon */}
            <div className="md:inline-flex gap-2 text-base md:text-lg font-medium text-gray-700 mb-2" data-swiper-parallax="-200">
              {slide.subtitle}
            </div>
            {/* Main Title */}
            <div
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 md:mb-6"
              data-swiper-parallax="-300"
            >
              {slide.title}
            </div>
            {/* Paragraph Text */}
            <div className="text-base md:text-lg text-gray-700 mb-8 md:mb-10">
              <p>{slide.text}</p>
            </div>
            {/* Shop Button */}
            <div className="submit-btn mt-2">
              {/* Using Material-UI Button with custom styling */}
              <Button
                className="w-40 h-12 !bg-[#00C7B1] hover:!bg-[#00A08C] !text-white gap-1 !rounded-md !shadow-lg !transition-all !duration-300" // Teal color from screenshot
                variant="contained" // Use 'contained' for solid background
              >
                Shop {/* Using ArrowOutwardIcon from Material-UI */}
                <ArrowOutwardIcon fontSize="small" />
              </Button>
            </div>
          </div>
          {/* Right Image Section */}
          <div className="right hidden md:flex md:p-12">
            <div className="image" data-swiper-parallax="-300">
              <img src={slide.img || "/placeholder.svg"} alt="Product" className="max-w-full h-auto object-contain" />
            </div>
          </div>
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}