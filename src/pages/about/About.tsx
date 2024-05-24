import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import BarChart from "../../components/BarChart/BarChart";

import BlurImage from "../../components/BlurImage/BlurImage";

import "./About.css"
import { ScrollRestoration } from "react-router-dom";

export default function About() {
  return (
    <main className="about">
      <Header />
      <div className="content">
        <div className="top-container">
          <div className="image-container">
            <BlurImage
              className="image"
              style={undefined}
              reference={undefined}
              alt={undefined}
              handleClick={() => {}}
              lowQualityImg="/fullbody(LQIP).webp"
              highQualityImg="/fullbody.webp"
             />
          </div>
          <div className="personal">
            <h1>Juan (Johnny) Manuel Parra</h1>
            <div className="major row">
              <h4>Major:</h4>
              <p>B.S. Physics</p>
            </div>
            <div className="minor row">
              <h4>Minor:</h4>
              <p>Computer Science</p>
            </div>
            <div className="coding row">
              <h4>Coding Since:</h4>
              <p>2015</p>
            </div>
            <div className="fav-movies row">
              <h4 className="title">Favorite Movies:</h4>
              <p>Die Hard,  LOTR: Fellowship,  Interstellar  <a href="https://boxd.it/7UK3B" target="_blank" title="My Letterboxd account">(Letterboxed)</a></p>
            </div>
            <div className="fav-games row">
              <h4 className="title">Favorite Games:</h4>
              <p>The Witcher 3, Arkham City, Mass Effect 2, Baldur's Gate 3</p>
            </div>
            <div className="summary row">
              <h4>About Me:</h4>
              <p>I'm all about building, fixing, and helping out—whether it's with programming, computers, or even cars. I love improving my skills and learning new things. I'm mostly a self-taught programmer and pretty good at solving problems on my own, thanks to my Google skills and knowing how to dig into documentation. So far, I've always managed to find solutions to the challenges I face in my projects, though I know there's always more to learn. Plus, I get along easily with others and can communicate problems efficiently, making teamwork a breeze.</p>
            </div>
          </div>
        </div>
        <BarChart />
      </div>
      <Footer />
      <ScrollRestoration />
    </main>
  );
}
