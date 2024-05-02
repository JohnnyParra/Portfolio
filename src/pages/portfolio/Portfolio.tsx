import { nanoid } from "nanoid";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCards from "../../components/projectCards/ProjectCards";
import latestWorkData from "../../misc/latestWorkData";

import './Portfolio.css';

export default function Portfolio() {

  const projectCardElements: JSX.Element[] = latestWorkData.map((project) => {
    return (
      <div key={nanoid()} className="container">
        <ProjectCards
          key={nanoid()}
          imgLocation={project.imgLocation}
          Placeholder={project.Placeholder}
          id={project.id}
          title={project.title}
          url={project.url}
          description={project.description}
          skills={project.skills}
        />
      </div>
    );
  });

  return (
    <main className="portfolio">
      <Header />
      <div className="content">
        <div className="project-cards">{projectCardElements}</div>
      </div>
      <Footer />
    </main>
  );
}
