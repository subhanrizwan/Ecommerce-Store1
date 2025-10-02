import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";
import Layout from "./components/layout";
import Home from "./pages/home";
import Shop from "./pages/shop";
import About from "./pages/about";
import Contact from "./pages/contact";
import Signup from "./pages/LoginSignup/Signup";
import Login from "./pages/LoginSignup/Login";
import ErrorPage from "./pages/ErrorPage";
import SingleProduct from "./components/SingleProduct/SingleProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      {/* <Route path="/shop" element={<Shop />} /> */}
      <Route path="/SingleProduct/:id" element={<SingleProduct />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

const App=()=> {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
