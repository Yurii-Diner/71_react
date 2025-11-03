import "./styles.css";
import {userData} from "./data";
function ProfileCard(){
    const {avatar, name, profession, hobby} = userData;
    return(
        <div className='profile-card-wrapper'>
            <h3>{name}</h3>
            <img src={avatar} alt="avatar image"/>
            <div>{profession}</div>
            <div>{hobby}</div>
        </div>
    )
}

export default ProfileCard;