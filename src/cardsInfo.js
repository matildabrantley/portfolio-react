import brew from './cardImages/brewery.jpg';
import room from './cardImages/room-planner.png';
import password from './cardImages/password-gen.jpg';
import quiz from './cardImages/quiz.jpg';
import ecommerce from './cardImages/ecommerce.jpg';
import tracker from './cardImages/employeetracker.jpg';
import weather from './cardImages/weather.png';
import dayPlanner from './cardImages/day-planner.jpg';

const cardsInfo = [
  {
    id: 1,
    title: "LEaseGIT",
    description:
      "Sequelize, Express, Matter",
    image: room,
    imageRatio: 839 / 1133
  },
  {
    id: 2,
    title: "Brewhaha",
    description:
      "OpenBrewery & Wikipedia APIs",
    image: brew,
    imageRatio: 784 / 1016
  },
  {
    id: 3,
    title: "Password Generator",
    description:
      "Generates passwords from user prompts",
    image: password,
    imageRatio: 784 / 1016
  },
  {
    id: 4,
    title: "E-Commerce",
    description:
      "Sequelize, Express",
    image: ecommerce,
    imageRatio: 784 / 1016
  },
  {
    id: 5,
    title: "Employee Tracker",
    description:
      "",
    image: tracker,
    imageRatio: 784 / 1016
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "OpenWeather API",
    image: weather,
    imageRatio: 784 / 1016
  },
  {
    id: 7,
    title: "Coding Quiz",
    description:
      "JavaScript, Dynamic Content",
    image: tracker,
    imageRatio: 784 / 1016
  },
  {
    id: 8,
    title: "Work Day Scheduler",
    description:
      "jQuery, Client-side Storage",
    image: dayPlanner,
    imageRatio: 784 / 1016
  }
];

export default cardsInfo;
