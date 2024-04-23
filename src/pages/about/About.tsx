import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BarChart from "../../components/BarChart/BarChart";

import image from "../../assets/fullbody.jpg"

import "./About.css"

export default function About() {
  return (
    <main className="about">
      <Header />
      <div className="content">
        <div className="top-container">
          <img className="image" src={image} />
          <div className="personal">
            <h1>Juan (Johnny) Manuel Parra</h1>
            <p>Major: B.S. Physics    Minor: Computer Science</p>
            <p>Coding Since: 2015</p>
            <p>Favorite Movie: Die Hard   <a href="https://boxd.it/7UK3B" target="_blank">Letterboxed</a></p>
            <p>Favorite Games: The Witcher 3, Arkham City, Mass Effect 2, Baldur's Gate 3</p>
            <p>Summary: It was my junior year when I started to use phyton, reading data from files and using matplotlib to visualize it, to help with my research in physics and take more advanced Computer Science courses where I started to contemplate my future.  Than an unforeseen global pandemic happened during my last semester and I graduated during a time where the world was on hold.  This gave me time to think and choose whether I wanted to continue my education in Physics or pursue a career as a Software Developer. I chose the latter and enrolled in a web development bootcamp.  That turned into an internship and when that ended I started working on my own projects and building up my portfolio</p>
          </div>
        </div>
        <BarChart />
      </div>
      <Footer />
    </main>
  );
}
