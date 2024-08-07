import { useNavigate, useLocation, Link } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import linkedin from "/linkedin.svg";
import github from "/github.svg";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    <Link key={"home"} className="header-link" style={{borderBottom: location.pathname == '/' ? '1px solid white' : 'none'}} to="/">Home</Link>,
    <Link key={"about"} className="header-link" style={{borderBottom: location.pathname == '/About' ? '1px solid white' : 'none'}} to="/about">About</Link>,
    <Link key={"portfolio"} className="header-link" style={{borderBottom: location.pathname == '/Portfolio' ? '1px solid white' : 'none'}} to="/portfolio">Portfolio</Link>,
    <Link key={"contact"} className="header-link" style={{borderBottom: location.pathname == '/Contact' ? '1px solid white' : 'none'}} to="/contact">Contact</Link>
  ]

  return (
    <header>
      <img className="logo" title="Home" src="/JPLogo.svg" onClick={() => navigate("/")}/>
      <div className="menu">
        {links}
      </div>
      <Accordion className="dropdown">
        <AccordionSummary
          className="btn"
          expandIcon={<ExpandMoreIcon className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Menu
        </AccordionSummary>
        <AccordionDetails>
          <div className="content">
            {links}
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="social">
        <a href="https://www.linkedin.com/in/juan-parra-developer/" target="_blank">
          <img className="linkedin" title="LinkedIn" src={linkedin} />
        </a>
        <a href="https://github.com/JohnnyParra" target="_blank">
          <img className="github" title="Github" src={github} />
        </a>
      </div>
    </header>
  );
}
