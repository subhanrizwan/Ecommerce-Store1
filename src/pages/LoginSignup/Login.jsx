import { useState, useRef } from "react";
import { TextField, Button, Alert } from "@mui/material";
import BreadcrumbComponent from "../../components/Breadcrumbs.jsx";
import Heading from "../../components/heading/Heading.jsx";
const Login = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const form = useRef();

  return (
    <>
      <div className="py-5">
        {" "}
        <BreadcrumbComponent LoginPage="Login" />
      </div>
      <section className="w-full">
        <div className="p-0 pt-0 mb-0 text-center title-contact">
                <Heading Login={"Login into Exclusive"} />
        </div>
        <div className="form-wrap">
          <div className="form-tagline bg-gray">
            <p className="p-0 mb-3 text-center">
             Enter your details below
            </p>
          </div>
          <div className="flex justify-center w-ful">
            <form
              ref={form}
              className="p-5 pt-6 pb-8 mb-0 rounded md:w-11/12 sm:w-full lg:w-4/5"
            >
              <div className="flex flex-wrap justify-center mb-0 cont-row gap-y-10">
                {/* <TextField
                  name="user_name"
                  id="filled-basic"
                  label="Your Name"
                  variant="filled"
                  required
                  autoComplete="off"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    console.clear();
                    console.log(e.target.value);
                  }}
                  className="rounded "
                  fullWidth
                  sx={{
                    "& .MuiFormLabel-asterisk": {
                      color: "#03ada4",
                    },
                    width: {
                      xs: "100%",
                      sm: "100%",
                      lg: "60%",
                    //   md: 280,
                    },
                  }}
                /> */}
                <TextField
                  name="user_email"
                  id="filled-basic"
                  label="Email"
                  variant="filled"
                  required
                  autoComplete="off"
                  value={email}
                  className="rounded "
                  fullWidth
                  sx={{
                    "& .MuiFormLabel-asterisk": {
                      color: "#03ada4",
                    },
                    width: {
                      xs: "100%",
                      sm: "100%",
                      lg: "60%",
                    //   md: 280,
                    },
                  }}
                />
                <TextField
                  name="user_phone"
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                  required
                  autoComplete="off"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    console.clear();
                    console.log(e.target.value);
                  }}
                  className="rounded "
                  fullWidth
                  sx={{
                    "& .MuiFormLabel-asterisk": {
                      color: "#03ada4",
                    },
                    width: {
                      xs: "100%",
                      sm: "100%",
                      lg: "60%",
                    //   md: 280,
                    },
                  }}
                />
                
              </div>
            </form>
          </div>
              <div className="flex items-center justify-center mt-2 text-center submit-btn gap-x-72 ">
                <Button
                  className="w-40 h-12 !bg-secondary"
                  variant="contained"
                >
                  Login
                </Button>
                <p className="cursor-pointer hover:text-secondary">Forget Password?</p>
              </div>
        </div>
       
      </section>
      <section className="w-full map-section"></section>
    </>
  );
};

export default Login;
