import './App.css'
import Tab from './Tab.js'
import {Trophy} from "@phosphor-icons/react"
function ProfileCard( {name, title, profilePic, skills, interests, achievements} ) {
    //[{name: "", progress: "10%"}]
    let skillsElements = [];
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        skillsElements.push(
            //TODO set div width and spacing between
            <div class="skill-bar" style={{width: skill.progress}}>
                <p>{skill.name}</p>
            </div>
        )
    }

    let interestElements = [];
    for (let i = 0; i < interests.length; i++) {
        const interest = interests[i];
        interestElements.push(
            //TODO set div width and spacing between
            <Tab 
                deletable={false}
                text={interest}
            />
        )
    }

    let achievementElements = [];
    for (let i = 0; i < achievements.length; i++) {
        const achievement = achievements[i];
        achievementElements.push(
            <div class="trophy">
                <Trophy/>
            </div>
            
        )
    }

    return (
        <div class="profile-card">
            <div class="profile-heading">
                <img class="profile-pic" src={profilePic} alt="profile"/>
                <div>
                    <h2>{name}</h2>
                    <p>{title}</p>
                </div>
                <button>
                    New Request
                </button>
            </div>
            <div style={{display: "flex", justifyContent: "center"}}>
                <div class="profile-card-skills">
                    <h2>Top Skills</h2>
                    {skillsElements}
                </div>
                <div>
                    <h2>Interests</h2>
                    <div class="profile-card-tabs">
                        {interestElements}
                    </div>
                </div>
                <div>
                    <h2>Achievements</h2>
                    <div class="trophies">
                        {achievementElements}
                    </div>
                    
                </div>
            </div>
            
            
        </div>
    )
}

export default ProfileCard;
