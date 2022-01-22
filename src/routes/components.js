import Home from "../components/home";
import About from "../components/about";
import Products from "../components/products";
import Contact from "../components/contact";
export const paths = [
  {
    Component: <Home />,
    path: "/",
  },
  {
    Component: <About />,
    path: "/about",
  },
  {
    Component: <Products />,
    path: "/products",
  },
  {
    Component: <Contact />,
    path: "/contact-us",
  },
];
