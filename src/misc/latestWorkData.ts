import blogLQIP from '/Blog(LQIP).webp';
import JeopardyLQIP from '/Jeopardy(LQIP).webp';
import PaintLQIP from '/Paint(LQIP).webp';
import blogPNG from '/Blog.png';
import jeopardyPNG from '/Jeopardy.png';
import PaintPNG from '/Paint.png';

interface latestWorkData {
  id: number,
  imageLocation: string,
  Placeholder: string,
  website: string | null,
  github: string | null,
  title: string,
  url: string,
  description: string,
  skills: string[]
}

const latestWorkData = [
  {
    imgLocation: blogPNG,
    Placeholder: blogLQIP,
    website: 'https://johnnymparra-blog.netlify.app',
    github: 'https://github.com/JohnnyParra/Blog-Website-Client',
    id: 0,
    title: "BLOG",
    url: "blog-application",
    description: "Blog website where users can do the following: create posts, save posts to drafts, delete/edit owned posts, and comment/like other users posts/comments.  Creating a posts consists of adding a(n): title, description, category, body content, and image. Users can then find content by searching for it or by choosing a category(not necessary) and/or sorting by most liked or recent posts.",
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
  },
  {
    imgLocation: jeopardyPNG,
    Placeholder: JeopardyLQIP,
    website: 'https://jp-jeopardy.netlify.app',
    github: 'https://github.com/JohnnyParra/Jeopardy-project',
    id: 1,
    title: "JEOPARDY",
    url: "Jeopardy",
    description: "Jeopardy website where users can play the famous tv game show game Jeopardy! using questions from the actual show.  Includes double jeopardy, daily double, and final jeopardy.  Used the Levenshtein distance algorithm along with custom parsing to test user answers similarity to the correct answer.",
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
  },
  {
    id: 2,
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    website: null,
    github: 'https://github.com/JohnnyParra/Qt-Paint',
    title: "PAINT APP",
    url: "Paint App",
    description: "Paint application using Qt version 6.7 where users can paint on a canvas with the following abilities: change the size and color of the pen, save and open files, and clearing the canvas.",
    skills: ["C++", "Qt"],
  },
];
export default latestWorkData;
