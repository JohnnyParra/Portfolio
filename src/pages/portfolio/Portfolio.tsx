import { nanoid } from "nanoid";
import { Helmet } from "react-helmet";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectCards from "../../components/projectCards/ProjectCards";
import portfolioData from "../../misc/PortfolioData";

import './Portfolio.css';
import { ScrollRestoration } from "react-router-dom";

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
          alt={project.alt}
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
      <Helmet>
        <title>Portfolio | Johnny's Portfolio</title>
        <meta name='description' content="This is the Home page of Johnny's portfolio website" />
        <meta name='content' content="projects, portfolio, johnny, parra, software, developer" />
      </Helmet>
      <Header />
      <div className="content">
        <div className="project-cards">{projectCardElements}</div>
      </div>
      <Footer />
      <ScrollRestoration />
    </main>
  );
}
