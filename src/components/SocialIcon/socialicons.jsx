import { Link } from "react-router";

import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import { LuMails } from "react-icons/lu";
import { RiTwitterXFill } from "react-icons/ri";
import { IconButton } from "@mui/material";

function Socialicons() {
  return (
 <div className="social-icons md:w-72 md:flex flex !items-center justify-center space-x-10 md:space-x-2 pt-0">
              <IconButton className="group">
              <Link>
                <GrFacebookOption className="text-[1.2rem] text-black  group-hover:text-secondary" />
              </Link>
              </IconButton>
              <IconButton className="group">
              <Link>
                <IoLogoInstagram className="text-[1.2rem] text-black group-hover:text-secondary" />
              </Link>
              </IconButton>
              <IconButton className="group">
              <Link>
                <RiTwitterXFill className="text-[1.2rem] text-black group-hover:text-secondary" />
              </Link>
              </IconButton>
              <IconButton className="group">
              <Link>
                <LuMails className="text-[1.2rem] text-black  group-hover:text-secondary" />
              </Link>
              </IconButton>
            </div>  )
}

export default Socialicons;