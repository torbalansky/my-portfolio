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
  recipe_app,
  chat_app,
  movie_api,
  angular,
  python,
  django
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

  {
    title: "Python",
    icon: python,
  },
  {
    title: "Django",
    icon: django,
  },
];

// Array of project details, including name, description, tags, image, and source code URL
const projects = [

  {
    name: "Recipe App",
    description:
      "The Recipe App is a dynamic web platform developed with Django, Python, HTML, CSS, and JavaScript. It enables users to explore, organize, and share their favorite recipes effortlessly. With intuitive features, users can download, create, and interact with recipes through comments.",
    tags: [
      {
        name: "pyhton",
        color: "blue-gradient",
      },
      {
        name: "django",
        color: "green-gradient",
      },
      {
        name: "postgreSQL",
        color: "orange-gradient",
      },
    ],
    image: recipe_app,
    source_code: "https://github.com/torbalansky/recipe-app",
  },
  {
    name: "Movie API",
    description:
      "This REST API acts as a communication bridge between myFlix frontend applications and the MongoDB. It enables the retrieval of movie data from the database and handles various user actions such as registration, login, accessing movie details, managing favorites, user info editing, and account deletion.",
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
    source_code: "https://github.com/torbalansky/myFlix-client",
  },

  {
    name: "Meet App",
    description:
      "MeetApp is a web application developed following the principles of test-driven development. It's designed to work without needing a server, and it's built using technologies like React and JavaScript. It also makes use of the Google Calendar API to get information about upcoming events and relies on AWS Lambda to handle user access securely.",
    tags: [
      {
        name: "reactjs",
        color: "blue-gradient",
      },
      {
        name: "JavaScript",
        color: "green-gradient",
      },
      {
        name: "css",
        color: "orange-gradient",
      },
    ],
    image: meet,
    source_code: "https://github.com/torbalansky/meet",
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
