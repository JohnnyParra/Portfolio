import Skills from "../skills/Skills";
import { useNavigate } from "react-router-dom";
import ImageZoom from "../ImageZoom/ImageZoom";
import "./LatestWork.css";

type LatestWorkTypes = {
  imgLocation: string;
  id: number;
  title: string;
  url: string;
  description: string;
  skills: string[];
}; // from Home.tsx

export default function LatestWork(props: LatestWorkTypes) {
  const navigate = useNavigate();

  return (
    <div className="latest-work-container">
      <div className="title">{props.title}</div>
      <ImageZoom image={props.imgLocation} scale={2.5} />
      <div className="skills">
        <Skills skills={props.skills} />
      </div>
      <div className="description">{props.description}</div>
      <div className='learn-more' onClick={() => navigate(`/Project/${props.url}`)}>Learn more...</div>
    </div>
  );
}
