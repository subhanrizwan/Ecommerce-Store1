import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import { Tooltip } from "@mui/material";
import { Grid, Pagination } from "swiper/modules";

// Styled Components
const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background: transparent;
  display:flex;
  justify-content:center;
`;
const StyledSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  color: #000;
  border: 1px solid lightgray;
  border-radius: 50%;
  background: transparent;
  height: 200px;
  width: 200px!important;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  cursor: pointer;
  // &:hover {
  //   background-color: #db4444;
  //   color: white;
  // }
`;

export default function Slder2() {
  return (
    <StyledSwiper
  slidesPerView={4}
  grid={{ rows: 1 }}
  spaceBetween={40}   
  breakpoints={{
    320: {
      slidesPerView: 1,
      grid:{row:2},
      spaceBetween: 16,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
  }}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  modules={[Grid, Pagination]}
>

      <StyledSlide>
  <Tooltip title="Headphone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
        <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
    <HeadphonesOutlinedIcon fontSize="large" />
  </div>
</Tooltip>
</StyledSlide>

           <StyledSlide>
              <Tooltip title="Phone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
                <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
                  <PhoneAndroidOutlinedIcon fontSize="large" />
                </div>
            </Tooltip>
          </StyledSlide>
      <StyledSlide>
         <Tooltip title="Desktop" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
            <DesktopMacOutlinedIcon fontSize="large" />
          </div>
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
          <Tooltip title="Gaming" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
            <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
              <SportsEsportsOutlinedIcon fontSize="large" />
            </div>
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
         <Tooltip title="Watch" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
            <WatchOutlinedIcon fontSize="large" />
          </div>
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
          <Tooltip title="Headphone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >          {/* <IconButton> */}
            <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
              <CameraAltOutlinedIcon fontSize="large" />
            </div>
          {/* </IconButton> */}
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
        <Tooltip title="Headphone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
          <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
            <WatchOutlinedIcon fontSize="large" />
          </div>
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
       <Tooltip title="Headphone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
            <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
              <CameraAltOutlinedIcon fontSize="large" />
            </div>
        </Tooltip>
      </StyledSlide>
      <StyledSlide>
          <Tooltip title="Headphone" placement="bottom" arrow
    componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#fa4f09',         
        color: '#fff',              
        fontSize: '0.7rem',          
        fontWeight: 600,
        boxShadow: 3,    
        borderRadius: 1,            
        px: 2,                      
        py: 1,   

      }
    },
    arrow: {
      sx: {
        color: '#db4444',           // arrow color (same as bg)
      }
    }
  }}
  >
            <div className="flex flex-col text-black items-center text-sm gap-y-5 bg-gray-100 p-14 rounded-full">
              <CameraAltOutlinedIcon fontSize="large" />
            </div>
        </Tooltip>
      </StyledSlide>
    </StyledSwiper>
  );
}
