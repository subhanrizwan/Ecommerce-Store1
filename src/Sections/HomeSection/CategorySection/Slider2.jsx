import { SwiperSlide } from "swiper/react";
import { Tooltip } from "@mui/material";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// Styled Components

const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  color: #000;
  border: 1px solid lightgray;
  border-radius: 50%;
  background: transparent;
  height: 130px;
  width: 130px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
`;

export default function Slder2({ icon: Icon, title }) {
  return (
    <>
      <StyledSlide>
        <Tooltip
          title={title}
          placement="bottom"
          arrow
          componentsProps={{
            tooltip: {
              sx: {
                bgcolor: "#fa4f09",
                color: "#fff",
                fontSize: "0.7rem",
                fontWeight: 600,
                boxShadow: 3,
                borderRadius: 1,
                px: 2,
                py: 1,
              },
            },
            arrow: {
              sx: {
                color: "#db4444", 
              },
            },
          }}
        >
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-10 rounded-full">
          <Icon fontSize="large" />
          </div>
        </Tooltip>
      </StyledSlide>

      
    </>
  );
}
