import blogPNG from '/Blog.png';
import blogLQIP from '/Blog(LQIP).webp';
import jeopardyPNG from '/Jeopardy.png';
import JeopardyLQIP from '/Jeopardy(LQIP).webp';
import PaintPNG from '/Paint.png';
import PaintLQIP from '/Paint(LQIP).webp';
import QuizzicalPNG from '/Quizzical.png';
import QuizzicalLQIP from '/Quizzical(LQIP).webp';
import DiscordPNG from '/Discord-bot.png';
import DiscordLQIP from '/Disrocd-bot(LQIP).webp';
import TaskPNG from '/Task-Manager.png';
import TaskLQIP from '/Task-Manager(LQIP).webp';

interface latestWorkData {
  imageLocation: string,
  Placeholder: string,
  id: number,
  title: string,
  url: string,
  description: string,
  skills: string[]
}

const latestWorkData = [
  {
    imgLocation: blogPNG,
    Placeholder: blogLQIP,
    id: 0,
    title: "BLOG",
    url: "blog-application",
    description: "Blog website where users can do the following: create posts, save posts to drafts, delete/edit owned posts, and comment/like other users posts/comments.  Creating a posts consists of adding a(n): title, description, category, body content, and image. Users can then find content by searching for it or by choosing a category(not necessary) and/or sorting by most liked or recent posts.",
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
  },
  {
    imgLocation: jeopardyPNG,
    Placeholder: JeopardyLQIP,
    id: 1,
    title: "JEOPARDY",
    url: "Jeopardy",
    description: "Jeopardy website where users can play the famous tv game show game Jeopardy! using questions from the actual show.  Includes double jeopardy, daily double, and final jeopardy.  Used the Levenshtein distance algorithm along with custom parsing to test user answers similarity to the correct answer.",
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS"],
  },
  {
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    id: 2,
    title: "PAINT APP",
    url: "Paint App",
    description: "Paint application using Qt version 6.7 where users can paint on a canvas with the following abilities: change the size and color of the pen, save and open files, and clearing the canvas.",
    skills: ["C++", "Qt"],
  },
  {
    imgLocation: DiscordPNG,
    Placeholder: DiscordLQIP,
    id: 3,
    title: "DISCORD BOT",
    url: "Discord Bot",
    description: "Discord bot that allows users commands including but not limited to: playing blackjack, scheduling messages, and keeping track of time spent in a voice channel",
    skills: ["JavaScript", "Discord.js", "MongoDB"],
  },
  {
    imgLocation: TaskPNG,
    Placeholder: TaskLQIP,
    id: 4,
    title: "TASK MANAGER",
    url: "Task Manager",
    description: "Task manager website akin to Clockify where users can schedule tasks with ease and order it to their desires",
    skills: ["React", "Javascript", "HTML/CSS", "MySQL", "AWS"],
  },
  {
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    id: 5,
    title: "STUDY BUDDY BACKEND",
    url: "Study Buddy",
    description: "A backend created with Express.js with a database in PostgreSQL for the frontend team to use along with some prompt testing using ChatGPT to help generate programming test questions",
    skills: ["PostgreSQL","Express.js", "Prompt engineering"],
  },
  {
    imgLocation: QuizzicalPNG,
    Placeholder: QuizzicalLQIP,
    id: 6,
    title: "QUIZZICAL",
    url: "Quizzical",
    description: "Simple Quiz website where users can choose different categories along with a difficulty level",
    skills: ["React", "JavaScript", "HTML/CSS"],
  },
  {
    imgLocation: PaintPNG,
    Placeholder: PaintLQIP,
    id: 7,
    title: "Graphical Design",
    url: "Graphical Design",
    description: "Timeline of my journey in using graphical design applications to create logos, wallpapers, and advertisements",
    skills: ["Adobe Illustrator", "GIMP", "Canvas"],
  },
];
export default latestWorkData;
