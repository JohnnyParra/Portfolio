import { nanoid } from "nanoid";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCards from "../../components/projectCards/ProjectCards";
import portfolioData from "../../misc/PortfolioData";

import './Portfolio.css';

export default function Portfolio() {

  const projectCardElements: JSX.Element[] = portfolioData.map((project) => {
    return (
      <div key={nanoid()} className="container">
        <ProjectCards
          key={nanoid()}
          id={project.id}
          imgLocation={project.imgLocation}
          Placeholder={project.Placeholder}
          website={project.website}
          github={project.github}
          title={project.title}
          url={project.url}
          description={project.description}
          skills={project.skills}
          body={project.body}
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
