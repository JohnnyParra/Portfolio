import {lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import('./pages/home/Home'));
const About = lazy(() => import('./pages/about/About'));
const Portfolio = lazy(() => import('./pages/portfolio/Portfolio'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const Project = lazy(() => import('./pages/project/Project'));

// import Home from "./pages/home/Home";
// import About from "./pages/about/About";
// import Portfolio from "./pages/portfolio/Portfolio";
// import Contact from "./pages/contact/Contact";
// import Project from "./pages/project/Project";

import "./App.css";

const router = createBrowserRouter([
  { path: "/", element:<Suspense><Home /></Suspense>},
  { path: "/about", element: <Suspense><About /></Suspense>},
  { path: "/portfolio", element: <Suspense><Portfolio /></Suspense>},
  { path: "/contact", element: <Suspense><Contact /></Suspense>},
  { path: "/project/:url/:id", element: <Suspense><Project /></Suspense>},
])

export default function App() {
  return <RouterProvider router={router} />
}
