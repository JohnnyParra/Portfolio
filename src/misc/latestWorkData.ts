import blogLQIP from '/Blog(LQIP).webp';
import JeopardyLQIP from '/Jeopardy(LQIP).webp';
import PaintLQIP from '/Paint(LQIP).webp';
import blogPNG from '/Blog.png';
import jeopardyPNG from '/Jeopardy.png';
import PaintPNG from '/Paint.png';

interface latestWorkData {
  id: number,
  imgLocation: string,
  Placeholder: string,
  website: string | null,
  github: string | null,
  title: string,
  url: string,
  description: string,
  skills: string[],
  body: {
    type: 'text' | 'images' | 'title' | 'link';
    content: string | string[][];
    url?: string;
  }[][] | null;
}

const latestWorkData: latestWorkData[] = [
  {
    imgLocation: blogPNG,
    Placeholder: blogLQIP,
    website: 'https://johnnymparra-blog.netlify.app',
    github: 'https://github.com/JohnnyParra/Blog-Website-Client',
    id: 0,
    title: "BLOG",
    url: "blog-application",
    description: `A Blog platform that allows users to create posts by adding a title, description, 
      category, body content, and image. Users can save posts as drafts for future editing and have the 
      ability to edit or delete their own posts. Interaction is encouraged through commenting on and 
      liking posts and comments from other users. To enhance content discovery, users can search for 
      specific posts, browse through categories, and sort posts by the most liked or most 
      recent.`,
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
    body: null,
  },
  {
    imgLocation: jeopardyPNG,
    Placeholder: JeopardyLQIP,
    website: 'https://jp-jeopardy.netlify.app',
    github: 'https://github.com/JohnnyParra/Jeopardy-project',
    id: 1,
    title: "JEOPARDY",
    url: "Jeopardy",
    description: `This Jeopardy website lets users experience the iconic TV game show Jeopardy! with 
      actual questions from the show. The game includes classic features such as Double Jeopardy, Daily 
      Double, and Final Jeopardy. To evaluate user answers, the site employs the Levenshtein distance 
      algorithm combined with custom parsing to measure similarity to the correct answers.`,
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
    body: null,
  },
  {
    id: 2,
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    website: null,
    github: 'https://github.com/JohnnyParra/Qt-Paint',
    title: "PAINT APP",
    url: "Paint App",
    description: `A paint application, built with Qt version 6.7, allows users to paint on a canvas 
      with a variety of features. Users can change the size and color of the pen, save and open files, 
      and clear the canvas for a fresh start.`,
    skills: ["C++", "Qt"],
    body: null,
  },
];
export default latestWorkData;
