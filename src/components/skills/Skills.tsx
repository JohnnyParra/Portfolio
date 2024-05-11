import { useState } from 'react';
import { nanoid } from "nanoid";

import "./Skills.css";

type SkillsTypes = {
  skills: string[];
};

export default function Skills(props: SkillsTypes) {
  const [showMore, setShowMore] = useState<boolean>(false);

  const skillsElements: (JSX.Element | undefined)[] = props.skills.map((skill, i) => {
    if (!showMore && i < 3) {
      return <div key={nanoid()} className='skill'>{skill}</div>;
    } else if (showMore) {
      return <div key={nanoid()} className='skill'>{skill}</div>
    }
  });

  return (
    <div className='skills-container'>
			<div className='skills-title'>Skills:</div>
      <div className='skills-list'>
        {skillsElements}
        <button 
          className="show-more-btn" 
          title={!showMore ? "Expand" : "Show Less"} 
          onClick={() => setShowMore(!showMore)}>{!showMore ? "+" : "-"}
        </button>
      </div>
    </div>
  );
}
