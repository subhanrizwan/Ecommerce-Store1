import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { Grid, Pagination } from 'swiper/modules';

// Styled Components
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background:transparent;
`;
const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  color:#000;
  border: 1px solid lightgray;
  border-radius:2%; 
  background: transparent;
  height:150px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition : 0.3s;
   &:hover {
    background-color:#DB4444;
    color: white;
  }
`;


export default function Slder2() {
  return (
    <StyledSwiper
      slidesPerView={5}
      grid={{
        rows: 1,
      }}
      spaceBetween={40}
    
          //   pagination={{
    //     clickable: false,
    //   }}
      modules={[Grid, Pagination]}
    >
      {/* {[...Array(9)].map((_, idx) => (
        <StyledSlide key={idx}>Slide {idx + 1}</StyledSlide>
      ))} */}
       <StyledSlide>
        <div className="flex flex-col items-center gap-y-5">
    <HeadphonesOutlinedIcon fontSize='large' /> Headphone
    </div>
      </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <PhoneAndroidOutlinedIcon fontSize='large' /> Phone
    </div>
    </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <DesktopMacOutlinedIcon fontSize='large' /> Phone
    </div>
  </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <SportsEsportsOutlinedIcon fontSize='large' /> Gaming
    </div>
  </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <WatchOutlinedIcon fontSize='large' /> Watch
    </div>
  </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <CameraAltOutlinedIcon fontSize='large' /> Camera
    </div>
  </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <CameraAltOutlinedIcon fontSize='large' /> Camera
    </div>
  </StyledSlide>
  <StyledSlide>
    <div className="flex flex-col items-center gap-y-5">
    <CameraAltOutlinedIcon fontSize='large' /> Camera
    </div>
  </StyledSlide>

    </StyledSwiper>
  );
}