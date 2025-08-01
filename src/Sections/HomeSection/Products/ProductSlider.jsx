"use client"
import { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard from "./ProductCard.jsx"

// Custom Next Arrow Component
function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !flex items-center justify-center !w-10 !h-10 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors z-10`}
      style={{ ...style, display: "flex", right: "-25px" }} // Adjust right position
      onClick={onClick}
      aria-label="Next Slide"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="36" 
        width="36" 
      >
        {/* <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37"></circle> */}
        <path
          fill="white"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        ></path>
      </svg>
    </div>
  )
}

// Custom Prev Arrow Component
function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={`${className} !flex items-center justify-center !w-10 !h-10 rounded-full bg-gray-800/50 hover:bg-gray-800/70 transition-colors z-10`}
      style={{ ...style, display: "flex", left: "-25px" }} // Adjust left position
      onClick={onClick}
      aria-label="Previous Slide"
      role="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 74 74"
        height="36"
        width="36"
        style={{ transform: "rotate(180deg)" }} // Rotate for previous arrow
      >
        {/* <circle strokeWidth="3" stroke="white" r="35.5" cy="37" cx="37"></circle> */}
        <path
          fill="white"
          d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
        ></path>
      </svg>
    </div>
  )
}

export default function ResponsiveSlider() {
//  useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       .slick-prev:before,
//       .slick-next:before {
//         color: #03ada4 !important;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style); // cleanup
//     };
//   }, []);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
    
  }
  
  return (
    
    <div className="container mx-auto py-0 px-4 max-w-screen-xl">
      {" "}
      {/* Added max-w-screen-xl for better containment */}
      
      <Slider {...settings}>
        {/* Added px-2 to the wrapper div for spacing between cards */}
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
      </Slider>
    </div>
  )
}
