import "./styles.css";


function AnimalCard({animalName, animalSpecies, animalImg, children}) {
  return (
    <div className="animal-card-wrapper">
      <h3>{animalName}</h3>
      <div>{animalSpecies}</div>
      <img src={animalImg}/>
      {children}
    </div>
  );
}

export default AnimalCard;