// Importing various image assets for technology icons and project images

import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  aws,
  nodejs,
  mongodb,
  git,
  meet,
  myFlix_react,
  star_wars,
  chat_app,
  MyFlix_Angular,
  movie_api,
  angular
} from "../img";

// Array of technology stacks with titles and corresponding icons
const tech = [
  {
    title: "HTML 5",
    icon: html,
  },
  {
    title: "CSS 3",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "TypeScript",
    icon: typescript,
  },
  {
    title: "React JS",
    icon: reactjs,
  },
  {
    title: "AWS",
    icon: aws,
  },
  {
    title: "Angular",
    icon: angular,
  },
  {
    title: "Node JS",
    icon: nodejs,
  },
  {
    title: "MongoDB",
    icon: mongodb,
  },
  {
    title: "git",
    icon: git,
  },
];

// Array of project details, including name, description, tags, image, and source code URL
const projects = [
  {
    name: "Movie API",
    description:
      "This REST API acts as a communication bridge between myFlix frontend applications (React and Angular) and the MongoDB Database. It enables the retrieval of movie data from the database and handles various user actions such as registration, login, accessing movie details, managing favorites, user info editing, and account deletion.",
    tags: [
      {
        name: "node",
        color: "blue-gradient",
      },
      {
        name: "express",
        color: "orange-gradient",
      },
      {
        name: "restapi",
        color: "green-gradient",
      },
      {
        name: "mongoDB",
        color: "",
      },
    ],
    image: movie_api,
    source_code: "https://github.com/torbalansky/movie_api/",
  },
  {
    name: "Myflix-React",
    description:
      "MyFlix is a client-side movie app created with React, React Bootstrap, Redux, and JavaScript. It allows users to explore a vast collection of movies, find detailed information about each film, and manage their favorites. The app also provides user registration, login, and authentication using JWT tokens, making it a secure and interactive movie platform.",
    tags: [
      {
        name: "reactjs",
        color: "blue-gradient",
      },
      {
        name: "redux",
        color: "green-gradient",
      },
      {
        name: "css",
        color: "orange-gradient",
      },
    ],
    image: myFlix_react,
    source_code: "https://myflix-torbalansky.netlify.app/",
  },

  {
    name: "Myflix-Angular",
    description:
      "MyFlix Angular is a dynamic and user-friendly web application built with Angular, TypeScript, HTML, and SCSS. Utilizing MongoDB, Express.js, and Node.js on the backend, it allows users to explore movie details, such as descriptions, genres, directors, ratings, and reviews, and create a personalized list of favorite films.",
    tags: [
      {
        name: "reactjs",
        color: "blue-gradient",
      },
      {
        name: "angular",
        color: "green-gradient",
      },
      {
        name: "typescript",
        color: "orange-gradient",
      },
    ],
    image: MyFlix_Angular,
    source_code: "https://myflix-angular-client-torbalansky.netlify.app/welcome",
  },

  {
    name: "Meet App",
    description:
      "MeetApp is a web application developed following the principles of test-driven development (TDD). It's designed to work without needing a server, and it's built using technologies like React and JavaScript. It also makes use of the Google Calendar API to get information about upcoming events and relies on AWS Lambda to handle user access securely.",
    tags: [
      {
        name: "react",
        color: "blue-gradient",
      },
      {
        name: "JavaScript",
        color: "green-gradient",
      },
      {
        name: "CSS",
        color: "orange-gradient",
      },
    ],
    image: meet,
    source_code: "https://github.com/torbalansky/meet",
  },

  {
    name: "SWAPI Planets Explorer",
    description:
      "The SWAPI app is a simple web application that lets users search for and view information about different star wars planets. It's built using HTML, CSS, JavaScript, Bootstrap, and jQuery. It uses the SWAPI to retrieve data about planets.",
    tags: [
      {
        name: "javascript",
        color: "blue-gradient",
      },
      {
        name: "html",
        color: "green-gradient",
      },
      {
        name: "css",
        color: "orange-gradient",
      },
    ],
    image: star_wars,
    source_code: "https://github.com/torbalansky/swapi-planets-explorer",
  },

  {
    name: "Chat App",
    description:
      "ChatApp is a cross-platform messaging application built with React Native and Expo. It enables users to chat, share images, and location. The app utilizes Google Firebase for user authentication and stores data both online and offline.",
    tags: [
      {
        name: "react native",
        color: "blue-gradient",
      },
      {
        name: "javascript",
        color: "green-gradient",
      },
      {
        name: "google firebase",
        color: "orange-gradient",
      }
    ],
    image: chat_app,
    source_code: "https://github.com/torbalansky/swapi-planets-explorer",
  },
];

export { tech, projects };
