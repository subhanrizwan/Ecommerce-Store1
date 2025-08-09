import { Button, IconButton, Badge } from "@mui/material";
import Shoes from "../../../../assets/images/products/image.png";
// import PriceCircle from "./PriceCircle"
import { IoCartOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
const ProductCard = () => {
  const [heart, isHeartUpdate] = useState("#DB4444");

  return (
    <>
      {/* <PriceCircle /> */}
      <RemoveRedEyeIcon
        fontSize="small"
        className="absolute text-gray-400 translate-y-10 mt-4 xl:mt-5 translate-x-20 rounded-[100%]  "
      />
      <div className="relative card group mt-6 pt-16 px-12 pb-0 w-80 h-[360px] bg-cardbg rounded">
        <img
          src={Shoes}
          alt=""
          style={{
            filter: "drop-shadow(5px 10px 15px rgba(8,9,13,.4))",
            transition: ".5s",
          }}
          className="card__img mb-7 drop group-hover:transform group-hover:-translate-x-[1rem] group-hover:-translate-y-[5rem] group-hover:-rotate-[10deg]"
        />
        {/* <div class="card__content">  */}
        <div className="card__data">
          <h1
            style={{ transition: ".5s" }}
            className="card__title opacity-1 text-center translate-y-6 group-hover:opacity-100 group-hover:transform  group-hover:-translate-y-[4rem] text-lg mb-0 font-bold text-gray-500 "
          >
            Nike Air Jordan
          </h1>

          <h1
            style={{ transition: ".5s" }}
            className="card__title opacity-1 text-center translate-y-8 group-hover:opacity-100 group-hover:transform  group-hover:-translate-y-[3.8rem] text-lg mb-0 font-bold text-gray-500 "
          >
            $12.00
          </h1>

          {/* <p
            style={{ transition: ".5s" }}
            className="card__description text-center -translate-x-20 group-hover:translate-x-1 group-hover:transform group-hover:opacity-100 group-hover:-translate-y-[4.5rem] text-sm mb-0 opacity-0 mt-3 text-gray-500 "
          >
            Nike Air Jordan Footwear basketball sneakers.
          </p> */}
          <div
            style={{ transition: ".5s" }}
            className="flex justify-center items-center gap-x-6 mb-3 mt-0 opacity-0 group-hover:transform group-hover:opacity-100 group-hover:-translate-y-[3rem]"
          >
            <IconButton>
              <MdFavoriteBorder
                fontSize="large"
                // style={{ transition: ".5s" }}
                // className="text-gray-500 translate-x-2 translate-y-30 opacity-0 group-hover:transform group-hover:opacity-100 group-hover:translate-y-0  "
              />
            </IconButton>
            <IconButton>
              <IoEyeOutline
                fontSize="large"
                // style={{ transition: ".5s" }}
                // className="text-gray-500 translate-x-2 translate-y-30 opacity-0 group-hover:transform group-hover:opacity-100 group-hover:translate-y-0  "
              />
            </IconButton>
          </div>
          <Button
            style={{ transition: ".5s" }}
            className="w-full h-10 gap-x-3 !bg-secondary opacity-0 group-hover:transform group-hover:opacity-100 group-hover:-translate-y-[3rem]"
            variant="contained"
          >
            <IoCartOutline fontSize={"large"} />
            Add to Cart
          </Button>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ProductCard;
