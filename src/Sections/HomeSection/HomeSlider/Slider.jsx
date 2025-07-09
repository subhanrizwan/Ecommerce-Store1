// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "@mui/material";
import Iphone from "../../../../assets/images/home hero/iphone.png";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import AppleIcon from '@mui/icons-material/Apple';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
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
          className="parallax-bg bg-black "
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="content flex justify-between ">
            <div className="left pt-3 md:pt-5 lg:pt-10">
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
