import { Link } from "react-router";
import { Button, Card, CardContent, Badge } from "@mui/material";
import Heading from "../../../components/heading/Heading";
import StarIcon from "@mui/icons-material/Star";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InventoryOutlinedIcon  from '@mui/icons-material/InventoryOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CountUp from 'react-countup';

const stats =[
    {
        title: <CountUp end={100} duration={3} separator=","  suffix="K" />,
        description:'Orders Delivered',
        icon: <InventoryOutlinedIcon />
    },
    {
        title: <CountUp start={0} end={4.9} decimals={1} />,
        description:'Average Customer Rating',
        icon: <StarIcon />
    },
    {
        title: <CountUp end={10} duration={3} separator=","  suffix="K" />,
        description:'Happy Customers',
        icon: <PeopleAltOutlinedIcon />
    },
    {
        title: <CountUp start={0} end={99} duration={3} separator="," />,
        description:'On-Time Delivery',
        icon: <LocalShippingOutlinedIcon />
    }

]

export default function CustomerLove() {

  return (
  <>
      {/* Our Impact Section */}
          <Heading CustomerLove={'Why Customer Love Us'} />
      <section className="py-10">
        <div className="container mx-auto lg:flex lg:justify-center">
          <div className="max-w-7xl p-8 py-0">            
            {/* Statistics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-6">
              {/* Countries Represented */}
              {stats.map((stat,ind)=>{
                return (
                  <div key={ind} className="bg-white rounded-2xl p-12 shadow-sm shadow-slate-300 border border-gray-100">
                    <div className="text-5xl font-bold text-secondary mb-3">{stat.title}</div>
                    <div className="text-gray-700 font-medium mb-6">{stat.description}</div>
                    <div className="w-12 h-12 bg-cardbg text-secondary rounded-full flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                )
              })}
             
            </div>
          </div>
        </div>
      </section>

    
     
      </>
  )
}