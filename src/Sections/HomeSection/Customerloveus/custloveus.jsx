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
        <div className="container mx-auto px-6">
          <div className="max-w-7xl">
            {/* Header with gradient line */}
            {/* <div className="flex items-start mb-12">
              <div className="w-1 h-32 bg-gradient-to-b from-secondary  rounded-full mr-8 flex-shrink-0"></div>
              <div>
                <p className="text-secondary mb-4 text-lg">Why Customer Love Us ____________</p>
                <div className="flex items-start mb-6">
                  <svg
                    className="w-8 h-8 text-secondary mr-4 mt-1 flex-shrink-0"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                  <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                      Moving the Needle with <span className="text-secondary">Tech-First Education</span>
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                      A world of opportunities awaits architecture, engineering, and construction (AEC) professionals.
                      Novatr is your key to unlocking it.
                    </p>
                    
                  </div>
                  
                </div>
              </div>
            </div> */}

            {/* Statistics Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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