import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import KeyboardReturnOutlinedIcon from '@mui/icons-material/KeyboardReturnOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
const cards = [
  {
    id: 1,
    icon: <DeliveryDiningOutlinedIcon fontSize="large" className="text-1xl" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <KeyboardReturnOutlinedIcon fontSize="large" />,
    title: "14-Day Returns",
    description: "Risk-free shopping with easy returns",
  },
  {
    id: 3,
    icon: <SupportAgentOutlinedIcon fontSize="large" />,
    title: "24/7 Support",
    description: "24/7 Support,always here just for you",
  },
  {
    id: 3,
    icon: <DiscountOutlinedIcon fontSize="large" />,
    title: "Memeber Discount",
    description: "Special prices for our loyal customer",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <>
    {/* <div className="flex !justify-center flex-wrap"> */}
      {cards.map((card, index) => (
        <Card
          sx={{
            boxShadow: "none",
            textAlign: "center",
           
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              // transition:'0.5s',
              // "&[data-active]": {
              //   "&:hover": {
              //   },
              // },
            }}
          >
            <CardContent
              sx={{
                height: "100%",
              }}
            >
              <Typography className="text-secondary"
                              sx={{

                  marginTop: "0.5rem",
                  marginBottom: "1.2rem",
                }}
                variant="b"
                component="div"
              >
                {card.icon}
              </Typography>
              <Typography className="text-secondary"
                sx={{
                  fontSize:'1.3rem',
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  
                }}
                variant="b"
                component="div"
              >
                {card.title}
              </Typography>
              <Typography className="!text-secondary"
                sx={{
                  marginBottom: "0.5rem",
                  fontSize:'0.8rem',
                  
                }}
                variant="body2"
                color="text.secondary"
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    {/* </div> */}
    </>
  );
}

export default SelectActionCard;
