import brew from './cardImages/brewery.jpg';
import room from './cardImages/room-planner.png';
import password from './cardImages/password-gen.jpg';
import quiz from './cardImages/quiz.jpg';
import ecommerce from './cardImages/ecommerce.jpg';
import tracker from './cardImages/employeetracker.jpg';
import weather from './cardImages/weather.png';
import dayPlanner from './cardImages/day-planner.jpg';
import workoutTracker from './cardImages/workout-tracker.png';
import bookSearch from './cardImages/book-search.png';

const cardsInfo = [
  {
    id: 1,
    title: "LEaseGIT",
    url: "https://still-tundra-21201.herokuapp.com/",
    description: "Sequelize, Express, Matter",
    image: room,
    imageRatio: 784 / 1016
  },
  {
    id: 2,
    title: "Brewhaha",
    url: "https://matildabrantley.github.io/project-one/",
    description: "OpenBrewery & Wikipedia APIs",
    image: brew,
    imageRatio: 800 / 1000
  },
  {
    id: 3,
    title: "Password Generator",
    url: "https://matildabrantley.github.io/password-generator/",
    description: "Generates passwords from user prompts",
    image: password,
    imageRatio: 800 / 1000
  },
  {
    id: 4,
    title: "E-Commerce",
    url: "https://github.com/matildabrantley/e-commerce-back-end",
    description: "Sequelize, Express",
    image: ecommerce,
    imageRatio: 800 / 1000
  },
  {
    id: 5,
    title: "Employee Tracker",
    url: "https://github.com/matildabrantley/employee-tracker",
    description: "",
    image: tracker,
    imageRatio: 800 / 1000
  },
  {
    id: 6,
    title: "Weather Dashboard",
    url: "https://matildabrantley.github.io/weather-dashboard/",
    description: "OpenWeather API",
    image: weather,
    imageRatio: 800 / 1000
  },
  {
    id: 7,
    title: "Coding Quiz",
    description: "JavaScript, Dynamic Content",
    url: "https://matildabrantley.github.io/code-quiz/",
    image: quiz,
    imageRatio: 800 / 1000
  },
  {
    id: 8,
    title: "Work Day Scheduler",
    description: "jQuery, Client-side Storage",
    url: "https://matildabrantley.github.io/work-day-scheduler/",
    image: dayPlanner,
    imageRatio: 800 / 1000
  },
  {
    id: 9,
    title: "Workout Tracker",
    description: "NoSQL with MongoDB, Express, Chart.js",
    url: "https://mysterious-retreat-86741.herokuapp.com/",
    image: workoutTracker,
    imageRatio: 800 / 1000
  },
  {
    id: 10,
    title: "Book Search Engine",
    description: "M.E.R.N. Stack, Google Books API",
    url: "https://fathomless-dusk-11575.herokuapp.com/",
    image: bookSearch,
    imageRatio: 800 / 1000
  },
];

export default cardsInfo;
