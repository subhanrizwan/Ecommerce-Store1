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
            className="mb-5 md:mb-9 p-5"
            role="presentation"
            onClick={handleClick}
          >
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="#">
                Home
              </Link>
              <Typography sx={{ color: "text.primary" }}>{ContactPage}{ErrorPage}{AboutPage}</Typography>
            </Breadcrumbs>
          </div>
        </>
    )
}
export default BreadcrumbComponent;