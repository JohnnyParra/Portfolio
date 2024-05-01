// import { useQuery } from "react-query";
import { nanoid } from "nanoid";

import Header from "../../components/header/Header";
import LatestWork from "../../components/latestWork/LatestWork";
import latestWorkData from "../../misc/latestWorkData";
import headshot from "../../assets/headshot.png"
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/footer/Footer";
import "./Home.css";

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
          imgLocation={project.imgLocation}
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
    <main className="home">
      <Header />
      <div className="content">
        <div className="section">
          <img className="headshot" src={headshot} />
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
    </main>
  );
}
