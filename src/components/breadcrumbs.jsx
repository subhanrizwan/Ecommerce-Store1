import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router";

const BreadcrumbComponent=({ContactPage,ErrorPage,AboutPage,SignupPage,LoginPage})=>{
  let navigate = useNavigate();
  const Handle =()=>{
    navigate('/');
  } 
      function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
    return(
        <>
         <div
            className="p-0 py-6 pl-10 mb-0 md:mb-9 bg-gray-50"
            role="presentation"
            onClick={handleClick}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" onClick={Handle} className="hover:text-secondary" color="inherit" href="#">
                Home
              </Link>
              <Typography  className="cursor-pointer text-secondary">{ContactPage}{LoginPage}{ErrorPage}{AboutPage}{SignupPage}</Typography>
            </Breadcrumbs>
          </div>
        </>
    )
}
export default BreadcrumbComponent;