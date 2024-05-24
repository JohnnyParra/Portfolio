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

import OGLogoWebp from '/og-logo.webp';
import OGLogoLIQP from '/og-logo(LQIP).webp';

import AstroPNG from '/Astro-Space.png';
import AstroLQIP from '/Astro-Space(LQIP).webp';

import JPMLogoSVG from '/JPLogo.svg';
import JPLogoSVG from '/JPOnlyLogo.svg';

import PayneWebp from '/Max-Payne-wallpaper-screenshot.webp';
import PayneLQIP from '/Max-Payne-wallpaper-screenshot(LQIP).webp';

import PayneCover1SVG from '/Max-Payne-1-Cover.svg';
import PayneCover2SVG from '/Max-Payne-2-Cover.svg';
import PayneMask1SVG from '/Max-Payne-1-OP-Mask.svg';
import PayneMask2SVG from '/Max-Payne-2-OP-Mask.svg';

import TestingPNG from '/testing.png';
import TestingLQIP from '/testing(LQIP).webp';

import EndpointPNG from '/endpoints.png';
import EndpointLQIP from '/endpoints(LQIP).webp';

interface portfolioData {
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

const portfolioData: portfolioData[] = [
  {
    id: 0,
    imgLocation: blogPNG,
    Placeholder: blogLQIP,
    website: 'https://johnnymparra-blog.netlify.app',
    github: 'https://github.com/JohnnyParra/Blog-Website-Client',
    title: "BLOG",
    url: "blog-application",
    description: `A Blog platform that allows users to create posts by adding a title, description, 
      category, body content, and image. Users can save posts as drafts for future editing and have the 
      ability to edit or delete their own posts. Interaction is encouraged through commenting on and 
      liking posts and comments from other users. To enhance content discovery, users can search for 
      specific posts, browse through categories, and sort posts by the most liked or most 
      recent.`,
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS", "Azure Database"],
    body: null,
  },
  {
    id: 1,
    imgLocation: jeopardyPNG,
    Placeholder: JeopardyLQIP,
    website: 'https://jp-jeopardy.netlify.app',
    github: 'https://github.com/JohnnyParra/Jeopardy-Client',
    title: "JEOPARDY",
    url: "Jeopardy",
    description: `This Jeopardy website lets users experience the iconic TV game show Jeopardy! with 
      actual questions from the show. The game includes classic features such as Double Jeopardy, Daily 
      Double, and Final Jeopardy. To evaluate user answers, the site employs the Levenshtein distance 
      algorithm combined with custom parsing to measure similarity to the correct answers.`,
    skills: ["React", "JavaScript", "Express", "MySQL", "HTML/CSS", "AWS RDS"],
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
  {
    id: 3,
    imgLocation: DiscordPNG,
    Placeholder: DiscordLQIP,
    website: null,
    github: 'https://github.com/JohnnyParra/johnny-5-discord-bot',
    title: "DISCORD BOT",
    url: "Discord Bot",
    description: `A Discord bot that offers a range of commands, including but not limited to playing 
      blackjack, scheduling messages, and tracking the time users spend in voice channels.`,
    skills: ["JavaScript", "Discord.js", "MongoDB"],
    body: null,
  },
  {
    id: 4,
    imgLocation: TaskPNG,
    Placeholder: TaskLQIP,
    website: 'https://jp-task-manager.netlify.app',
    github: 'https://github.com/JohnnyParra/Task-Manager-Client',
    title: "TASK MANAGER",
    url: "Task Manager",
    description: `A task manager website, similar to Clockify, that enables users to schedule tasks 
      effortlessly and organize them according to their preferences.`,
    skills: ["React", "Javascript", "HTML/CSS", "MySQL", "Google Cloud SQL"],
    body: null,
  },
  {
    id: 5,
    imgLocation: TestingPNG,
    Placeholder: TestingLQIP,
    website: null,
    github: null,
    title: "STUDY BUDDY BACKEND",
    url: "Study Buddy",
    description: `Our backend, built with Express.js and a PostgreSQL database, is designed for the 
      frontend team to use. Additionally, it includes prompt testing using ChatGPT to help generate 
      programming test questions. (Update in Progress)`,
    skills: ["PostgreSQL","Express.js", "Prompt engineering"],
    body: [
      [
        {
          type: 'title',
          content: 'The Pitch'
        },
        {
          type: 'text',
          content: `Bay Valley Tech sought to develop a dual-purpose website, serving both as a 
            teacher quiz tool and a student "study buddy". Our project team was divided into two 
            groups: front-end and back-end, each comprising approximately five members. As part of 
            the more experienced back-end team, my responsibilities included designing a robust 
            database, creating a seamless API for front-end integration, and conducting feasibility 
            research on incorporating ChatGPT for automated question and quiz generation. Our task 
            was broad and open-ended, providing ample opportunity for innovation and creative 
            problem-solving.`
        },
      ],
      [
        {
          type: 'title',
          content: 'Testing Chatgpt'
        },
        {
          type: 'text',
          content: `Prior to delving into database implementation, our team prioritized exploring the 
            feasibility of leveraging ChatGPT for generating multiple-choice questions. During this 
            phase, we experimented with several models, with my particular focus directed towards the 
            GPT-3.5 Turbo model. The screenshot extracted from our Figma file, shows a sample of the 
            testing and iterations I contributed to. This preliminary stage laid the groundwork for our 
            subsequent decisions and development efforts.`
        },
        {
          type: 'images',
          content: [
            [TestingPNG, TestingLQIP],
          ]
        },
        {
          type: 'text',
          content: `In setting up this model, we first gave the bot a specific role and then sent it 
            a template to guide how it should format its responses. In the image above the template
            also includes a line asking for questions which would be created and sent from the
            front-end based on some selections the users made. Since every few characters counts as a 
            token and sending tokens costs money, it's important to keep things brief to reduce costs
            but to so brief that the bot starts to return unsatisfactory results.`
        }
      ],
      [
        {
          type: 'title',
          content: `Database and API`,
        },
        {
          type: 'text',
          content: `We opted for PostgreSQL primarily due to its capability to utilize arrays as a 
            datatype. This decision stemmed from our design process in Figma, where we wanted 
            one of the data types to be an array containing question keys. Since the front-end was 
            still in the design phase, we had to make informed assumptions regarding its potential 
            requirements. The image below, extracted from Figma, illustrates how data was intended to 
            be transmitted to the client, along with various endpoints they could access.`
        },
        {
          type: 'images',
          content: [
            [EndpointPNG, EndpointLQIP],
          ],
        }
      ],
      [
        {
          type: 'title',
          content: 'Final Decisions'
        },
        {
          type: 'text',
          content: `With costs in mind we made the decision that at first only teachers
            would be able to use Chatgpt to generate quizzes. Student quizzes would be 
            from the database of already stored Chatgpt-generated questions. At the time, 
            Chatgpt lacked a reliable way to generate quizzes on its own without human 
            oversight. As a workaround, we proposed that it could generate multiple 
            choices questions for teachers to review and amend minor errors before 
            saving them to the database. We transitioned to a different project while
            the front-end continued its development phase`
        }
      ],
    ],
  },
  {
    id: 6,
    imgLocation: QuizzicalPNG,
    Placeholder: QuizzicalLQIP,
    website: 'https://jp-quizzical.netlify.app',
    github: 'https://github.com/JohnnyParra/Quizzical-React-App',
    title: "QUIZZICAL",
    url: "Quizzical",
    description: `A simple quiz website allows users to select different categories and choose a 
      difficulty level for their quizzes.`,
    skills: ["React", "JavaScript", "HTML/CSS"],
    body: null,
  },
  {
    id: 7,
    imgLocation: GraphicalWebp,
    Placeholder: GraphicalLQIP,
    website: null,
    github: null,
    title: "Graphical Design",
    url: "Graphical Design",
    description: `This overview details my journey in using graphic design applications to create logos 
      and wallpapers.`,
    skills: ["Adobe Illustrator", "GIMP", "Canvas"],
    body: [
      [
        {
          type: 'title', 
          content: 'My First Ever Logo',
        },
        {
          type: 'images', 
          content: [
            [OGLogoWebp, OGLogoLIQP],
          ],
        },
        {
          type: 'text', 
          content: `I designed this logo during a CMS course using Canvas. It was featured on a mock 
            movie theater website I built with Wix and appeared in various conceptual products and 
            advertisements related to the project. While the logo has a few imperfections, such as 
            disconnected lines and a small artifact at the top, it represents my initial foray into 
            graphic design. Despite its flaws, I'm proud of the progress I made through this experience.`,
        },
      ],
      [
        {
          type: 'title', 
          content: 'Switching to GIMP',
        },
        {
          type: 'images', 
          content: [
            [AstroPNG, AstroLQIP],
          ],
        },
        {
          type: 'text', 
          content: `I created this logo during the same CMS course, but wanting something more 
            advanced, I switched to the free application GIMP. This logo was used for another mock 
            website built with WordPress. Unfortunately, it was highly unoptimized, using high-definition
            PNG images of planets that were partially obscured by a semi-transparent circle, which 
            defeated the purpose of using those PNGs. Since GIMP is an image manipulation program, the 
            logo's fidelity was only adequate, and pixelation became noticeable when zoomed in. For my 
            next project, I decided to use a vector-based program to achieve better results.`,
        },
      ],
      [
        {
          type: 'title', 
          content: 'Switching to Adobe Illustrator',
        },
        {
          type: 'images', 
          content: [
            [JPLogoSVG],
            [JPMLogoSVG],
          ],
        },
        {
          type: 'text', 
          content: `This set of logos, currently featured on this website, was created using Adobe 
            Illustrator. For my portfolio website, I needed a professional logo that was both small in 
            size (6.27 kB) and high in quality. I chose to create SVG logos in Illustrator: the primary 
            logo appears in the header, while the secondary logo is used as the tab icon.`,
        },
      ],
      [
        {
          type: 'title', 
          content: 'Making My First Wallpaper',
        },
        {
          type: 'text', 
          content: `The assets for this wallpaper were created using Illustrator, and I applied live
            post effects with Wallpaper Engine. As of now, it has 144 subscribers and 14 favorites. 
            Impressively, it is the second most popular wallpaper this year for Max Payne.`,
        },
        {
          type: 'link',
          content: 'Wallpaper on Steam',
          url: 'https://steamcommunity.com/sharedfiles/filedetails/?id=3084893831'
        },
        {
          type: 'images', 
          content: [
            [PayneCover1SVG],
            [PayneCover2SVG],
          ],
        },
        {
          type: 'text', 
          content: `Only PNG versions of these covers existed, so I found the highest quality ones
            and performed an image trace in Illustrator. I then meticulously cleaned up the paths by
            hand to ensure the best possible results.`,
        },
        {
          type: 'images', 
          content: [
            [PayneMask1SVG],
            [PayneMask2SVG],
          ],
        },
        {
          type: 'text', 
          content: `Using the previously created SVG and some additional shapes, I crafted an opacity
            mask in Illustrator. This opacity mask allowed the dynamic background in Wallpaper Engine
            to shine through specific areas as intended. The mask was also exported as an SVG.`,
        },
        {
          type: 'images', 
          content: [
            [PayneWebp, PayneLQIP]
          ],
        },
        {
          type: 'text', 
          content: `Since I made this wallpaper using SVG assets, it can easily scale to any 
            resolution. After importing the assets into Wallpaper Engine, I enhanced it with lighting,
            film grain, rain, and snow effects. I also made it highly customizable, allowing users to
            tweak specific settings to their liking. The logo was also created in Illustrator, 
            following the same principles as before.`,
        },
      ]
    ]
  },
];
export default portfolioData;
