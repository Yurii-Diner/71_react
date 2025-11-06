import "./styles.css"
import Button from "../../components/Button/Button"
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import {lionData, zebraData, hippoData} from "./data"
function Lesson03 (){
    return (
        <div className="lesson03-wrapper">
            <Button name="Send" type="submit"/>
            <Button name="Get" type="button"/>
            
            <AnimalCard 
            animalName ={lionData.name}
            animalSpecies = {lionData.species}
            animalImg = {lionData.image}
            >
                <p>Main character</p>
            </AnimalCard>

            <AnimalCard 
            animalName ={zebraData.name}
            animalSpecies = {zebraData.species}
            animalImg = {zebraData.image}
            />

            <AnimalCard 
            animalName ={hippoData.name}
            animalSpecies = {hippoData.species}
            animalImg = {hippoData.image}
            />
            
        </div>
    );
}
export default Lesson03;