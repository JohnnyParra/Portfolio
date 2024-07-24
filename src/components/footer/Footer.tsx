import { Link } from "react-router-dom";
import './Footer.css';


export default function Footer() {

  return (
    <footer>
      <div className="row">
        <Link className="footer-link" to="/">Home</Link>
        <Link className="footer-link" to="/about">About</Link>
        <Link className="footer-link" to="/portfolio">Portfolio</Link>
        <Link className="footer-link" to="/contact">Contact</Link>
      </div>
      <div className="totop">
        <span onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>back to top</span>
      </div>
      <div className="separator"></div>
      <p>Created Using React</p>
    </footer>
  )
}