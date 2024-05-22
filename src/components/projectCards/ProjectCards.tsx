import { useNavigate  } from "react-router-dom";
import Skills from "../skills/Skills";

import ImageZoom from "../ImageZoom/ImageZoom";

import "./ProjectCards.css";

type ProjectCardTypes = {
  id: number;
  imgLocation: string;
  Placeholder: string;
  website: string | null;
  github: string | null;
  title: string;
  url: string;
  description: string;
  skills: string[];
  body: {
    type: 'text' | 'images' | 'title';
    content: string | string[][]
  }[][] | null;
}; // from Home.tsx

export default function ProjectCards(props: ProjectCardTypes) {
  const navigate = useNavigate();

  return (
    <div className="project-card-container">
      <div className="left">
        <div className="title">{props.title}</div>
        <ImageZoom image={props.imgLocation} scale={2.5} Placeholder={props.Placeholder}/>
      </div>
      <div className="right">
        <div className="skills">
          <Skills skills={props.skills} />
        </div>
        <div className="description">{props.description}</div>
        <div className='learn-more'>
          {props.website && <a href={props.website} target="_blank">Website</a>}
          {props.github && <a href={props.github} target="_blank">Github</a>}
          {props.body && <span onClick={() => navigate(`/Project/${props.url}/${props.id}`)}>Learn more...</span>}
        </div>
      </div>
    </div>
  );
}