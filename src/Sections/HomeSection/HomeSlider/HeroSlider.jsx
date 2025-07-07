import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AppleIcon from "@mui/icons-material/Apple";
import CallMadeIcon from '@mui/icons-material/CallMade';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Heroimage from '../../../../assets/images/home hero/iphone.png'
import "./style.css";


// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";

export default function App() {
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
        navigation={false}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            background:'#000',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="container flex justify-between">
            <div style={{padding:'40px 60px'}} className="left-side">
              <div
                className="flex space-x-2 space-y-2 mb-5 "
                data-swiper-parallax="-300"
              >
                <div className="logo">
                  <AppleIcon fontSize="large" />
                </div>
                <p className="text-sm">iPhone 14 Series</p>
              </div>
              <div className="text-6xl mb-7" data-swiper-parallax="-200">
                <h1 className="mb-3">Up to 10% </h1>
                <h1>off Voucher</h1>
              </div>
              <div className="text-1xl cursor-pointer" data-swiper-parallax="-100">
                <p>
                 Shop Now {" "} <CallMadeIcon fontSize="small" />
                </p>
              </div>
            </div>
            <div className="right">
                <img src={Heroimage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div> */}
             <div className="container flex justify-between">
            <div  style={{padding:'40px 60px'}} className="left-side p-5">
              <div
                className="flex space-x-2 space-y-2 mb-5"
                data-swiper-parallax="-300"
              >
                <div className="logo">
                  <AppleIcon fontSize="large" />
                </div>
                <p className="text-sm">iPhone 14 Series</p>
              </div>
              <div className="text-6xl mb-7" data-swiper-parallax="-200">
                <h1 className="mb-3">Up to 10% </h1>
                <h1>off Voucher</h1>
              </div>
              <div className="text-1xl cursor-pointer" data-swiper-parallax="-100">
                <p>
                 Shop Now {" "} <CallMadeIcon fontSize="small" />
                </p>
              </div>
            </div>
            <div className="right">
                <img src={Heroimage} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div> */}
             <div className="container flex justify-between">
            <div  style={{padding:'40px 60px'}} className="left-side p-5">
              <div
                className="flex space-x-2 space-y-2 mb-5"
                data-swiper-parallax="-300"
              >
                <div className="logo">
                  <AppleIcon fontSize="large" />
                </div>
                <p className="text-sm">iPhone 14 Series</p>
              </div>
              <div className="text-6xl mb-7" data-swiper-parallax="-200">
                <h1 className="mb-3">Up to 10% </h1>
                <h1>off Voucher</h1>
              </div>
              <div className="text-1xl cursor-pointer" data-swiper-parallax="-100">
                <p>
                 Shop Now {" "} <CallMadeIcon fontSize="small" />
                </p>
              </div>
            </div>
            <div className="right">
                <img src={Heroimage} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
