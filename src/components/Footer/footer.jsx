import { Link } from "react-router";
import { FaLinkedin,FaGithub,FaTwitter} from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import CtaFooter from "../ctaSection";
import FooterBottom from "./footerBottom";
import Logo from '../../../assets/images/logo/logo.png';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <CtaFooter />
      <section className="">
      <div className="container">
        <footer className="flex sm:flex-wrap flex-wrap bg-cardbg mx-auto md:w-screen sm:w-screen md:justify-center border-b border-gray-200 py-10 px-5 pb-3 mt-5">
          <div className="step1 md:w-[30%] sm:h-68 p-5 text-textFooter">
            <div className="resturant-title pr-6">
              <img className="w-16 h-16" src={Logo} alt="" />
              <p className="pt-5 text-1xl md:text-md">
                It is a long established fact that from will be distracted by the readable from when looking.{" "}
              </p>
            </div>
            <div className="social-icons md:w-72 md:flex flex space-x-10 md:space-x-5 pt-8">
              <Link>
                <FaLinkedin className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaGithub className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <FaTwitter className="text-3xl md:text-2xl" />
              </Link>
              <Link>
                <MdMarkEmailUnread className="text-3xl md:text-2xl" />
              </Link>
            </div>
          </div>
         <div className="step3 menus md:w-[18%] sm:w-[40%] w-[100%] md:h-92 p-5 text-textFooter mb-5">
  <h2 className="text-2xl">Pages</h2>
  <ul className="pt-5 text-1xl">
    <li className="mb-5 hover:translate-x-4 duration-500">
      <Link>Home</Link>
    </li>
    <li className="mb-5 hover:translate-x-4 duration-500">
      <Link>About Us</Link>
    </li>
    <li className="mb-5 hover:translate-x-4 duration-500">
      <Link>Integrations</Link>
    </li>
    <li className="mb-5 hover:translate-x-4 duration-500">
      <Link>Features</Link>
    </li>
    <li className="mb-5 hover:translate-x-4 duration-500">
      <Link>Pricing</Link>
    </li>
    <li className=" hover:translate-x-4 duration-500">
      <Link>Contact Us</Link>
    </li>
  </ul>
</div>

          <div className="step4 menus md:w-[18%] sm:w-[40%] w-[100%] md:h-92 p-5 text-textFooter">
            <h2 className="text-2xl">Quick Links</h2>
            <ul className="pt-5 text-1xl">
             <li className="mb-5 hover:translate-x-4 duration-500">
  <Link>Privacy Policy</Link>
</li>
<li className="mb-5 hover:translate-x-4 duration-500">
  <Link>Term of Use</Link>
</li>
<li className="mb-5 hover:translate-x-4 duration-500">
  <Link>FAQ</Link>
</li>
<li className="mb-5 hover:translate-x-4 duration-500">
  <Link>Contact</Link>
</li>
<li className="mb-5 hover:translate-x-4 duration-500">
  <Link>Blog</Link>
</li>
<li className="hover:translate-x-4 duration-500">
  <Link>Pricing</Link>
</li>

            </ul>
          </div>
          <div className="step2 menus md:w-[32%] sm:w-[60%] w-[100%] shadow md:h-92 p-12 py-14 text-textFooter bg-white rounded-3xl">
            <h2 className="text-1xl font-bold text-secondary mb-4">Address</h2>
            <div className="md:text-4xl text-2xl mb-4"><h1>Ready to get started?</h1></div>
            <div className="mb-4"><p className="text-gray-500">It is a long established fact that a reader will be distracted layout.</p></div>
            <ul className="pt-2 text-1xl">
              <li className="flex items-center gap-4 py-3">
                <MdOutlineMarkEmailUnread className="text-2xl text-secondary" />
                <Link className="">example@gmail.com <br /> info@gmail.com</Link>
              </li>
             
              <li className="flex items-center gap-4 py-3">
                <FaPhoneVolume className="text-xl text-secondary"   />
                <Link>+92 111 0000000 <br /> +92 111 0000000 </Link>
              </li>
              
            </ul>
          </div>
        </footer>
        <FooterBottom />
      </div>  
      </section>
      
    </>
  );
}

export default Footer;
