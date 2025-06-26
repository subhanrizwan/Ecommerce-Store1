import { useState } from "react";
import { TextField, Button } from "@mui/material";
const contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const Submit = () => {
    console.log("name : " , name , "email: " ,email,"phone :",phone,"message :",message);
  };
  return (
    <>
      <section className="w-full mb-5">
        <div className="title-contact text-center p-5 mt-5 mb-0">
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
            <form className="shadow rounded pt-6 pb-8 mb-4 p-5 ">
              <div className="cont-row flex justify-between md:flex-wrap sm:flex-wrap flex-wrap mb-0">
                <TextField
                  id="outlined-basic"
                  label="Your Name*"
                  variant="outlined"
                  value={name}
                  onChange={(e)=> {setName(e.target.value); console.clear(); console.log(e.target.value)}}
                  className="bg-slate-100 rounded"
                  style={{ marginBottom: "1rem" , marginRight:"0.7rem"}}
                  fullWidth 
                  sx={{
                    width: {
                      xs: "100%",
                      sm: '100%',
                      md: 300,
                    },
                  }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email*"
                  variant="outlined"
                  value={email}
                  onChange={(e)=> {setEmail(e.target.value); console.clear(); console.log(e.target.value)}}
                  className="bg-slate-100 rounded"
                  style={{ marginBottom: "1rem" , marginRight:"0.7rem"}}
                   fullWidth 
                  sx={{
                    width: {
                      xs: "100%",
                      sm: '100%',
                      md: 300 ,
                    },
                  }}
                />
                <TextField
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
                      md: 300 ,
                    },
                  }}
                />
              </div>
              <div className="cont-row2 flex justify-around pb-3">
                <TextField
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
                  onClick={Submit}
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
