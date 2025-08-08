import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

const BreadcrumbComponent=({ContactPage,ErrorPage,AboutPage})=>{
      function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
      }
    return(
        <>
         <div
            className="mb-0 md:mb-9 p-3 pl-5"
            role="presentation"
            onClick={handleClick}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Typography  className="text-secondary">{ContactPage}{ErrorPage}{AboutPage}</Typography>
            </Breadcrumbs>
          </div>
        </>
    )
}
export default BreadcrumbComponent;