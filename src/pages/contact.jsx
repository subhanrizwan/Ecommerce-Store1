import React from "react";
import { TextField, Button } from "@mui/material";
const contact = () => {

  const Submit =()=>{
    console.log("clicked");
  }
  return (
    <>
      <section className="w-full bg-gray-100">
        <div className="title-contact text-center p-5 mt-10 mb-0">
          <h1 className="text-4xl">Contact Us</h1>
        </div>
        <div className="form-wrap">
          {/* <div className="form md:w-3/4 bg-gray-300"> */}
          <div className="form-tagline bg-gray">
            <p className="text-center p-5 mb-5 pb-5">
              We're happy to answer questions or help you with returns. Please
              fill out the form below if you need assistance
            </p>
          </div>
          <div className="w-ful flex justify-center">
            <form className="bg-gray-200 w-8/12 shadow-md rounded pt-6 pb-8 mb-4 p-5">
              <div className="cont-row flex justify-between flex-wrap mb-0">
                <TextField
                  id="outlined-basic"
                  label="Your Name"
                  variant="outlined"
                  className="w-72"
                  style={{ marginBottom: "1rem" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  className="w-72"
                  style={{ marginBottom: "1rem" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Phone"
                  variant="outlined"
                  className="w-72"
                  style={{ marginBottom: "1rem" }}
                />
              </div>
              <div className="cont-row2 flex justify-around pb-5">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={8}
                  className="w-full"
                />{" "}
              </div>
              <div className="submit-btn w- mt-2 flex justify-end">
                <Button onClick={Submit} className="w-40 h-11" variant="contained">
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
