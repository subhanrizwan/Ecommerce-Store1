import { Button } from "@mui/material";
import Shoes from "../../../../assets/images/products/image.png";
import PriceCircle from "./PriceCircle";
import FavoriteIcon from '@mui/icons-material/Favorite';import { useState } from "react";
const ProductCard = () => {
  const [heart,isHeartUpdate] = useState('#DB4444')
  
  const UpdateHeart=()=>{
    console.log("hellow");
  }
  return (
    <>
    <PriceCircle />
    <FavoriteIcon
    fontSize="small"
    className="absolute text-gray-400 -translate-y-24 mt-3 translate-x-12 rounded-[100%]  " /> 
      <div className="card group mt-10 pt-16 px-10 pb-0 w-80 h-[360px] bg-gray-100 rounded ">
        <img
          src={Shoes}
          alt=""
          style={{
            filter: "drop-shadow(5px 10px 15px rgba(8,9,13,.4))",
            transition: ".5s",
          }}
          className="card__img mb-7 drop  group-hover:transform group-hover:-translate-x-[1.5rem] group-hover:-translate-y-[7rem] group-hover:-rotate-[20deg]"
        />
        {/* <div class="card__content">  */}
        <div className="card__data">
          <h1
            style={{ transition: ".5s" }}
            className="card__title opacity-1 text-center translate-y-10 group-hover:opacity-100 group-hover:transform  group-hover:-translate-y-[5rem] text-lg mb-0 font-bold text-secondary"
          >
            Nike Air Jordan
          </h1>
          {/* <p
            style={{ transition: ".5s" }}
            className="card__price opacity-0 translate-x-28 group-hover:opacity-100 group-hover:transform  group-hover:-translate-y-[6rem] text-lg font-bold text-secondary"
          >
            $99
          </p> */}
          <p
            style={{ transition: ".5s" }}
            className="card__description text-center -translate-x-20 group-hover:translate-x-1 group-hover:transform group-hover:opacity-100 group-hover:-translate-y-[5rem] text-sm mb-3 opacity-0 mt-3"
          >
            Nike Air Jordan Footwear basketball sneakers.
          </p>
          <Button
            style={{ transition: ".5s" }}
            className="w-full h-10 !bg-secondary opacity-0 group-hover:transform group-hover:opacity-100 group-hover:-translate-y-[3.5rem]"
            variant="contained"
          >
            Add to Cart
          </Button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ProductCard;
