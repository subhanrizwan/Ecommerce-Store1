import { useNavigate } from "react-router";
import { useContext } from "react";
import { IoCartOutline, IoEyeOutline } from "react-icons/io5";
import { IoIosHeart } from "react-icons/io";
import Heading from "../components/heading/Heading";
import { Tooltip, Modal, Box, Typography, Button, Fade } from "@mui/material";
import { AppContext } from "../Context/context";
import FormatePrice from "../Helpers/FormatePrice";
import Img1 from "../../assets/images/products/headphone-image.jpg";

const Shop = () => {

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const { isLoading, products } = useContext(AppContext);

  const navigate = useNavigate();
  const goToSingleProduct = (id) => {
    navigate(`/SingleProduct/${id}`);
  };

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  // const style = {
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  //   width: 400,
  //   backgroundImage: `url(${Img1})`,
  //   backgroundImageSize: 'cover',
  //   border: '2px solid #000',
  //   boxShadow: 24,
  //   p: 4,
  // };
  return (
    <>
      <Heading Product={"Products"} />{" "}
      <div className="py-6 mb-10 bg-white">
        <div className="container mx-auto">
          <div className="flex px-4 mx-auto max-w-7xl">
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 w-[100%] -z-99">
              {products.slice(0, 6).map((Product) => (
                <div
                  key={Product.id}
                  className="relative group cursor-pointer w-[300px]"
                >
                  {/* Image */}
                  <div
                    className="relative h-[240px] w-full bg-no-repeat bg-center bg-cover overflow-hidden -z-99"
                    style={{ backgroundImage: `url(${Product.image})` }}
                  >
                    {/* Dark overlay on hover */}
                    <div className="absolute inset-0 transition-all duration-300 opacity-0 bg-black/60 group-hover:opacity-100 -z-99" />

                    {/* Social Icons */}
                    <div className="absolute inset-0 flex flex-col items-end justify-center gap-4 transition-all duration-300 translate-x-6 opacity-0 group-hover:-translate-x-5 group-hover:opacity-100">
                      {/* heart */}
                      <Tooltip title="Save" arrow placement="left">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary">
                          <IoIosHeart className="text-sm text-white " />
                        </div>
                      </Tooltip>
                      {/* visit */}
                      <div

                        onClick={() => goToSingleProduct(Product.id)}>
                        <Tooltip
                          title="Visit" arrow placement="left">
                          <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full z-99 bg-secondary text-secondary">
                            <IoEyeOutline
                              className="text-sm text-white " />
                          </div>
                        </Tooltip>
                      </div>
                      {/* Add to cart */}
                      <Tooltip title="Add to Cart" arrow placement="left">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary z-99">
                          <IoCartOutline className="text-white text-md" />
                        </div>
                      </Tooltip>
                    </div>
                  </div>

                  {/* Name & Price (Stable, Always Visible) */}
                  <div className="flex items-center justify-between gap-1 py-3">
                    <p className="text-base font-semibold text-gray-800 capitalize">
                      {Product.name}
                    </p>
                    <p className="text-sm font-medium text-secondary">
                      <FormatePrice price={Product.price} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        // slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Fade>
      </Modal> */}
    </>
  )
}

export default Shop;