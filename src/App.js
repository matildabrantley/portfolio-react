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
              <div className="work-card-name">{workCard.title}</div>
              <div className="work-card-info">{workCard.description}</div>
              <Image ratio={workCard.imageRatio} src={workCard.image} />
            </WorkCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;