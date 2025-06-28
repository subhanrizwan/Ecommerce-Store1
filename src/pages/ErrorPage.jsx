import { useNavigate } from 'react-router';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ErrorImage from '../../assets/images/error-page/404error.png';
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


function ErrorPage() {
  const navigate = useNavigate();

  const Navigateion = ()=>{
    navigate('/')
  }


  return (
    <>
    <section className='p-5 w-full'>
       <div className='mb-9 md:mb-9 p-5' role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        {/* <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link> */}
        <Typography sx={{ color: 'text.primary' }}>404 Error</Typography>
      </Breadcrumbs>
    </div>
    <div className='text-center flex flex-col items-center'>
          {/* <h1 className="md:text-7xl text-3xl fw-bold p-5 mb-7">404 Not Found</h1> */}
          <img src={ErrorImage} className='p-0 m-0' style={{ width: '85%', maxWidth: '400px', alignContent:'center'}} alt="" />
          {/* <p className='mb-7'>Your visited page not found. You may go home page.</p> */}
           <Button
                  className="w-40 h-12"
                  style={{marginBottom:'5.3rem'}}
                  variant="contained"
                  onClick={Navigateion}
                  >
                  Back to Home
                </Button>
                  </div>
    </section>
    </>
  )
}

export default ErrorPage


