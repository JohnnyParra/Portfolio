import blogLQIP from '/Blog(LQIP).webp';
import JeopardyLQIP from '/Jeopardy(LQIP).webp';
import PaintLQIP from '/Paint(LQIP).webp';
import QuizzicalLQIP from '/Quizzical(LQIP).webp';
import DiscordLQIP from '/Discord-bot(LQIP).webp';
import TaskLQIP from '/Task-Manager(LQIP).webp';
import GraphicalLQIP from '/Graphic-collage(LQIP).webp'

import blogPNG from '/Blog.png';
import jeopardyPNG from '/Jeopardy.png';
import PaintPNG from '/Paint.png';
import QuizzicalPNG from '/Quizzical.png';
import DiscordPNG from '/Discord-bot.png';
import TaskPNG from '/Task-Manager.png';
import GraphicalWebp from '/Graphic-collage.webp';

// import OGLogoWebp from '/og-logo.webp';
// import OGLogoLIQP from '/og-logo(LQIP).webp';

// import AstroPNG from '/Astro-Space.png';
// import AstroLQIP from '/Astro-Space(LQIP).webp';

// import JPMLogoSVG from '/JPLogo.svg';
// import JPLogoSVG from '/JPOnlyLogo.svg';

// import PayneWebp from '/Max-Payne-wallpaper-screenshot.webp';
// import PayneLQIP from '/Max-Payne-wallpaper-screenshot(LQIP).webp';

// import PayneCover1SVG from '/Max-Payne-1-Cover.svg';
// import PayneCover2SVG from '/Max-Payne-2-Cover.svg';
// import PayneMask1SVG from '/Max-Payne-1-OP-Mask.svg';
// import PayneMask2SVG from '/Max-Payne-2-OP-Mask.svg';



interface portfolioData {
  id: number,
  imageLocation: string,
  Placeholder: string,
  website: string | null,
  github: string | null,
  title: string,
  url: string,
  description: string,
  skills: string[],
}

const portfolioData = [
  {
    id: 0,
    imgLocation: blogPNG,
    Placeholder: blogLQIP,
    website: 'https://johnnymparra-blog.netlify.app',
    github: 'https://github.com/JohnnyParra/Blog-Website-Client',
    title: "BLOG",
    url: "blog-application",
    description: "Blog website where users can do the following: create posts, save posts to drafts, delete/edit owned posts, and comment/like other users posts/comments.  Creating a posts consists of adding a(n): title, description, category, body content, and image. Users can then find content by searching for it or by choosing a category(not necessary) and/or sorting by most liked or recent posts.",
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
  },
  {
    id: 1,
    imgLocation: jeopardyPNG,
    Placeholder: JeopardyLQIP,
    website: 'https://jp-jeopardy.netlify.app',
    github: 'https://github.com/JohnnyParra/Jeopardy-Client',
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
  {
    id: 3,
    imgLocation: DiscordPNG,
    Placeholder: DiscordLQIP,
    website: null,
    github: 'https://github.com/JohnnyParra/johnny-5-discord-bot',
    title: "DISCORD BOT",
    url: "Discord Bot",
    description: "Discord bot that allows users commands including but not limited to: playing blackjack, scheduling messages, and keeping track of time spent in a voice channel",
    skills: ["JavaScript", "Discord.js", "MongoDB"],
  },
  {
    id: 4,
    imgLocation: TaskPNG,
    Placeholder: TaskLQIP,
    website: 'https://jp-task-manager.netlify.app',
    github: 'https://github.com/JohnnyParra/Task-Manager-Client',
    title: "TASK MANAGER",
    url: "Task Manager",
    description: "Task manager website akin to Clockify where users can schedule tasks with ease and order it to their desires",
    skills: ["React", "Javascript", "HTML/CSS", "MySQL", "AWS"],
  },
  {
    id: 5,
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    website: null,
    github: null,
    title: "STUDY BUDDY BACKEND",
    url: "Study Buddy",
    description: "A backend created with Express.js with a database in PostgreSQL for the frontend team to use along with some prompt testing using ChatGPT to help generate programming test questions",
    skills: ["PostgreSQL","Express.js", "Prompt engineering"],
  },
  {
    id: 6,
    imgLocation: QuizzicalPNG,
    Placeholder: QuizzicalLQIP,
    website: 'https://jp-quizzical.netlify.app',
    github: 'https://github.com/JohnnyParra/Quizzical-React-App',
    title: "QUIZZICAL",
    url: "Quizzical",
    description: "Simple Quiz website where users can choose different categories along with a difficulty level",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    id: 7,
    imgLocation: GraphicalWebp,
    Placeholder: GraphicalLQIP,
    website: null,
    github: null,
    title: "Graphical Design",
    url: "Graphical Design",
    description: "Timeline of my journey in using graphical design applications to create logos, wallpapers, and advertisements",
    skills: ["Adobe Illustrator", "GIMP", "Canvas"],
    // body: [
    //   [
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [OGLogoWebp, OGLogoLIQP],
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //   ],
    //   [
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [AstroPNG, AstroLQIP],
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //   ],
    //   [
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [JPLogoSVG],
    //         [JPMLogoSVG],
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //   ],
    //   [
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [PayneWebp, PayneLQIP]
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [PayneCover1SVG],
    //         [PayneCover2SVG],
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //     {
    //       type: 'images', 
    //       images: [
    //         [PayneMask1SVG],
    //         [PayneMask2SVG],
    //       ],
    //     },
    //     {
    //       type: 'text', 
    //       content: '',
    //     },
    //   ]
    // ]
  },
];
export default portfolioData;
