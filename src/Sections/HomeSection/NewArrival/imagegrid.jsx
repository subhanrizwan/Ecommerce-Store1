import Rectangle from "../../../components/rectangle";
import Iphone from "../../../../assets/images/home hero/iphone.png";

import Playstation from '../../../../assets/images/new arrivals/liver.png'
import { Button } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import AppleIcon from '@mui/icons-material/Apple';

export default function GridLayout() {
  return (
    <div className="min-h-screen p-8 pt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[400px]">
          <div
           className="lg:col-span-2 bg-black text-white rounded-lg">
          </div>
          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {/* Top Right Section - Women's Collections */}
            <div className="bg-black rounded-lg flex-1">{/* Your Women's Collections content goes here */}</div>

            {/* Bottom Right Row */}
            <div className="grid grid-cols-2 gap-4 flex-1">
              {/* Speakers Section */}
              <div className="bg-black rounded-lg">{/* Your Speakers content goes here */}</div>

              {/* Perfume Section */}
              <div className="bg-black rounded-lg">{/* Your Perfume content goes here */}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
