import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  }
  ,
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  }
  ,
  {
    path: "/blog",
    element: <Blog />,
  }
  ,
  {
    path: "/portfolio",
    element: <Portfolio />,
  }
]);
export default router