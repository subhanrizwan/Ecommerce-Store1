"use client"
import { useEffect } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ProductCard from "./ProductCard.jsx"


export default function ResponsiveSlider() {
 useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .slick-prev:before,
      .slick-next:before {
        color: #03ada4 !important;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style); // cleanup
    };
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    
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
