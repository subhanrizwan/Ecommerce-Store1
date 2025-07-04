import React, { useContext } from "react";
import Herosection from "../components/Herosection";
import { AppContext } from "../Context/context";
import { useAppContext } from "../Context/context";
const Home = () => {
  const { name, ContactComponent } = useAppContext();
  return (
    <>
    <Herosection  Home={{ name: `Welcome to our Eccommerce Store 1 ${name}` }} />
    </>

  )
};

export default Home;
