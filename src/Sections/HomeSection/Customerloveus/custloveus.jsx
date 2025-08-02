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
              <div className="w-1 h-32 bg-gradient-to-b from-purple-500 to-orange-500 rounded-full mr-8 flex-shrink-0"></div>
              <div>
                <p className="text-gray-600 mb-4 text-lg">Our Impact ____________</p>
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
              {/* <div className="bg-white rounded-2xl p-12 shadow-sm shadow-slate-300 border border-gray-100">
                <div className="text-5xl font-bold text-secondary mb-3">100K+</div>
                <div className="text-gray-700 font-medium mb-6">Orders Delivered</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
              </div> */}

              {/* Successful Graduates */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-300 border border-gray-100">
                <div className="text-5xl font-bold text-secondary mb-3">4.9★</div>
                <div className="text-gray-700 font-medium mb-6">Average Customer Rating</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
              </div> */}

              {/* Career Success Rate */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-300 border border-gray-100">
                <div className="text-5xl font-bold text-secondary mb-3">10K</div>
                <div className="text-gray-700 font-medium mb-6">Happy Customers</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-secondary"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                </div>
              </div> */}

              {/* Learner Rating */}
              {/* <div className="bg-white rounded-2xl p-8 shadow-sm shadow-slate-300 border border-gray-100">
                <div className="text-5xl font-bold text-secondary mb-3">24/7</div>
                <div className="text-gray-700 font-medium mb-6">Customer Support</div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-secondary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9l-5 4.87 1.18 6.88L12 17.77l-6.18 2.98L7 14.87 2 9l6.91-1.74L12 2z" />
                  </svg>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

    
     
      </>
  )
}