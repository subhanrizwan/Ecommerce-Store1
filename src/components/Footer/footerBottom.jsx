import { Link } from "react-router";
import { FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import Socialicons from "../SocialIcon/socialicons";
function FooterBottom() {
  return (
<div className="footer-bottom text-xs flex justify-center md:justify-between flex-wrap w-screen text-center bg-cardbg p-3">
          <p className="mt-1 p-3 md:p-5">
            Copyright © 2025 All rights reserved by Subhan Ahmed
          </p>
          <Socialicons />
           {/* <div className="social-icons p-3 md:p-5 md:w-72 md:flex flex space-x-6 md:space-x-5">
              <Link>
                <FaLinkedin className="text-xl md:text-2xl" />
              </Link>
              <Link>
                <FaGithub className="text-xl md:text-2xl" />
              </Link>
              <Link>
                <FaTwitter className="text-xl md:text-2xl" />
              </Link>
              <Link>
                <MdMarkEmailUnread className="text-xl md:text-2xl" />
              </Link>
            </div> */}
        </div>  )
}

export default FooterBottom