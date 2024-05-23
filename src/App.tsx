import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";
import Project from "./pages/project/Project";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/About", element: <About />},
  { path: "/Portfolio", element: <Portfolio />},
  { path: "/Contact", element: <Contact />},
  { path: "/Project/:url/:id", element: <Project />},
])

export default function App() {
  return <RouterProvider router={router} />
}
