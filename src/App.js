import WorkCard from "./WorkCard";
// import {Navbar} from "react-bootstrap"
import Navigation from "./Navigation";
import Image from "./Image";
import cardsInfo from "./cardsInfo";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Navigation />
      <div className="row">
        {cardsInfo.map((workCard, i) => (
          <div className="col" key={workCard.id}>
              <WorkCard>
                <a href = {workCard.url}>
                  <div className="work-card-name">{workCard.title}</div>
                </a>
                <div className="work-card-info">{workCard.description}</div>
                <a href = {workCard.url}>
                  <Image ratio={workCard.imageRatio} src={workCard.image} />
                </a>
              </WorkCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;