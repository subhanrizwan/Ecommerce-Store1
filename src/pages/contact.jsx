import { useState,useRef } from "react";
import { TextField, Button } from "@mui/material";
import emailjs from '@emailjs/browser';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const contact = () => {
  function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2wq35vg', 'template_ulq772e', form.current, {
        publicKey: 'Bym6hQFgTyWWzhc95',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <section className="w-full mb-5">
        <div className="title-contact text-center p-5 mb-0">
           <div className='mb-5 md:mb-9 p-5' role="presentation" onClick={handleClick}>
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
        <Typography sx={{ color: 'text.primary' }}>Contact</Typography>
      </Breadcrumbs>
    </div>
          <h1 className="text-4xl">Contact Us</h1>
        </div>
        <div className="form-wrap">
          <div className="form-tagline bg-gray">
            <p className="text-center p-3 mb-3">
              We're happy to answer questions or help you with returns. Please
              fill out the form below if you need assistance
            </p>
          </div>
          <div className="w-ful flex justify-center">
            {/* w-8/12 md:w-2/3 */}
            <form ref={form} className="md:w-3/4 sm:w-full rounded pt-6 pb-8 mb-4 p-5">
              <div className="cont-row flex justify-between md:flex-wrap sm:flex-wrap flex-wrap mb-0">
                <TextField
                name="user_name"
                  id="outlined-basic"
                  label="Your Name*"
                  variant="outlined"
                  value={name}
                  onChange={(e)=> {setName(e.target.value); console.clear(); console.log(e.target.value)}}
                  className="bg-slate-100 rounded"
                  style={{ marginBottom: "1rem"}}
                  fullWidth 
                  sx={{
                    width: {
                      xs: "100%",
                      sm: '100%',
                      lg:"32%",
                      md: 300,
                    },
                  }}
                />
                <TextField
                  name="user_email"
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                  value={email}
                  onChange={(e)=> {setEmail(e.target.value); console.clear(); console.log(e.target.value)}}
                  className=" bg-slate-100 rounded"
                  style={{ marginBottom: "1rem"}}
                   fullWidth 
                  sx={{
                    width: {
                      xs: "100%",
                      sm: '100%',
                      lg:"32%",
                      md: 300 ,
                    },
                  }}
                />
                <TextField
                  name="user_phone"
                  id="outlined-basic"
                  label="Phone*"
                  variant="outlined"
                  value={phone}
                  onChange={(e)=> {setPhone(e.target.value); console.clear(); console.log(e.target.value)}}
                  className="bg-slate-100 rounded"
                  style={{ marginBottom: "1rem" }}
                   fullWidth 
                  sx={{
                    width: {
                      xs: "100%",
                      sm: '100%',
                      lg:"32%",
                      md: 300 ,
                    },
                  }}
                />
              </div>
              <div className="cont-row2 flex justify-around pb-3">
                <TextField
                  name="user_message"
                  id="outlined-multiline-static"
                  label="Message"
                  value={message}
                  onChange={(e)=> {setMessage(e.target.value); console.clear(); console.log(e.target.value)}}
                  multiline
                  rows={12}
                  className="w-full bg-slate-100 rounded"
                />{" "}
              </div>
              <div className="submit-btn mt-2 flex justify-end">
                <Button
                  onClick={sendEmail}
                  className="w-40 h-12"
                  variant="contained"
                >
                  Send
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* </div> */}
        {/* </div> */}
      </section>
      <section className="map-section w-full"></section>
    </>
  );
};

export default contact;
