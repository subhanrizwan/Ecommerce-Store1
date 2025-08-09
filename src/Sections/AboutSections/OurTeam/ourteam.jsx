"use client"
import { Link } from "react-router";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { LuMails } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";

import Murali from '../../../../assets/images/OurTeam/murali.webp';
import Harsha from '../../../../assets/images/OurTeam/harsha.webp';
import Ami from '../../../../assets/images/OurTeam/ami.webp';
import Andre from '../../../../assets/images/OurTeam/andre.webp';
import Gluseppe from '../../../../assets/images/OurTeam/gluseppe.webp';

const mentors = [
  { id: 1, name: "Murali Manoj", image: Murali },
  { id: 2, name: "Afshan Rehman", image: Harsha },
  { id: 3, name: "Richard Stewart", image: Ami },
  { id: 4, name: "Giuseppe Dotto", image: Andre },
  { id: 5, name: "Ami Nigam", image: Gluseppe },
]

const OurTeam = () => {
  return (
    <div className="py-6 bg-white">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-x-6 gap-y-10 justify-center">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="relative group rounded-2xl overflow-hidden cursor-pointer h-[220px] w-[220px] bg-cardbg shadow-sm"
              >
                {/* Mentor Image */}
                <div
                  className="relative w-full h-full bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${mentor.image})` }}
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />

                {/* Social Icons */}
                <div className="absolute inset-0 flex flex-col items-end translate-x-6 group-hover:-translate-x-5 justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link>
                    <GrFacebookOption className="text-white text-xl hover:text-secondary" />
                  </Link>
                  <Link>
                    <IoLogoInstagram className="text-white text-xl hover:text-secondary" />
                  </Link>
                  <Link>
                    <RiTwitterXFill className="text-white text-xl hover:text-secondary" />
                  </Link>
                  <Link>
                    <LuMails className="text-white text-xl hover:text-secondary" />
                  </Link>
                </div>

                {/* Mentor Name */}
                <p className="absolute bottom-3 left-4 text-white font-semibold text-lg drop-shadow-md">
                  {mentor.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam
