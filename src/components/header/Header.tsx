import { useNavigate, useLocation } from "react-router-dom";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import linkedin from "../../assets/linkedin.svg";
import github from "../../assets/github.svg";

import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    <a key={"home"} style={{borderBottom: location.pathname == '/' ? '1px solid white' : 'none'}} onClick={() => navigate("/")}>Home</a>,
    <a key={"about"} style={{borderBottom: location.pathname == '/About' ? '1px solid white' : 'none'}} onClick={() => navigate("/About")}>About</a>,
    <a key={"portfolio"} style={{borderBottom: location.pathname == '/Portfolio' ? '1px solid white' : 'none'}} onClick={() => navigate("/Portfolio")}>Portfolio</a>,
    <a key={"contact"} style={{borderBottom: location.pathname == '/Contact' ? '1px solid white' : 'none'}} onClick={() => navigate("/Contact")}>Contact</a>
  ]

  return (
    <header>
      <img className="logo" src="/JPLogo.svg" onClick={() => navigate("/")}/>
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
          <img className="linkedin" src={linkedin} />
        </a>
        <a href="https://github.com/JohnnyParra" target="_blank">
          <img className="github" src={github} />
        </a>
      </div>
    </header>
  );
}
