import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import Iphone from "../../../../assets/images/home hero/iphone.png";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AppleIcon from '@mui/icons-material/Apple';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Parallax, Pagination, Navigation } from "swiper/modules";

// <style>
//   {
//     `
// .swiper {
//   width: 100%;
//   height: 100%;
//   background: #000;
// }

// .swiper-slide {
//   font-size: 18px;
//   color: #fff;
//   -webkit-box-sizing: border-box;
//   box-sizing: border-box;
//   padding: 40px 60px;
// }

// .parallax-bg {
//   position: absolute;
//   left: 0;
//   top: 0;
//   width: 130%;
//   height: 100%;
//   -webkit-background-size: cover;
//   background-size: cover;
//   background-position: center;
// }

// .swiper-slide .title {
//   font-size: 41px;
//   font-weight: 300;
// }

// .swiper-slide .subtitle {
//   font-size: 21px;
// }

// .swiper-slide .text {
//   font-size: 14px;
//   max-width: 400px;
//   line-height: 1.3;
// }
// .swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
//     background: lightgray;
// }

//     `
//   }
// </style>
export default function Slider() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper md:rounded rounded-none"
      >
        <div
          slot="container-start"
          className="parallax-bg bg-black"
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="content flex justify-between ">
            <div className="left pt-5 md:pt-5 lg:pt-16">
              <div className="" data-swiper-parallax="-200">
                <AppleIcon /> Welcome
              </div>
              <div className="text-4xl mb-3 md:mb-5" data-swiper-parallax="-300">
                To Subhii Store
              </div>

              <div className="text mb-5 md:mb-6" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             
                </p>
              </div>
              <div className="submit-btn mt-2 ">
                
                <Button
                 className="w-40 h-12 !bg-secondary gap-1 "
                 variant="contained">
                  Shop 
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
                
              </div>
            </div>
            <div className="right hidden sm:flex sm:pt-5 sm:items-center md:items-center md:justify-end ">
              <div className="image " data-swiper-parallax="-300">
                <img src={Iphone} alt="Nature 1" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content flex justify-between">
            <div className="left  pt-3 md:pt-5 lg:pt-16">
              <div className="" data-swiper-parallax="-200">
                Welcome
              </div>
              <div className="text-4xl mb-3 md:mb-5" data-swiper-parallax="-300">
                To Subhii Store
              </div>

              <div className="text mb-5 md:mb-6" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             
                </p>
              </div>
              <div className="submit-btn mt-2  ">
                <Button className="w-40 h-12 !bg-secondary gap-1 " variant="contained">
                  Shop 
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
                
              </div>
            </div>
            <div className="right hidden sm:flex sm:pt-5 sm:items-center md:items-center md:justify-end ">
              <div className="image " data-swiper-parallax="-300">
                <img src={Iphone} alt="Nature 1" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="content flex justify-between">
            <div className="left  pt-3 md:pt-5 lg:pt-16">
              <div className="" data-swiper-parallax="-200">
                Welcome
              </div>
              <div className="text-4xl mb-3 md:mb-5" data-swiper-parallax="-300">
                To Subhii Store
              </div>

              <div className="text mb-5 md:mb-6" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             
                </p>
              </div>
              <div className="submit-btn mt-2  ">
                <Button className="w-40 h-12 !bg-secondary gap-1 " variant="contained">
                  Shop 
                  <ArrowOutwardIcon fontSize="small" />
                </Button>
                
              </div>
            </div>
            <div className="right hidden sm:flex sm:pt-5 sm:items-center md:items-center md:justify-end ">
              <div className="image " data-swiper-parallax="-300">
                <img src={Iphone} alt="Nature 1" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
