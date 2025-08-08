import { useState } from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { CiDeliveryTruck } from "react-icons/ci";

const cards = [
  {
    id: 1,
    icon: <CiDeliveryTruck fontSize="large" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    icon: <LocalShippingIcon fontSize="large" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 3,
    icon: <LocalShippingIcon fontSize="large" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 3,
    icon: <LocalShippingIcon fontSize="large" />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
];

function SelectActionCard() {
  const [selectedCard, setSelectedCard] = useState(0);
  return (
    <>
    <div className="flex justify-center justify-around ">
      {cards.map((card, index) => (
        <Card
          sx={{
            boxShadow: "none",
            // border:'1px solid lightgray',
            textAlign: "center",
          }}
        >
          <CardActionArea
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "100%",
              transition:'0.5s',
              "&[data-active]": {
                "&:hover": {
                
                },
              },
            }}
          >
            <CardContent
              sx={{
                height: "100%",
              }}
            >
              <Typography
                sx={{
                  marginTop: "0.5rem",
                  marginBottom: "1.2rem",
                }}
                variant="b"
                component="div"
              >
                {card.icon}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "1rem",
                  fontWeight: "bold",
                  
                }}
                variant="b"
                component="div"
              >
                {card.title}
              </Typography>
              <Typography
                sx={{
                  marginBottom: "0.5rem",
                  fontSize:'0.7rem',
                  
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
    </div>
    </>
  );
}

export default SelectActionCard;
