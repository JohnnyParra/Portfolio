// import { useQuery } from "react-query";
import { nanoid } from "nanoid";
import { Helmet } from "react-helmet";

import Header from "../../components/header/Header";
import LatestWork from "../../components/latestWork/LatestWork";
import latestWorkData from "../../misc/latestWorkData";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import BlurImage from "../../components/BlurImage/BlurImage";
import "./Home.css";
import { ScrollRestoration } from "react-router-dom";

export default function Home() {
  // const fetchUsers = async () => {
  //   const res = await fetch("https://api.github.com/users/JohnnyParra/repos");
  //   return res.json();
  // }

  // const {data, isLoading, isError } = useQuery("github", fetchUsers);

  // if(isLoading) return <div>...Loading</div>;
  // if(isError) return <div>There is a problem with github servers</div>;

  // console.log(data);

  const latestWorkElements: JSX.Element[] = latestWorkData.map((project) => {
    return (
      <div key={nanoid()} className="container">
        <LatestWork
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

  for (let i = 0; i < 3; i++) {

  }

  return (
    <main className="home">
      <Helmet>
        <title>Home | Johnny's Portfolio</title>
        <meta name='description' content="This is the Home page of Johnny's portfolio website" />
        <meta name='content' content="home, portfolio, johnny, parra, software, developer" />
      </Helmet>
      <Header />
      <div className="content">
        <div className="section">
          <BlurImage 
            className="headshot"
            reference={undefined}
            style={undefined}
            alt={"cartoon blend headshot of Johnny Parra"}
            handleClick={() => {}}
            lowQualityImg={"/headshot(LQIP).webp"}
            highQualityImg={"/headshot.webp"}
          />
          {/* <img className="headshot" src={headshot} /> */}
          <div className="test">
            <h2 className="title">{"<Software Developer>"}</h2>
            <h3 className="text">Staying informed about the latest technological advancements to deliver optimal solutions for any challenge</h3>
          </div>
        </div>
        <div className="latest-work">
          <div className="latest-work-title">Latest Work</div>
          <div className="latest-work-cards">{latestWorkElements}</div>
        </div>
        <div className="contact-container">
          <ContactForm />
        </div>
      </div>
      <Footer />
      <ScrollRestoration />
    </main>
  );
}
