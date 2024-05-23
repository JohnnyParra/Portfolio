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
              <p>Die Hard,  LOTR: Fellowship,  Interstellar  <a href="https://boxd.it/7UK3B" target="_blank" title="My Letterboxd account">( Letterboxed )</a></p>
            </div>
            <div className="fav-games row">
              <h4 className="title">Favorite Games:</h4>
              <p>The Witcher 3, Arkham City, Mass Effect 2, Baldur's Gate 3</p>
            </div>
            <div className="summary row">
              <h4>Summary:</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cum sociis natoque penatibus et magnis dis parturient montes nascetur. Enim blandit volutpat maecenas volutpat blandit aliquam etiam. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Arcu risus quis varius quam quisque id diam. At varius vel pharetra vel turpis nunc eget. Convallis aenean et tortor at risus viverra adipiscing. Cras fermentum odio eu feugiat. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies leo. Mauris ultrices eros in cursus. Est velit egestas dui id. Sed vulputate mi sit amet mauris commodo quis. Fames ac turpis egestas maecenas pharetra convallis. Tincidunt nunc pulvinar sapien et.</p>
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
