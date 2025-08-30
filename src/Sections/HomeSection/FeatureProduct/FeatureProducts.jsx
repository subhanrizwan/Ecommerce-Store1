import { Link } from "react-router";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import Heading from "../../../components/heading/Heading";
import Subhan from "../../../../assets/images/OurTeam/subhan.jfif";
import { Tooltip } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../Context/context";

const FeatureProducts = () => {

const { isLoading, featureProducts } = useContext(AppContext);

if(isLoading){
  return <div>Loading...</div>
}
  return (
    
    <>
      <Heading FeatureProduct={"Feature Products"} />{" "}
      <div className="py-6 mb-10 bg-white">
        <div className="container mx-auto">
          <div className="px-4 mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10">
              {featureProducts.map((Product) => (
                <div
                  key={Product.id}
                  className="relative group cursor-pointer w-[300px]"
                >
                  {/* Mentor Image */}
                  <div
                    className="relative h-[240px] w-full bg-no-repeat bg-center bg-cover overflow-hidden"
                    style={{ backgroundImage: `url(${Product.image})` }}
                  >
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-black/20 group-hover:opacity-100" />

                    {/* Social Icons */}
                    <div className="absolute inset-0 flex flex-col items-end justify-center gap-4 transition-all duration-300 translate-x-6 opacity-0 group-hover:-translate-x-5 group-hover:opacity-100">
                      <Link>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary">
                          <IoIosHeart className="text-sm text-white " />
                        </div>
                      </Link>
                      <Link>
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary">
                          <IoEyeOutline className="text-sm text-white " />
                        </div>
                      </Link>
                      <Tooltip title="Add to Cart" arrow>
                        <Link>
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary">
                            <IoCartOutline className="text-white text-md" />
                          </div>
                        </Link>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Name & Price (Stable, Always Visible) */}
                  <div className="flex items-center justify-between gap-1 py-3">
                    <p className="text-base font-semibold text-gray-800">
                      {Product.name}
                    </p>
                    <p className="text-sm font-medium text-secondary">{Product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
