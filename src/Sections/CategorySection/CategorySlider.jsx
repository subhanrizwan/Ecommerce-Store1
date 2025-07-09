// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import styled from 'styled-components';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// import './style2.css';

// // import required modules
// import { EffectCards } from 'swiper/modules';


// const StyledSwiper = styled(Swiper)`
//   width: 240px;
//   height: 320px;
// `;

// const StyledSlide = styled(SwiperSlide)`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 18px;
//   font-size: 22px;
//   font-weight: bold;
//   color: #fff;
//   background-color: ${({ $idx }) => {
//     const colors = [
//       "rgb(206, 17, 17)",
//       "rgb(0, 140, 255)",
//       "rgb(10, 184, 111)",
//       "rgb(211, 122, 7)",
//       "rgb(118, 163, 12)",
//       "rgb(180, 10, 47)",
//       "rgb(35, 99, 19)",
//       "rgb(0, 68, 255)",
//       "rgb(218, 12, 218)",
//       "rgb(54, 94, 77)"
//     ];
//     return colors[$idx % colors.length];
//   }};
// `;

// export default function BrowseByCategory() {
//   return (
//     <>
//       <StyledSwiper
//         effect={'cards'}
//   grabCursor={true}
//   modules={[EffectCards]}
//         className="categorySwiper"
//       >
//         {/* <SwiperSlide>Slide 1</SwiperSlide>
//         <SwiperSlide>Slide 2</SwiperSlide>
//         <SwiperSlide>Slide 3</SwiperSlide>
//         <SwiperSlide>Slide 4</SwiperSlide>
//         <SwiperSlide>Slide 5</SwiperSlide>
//         <SwiperSlide>Slide 6</SwiperSlide>
//         <SwiperSlide>Slide 7</SwiperSlide>
//         <SwiperSlide>Slide 8</SwiperSlide>
//         <SwiperSlide>Slide 9</SwiperSlide> */}
//           {[...Array(9)].map((_, idx) => (
//         <StyledSlide $idx={idx} key={idx}>
//           Slide {idx + 1}
//         </StyledSlide>
//       ))}
//       </StyledSwiper>
//     </>
//   );
// }

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import './style2.css'; // <-- is line ko hata dein

// import required modules
import { EffectCards } from 'swiper/modules';

const StyledSwiper = styled(Swiper)`
  width: 240px;
  height: 320px;
  background:transparent;
`;

const StyledSlide = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ $idx }) => {
    const colors = [
      "rgb(206, 17, 17)",
      "rgb(0, 140, 255)",
      "rgb(10, 184, 111)",
      "rgb(211, 122, 7)",
      "rgb(118, 163, 12)",
      "rgb(180, 10, 47)",
      "rgb(35, 99, 19)",
      "rgb(0, 68, 255)",
      "rgb(218, 12, 218)",
      "rgb(54, 94, 77)"
    ];
    return colors[$idx % colors.length];
  }};
`;

export default function BrowseByCategory() {
  return (
    <StyledSwiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
    >
      {[...Array(9)].map((_, idx) => (
        <StyledSlide $idx={idx} key={idx}>
          Slide {idx + 1}
        </StyledSlide>
      ))}
    </StyledSwiper>
  );
}