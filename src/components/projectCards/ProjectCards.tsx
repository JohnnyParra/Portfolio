import Skills from "../skills/Skills";
import { useNavigate } from "react-router-dom";

import ImageZoom from "../ImageZoom/ImageZoom";

import "./ProjectCards.css";

type ProjectCardTypes = {
  imgLocation: string;
  id: number;
  title: string;
  url: string;
  description: string;
  skills: string[];
}; // from Home.tsx

export default function ProjectCards(props: ProjectCardTypes) {
  const navigate = useNavigate();

  return (
    <div className="latest-work-container">
      <div className="title">{props.title}</div>
      <ImageZoom image={props.imgLocation} />
      <div className="skills">
        <Skills skills={props.skills} />
      </div>
      <div className="description">{props.description}</div>
      <div className='learn-more' onClick={() => navigate(`/Project/${props.url}`)}>Learn more...</div>
    </div>
  );
}