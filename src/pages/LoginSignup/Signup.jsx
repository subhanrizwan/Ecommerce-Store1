import { useState, useRef} from "react";
import { useNavigate } from "react-router";
import { TextField, Button, Alert } from "@mui/material";
import BreadcrumbComponent from "../../components/Breadcrumbs.jsx";
import Heading from "../../components/heading/Heading.jsx";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
        const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const HandleLogin=()=>{
    return navigate('/login');
  }

  const form = useRef();

  return (
    <>
      <div className="py-5">
        {" "}
        <BreadcrumbComponent SignupPage="Signup" />
      </div>
      <section className="w-full">
        <div className="title-contact text-center p-0 pt-0 mb-0">
                <Heading Signup={"Create Account"} />
        </div>
        <div className="form-wrap">
          <div className="form-tagline bg-gray">
            <p className="text-center p-0 mb-3">
             Enter your details below
            </p>
          </div>
          <div className="w-full flex justify-center">
  <form
    ref={form}
    className="w-full max-w-lg rounded pt-6 pb-8 px-5 space-y-6"
  >
    <TextField
      name="user_name"
      label="Your Name"
      variant="filled"
      required
      autoComplete="off"
      value={name}
      onChange={(e) => setName(e.target.value)}
      fullWidth
      sx={{
        "& .MuiFormLabel-asterisk": { color: "#03ada4" },
      }}
    />
    <TextField
      name="user_email"
      label="Email"
      variant="filled"
      required
      autoComplete="off"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      fullWidth
      sx={{
        "& .MuiFormLabel-asterisk": { color: "#03ada4" },
      }}
    />
    <TextField
      name="user_phone"
      label="Password"
      variant="filled"
      required
      autoComplete="off"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      fullWidth
      sx={{
        "& .MuiFormLabel-asterisk": { color: "#03ada4" },
      }}
    />
  </form>
</div>

              <div className="submit-btn mt-2 text-center mb-5">
                <Button
                  className="w-80 h-12 !bg-secondary"
                  variant="contained"
                >
                  Creat Account
                </Button>
              </div>
              <div className="submit-btn mt-2 text-center ">
                <Button
                  className="w-80 h-12 gap-x-2"
                  variant="outlined"
                >
                    <FcGoogle fontSize={'large'}/>
                  Sign up with Google
                </Button>
              </div>
              <div className="submit-btn mt-2 text-center p-5 text-gray-600">
                        <p>Already have account? <b className='cursor-pointer hover:text-secondary transition duration-200' onClick={HandleLogin} >Login</b>  </p>
              </div>
        </div>
       
      </section>
      <section className="map-section w-full"></section>
    </>
  );
};

export default Signup;
