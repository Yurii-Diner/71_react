import { v4 } from "uuid";

import "./styles.css";
import { animalData } from "./data";
import AnimalCard from "../../components/AnimalCard/AnimalCard";

function Lesson05() {

const animalCards = animalData.map((item , index, array) => {
    return(
        <div className="card-wrapper" >key={v4()}
        <div>{index+1}</div>
        <AnimalCard
        
            animalName={item.name}
            animalSpecies={item.species}
            animalImg={item.image}
        />
        </div>
    );
});

  return (
   <div className="lesson05-wrapper" > {animalCards}</div>
   );
}
export default Lesson05;