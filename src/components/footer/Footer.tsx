import { useNavigate } from "react-router-dom";
import './Footer.css';


export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer>
      <div className="row">
        <a onClick={() => navigate("/")}>Home</a>
        <a onClick={() => navigate("/About")}>About</a>
        <a onClick={() => navigate("/Portfolio")}>Portfolio</a>
        <a onClick={() => navigate("/Contact")}>Contact</a>
      </div>
      <div className="totop">
        <a onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})}>back to top</a>
      </div>
      <div className="separator"></div>
      <p>Another way to contact me:  johnny.m.parra1996@gmail.com</p>
    </footer>
  )
}