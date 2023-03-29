import './App.css'
import Tab from './Tab.js'
import {Trophy, Plus} from "@phosphor-icons/react"
import styled from 'styled-components';
import Button from './components/Button.js'

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    gap: 32px;

    position: relative;
    width: 1000px;
    height: 332px;

    background: white;

    box-shadow: 0px 11px 20px rgba(5, 16, 55, 0.1);
    border-radius: 8px;
`;

const TopProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 96px;

    width: 100%;
    height: 100px;
`;

const PicNameTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 18px;

    width: 526px;
    height: 100px;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    width: 408px;
    // height: 68px;
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 63px;

    width: 100%;
    height: 152px;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 237px;
    height: 152px;
`;

const InterestTags = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    flex-wrap: wrap;

    width: 316px;
    height: 28px;
`;


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
        <ProfileCardContainer>
            <TopProfile>
                <PicNameTitle>
                    <img class="profile-pic" src={profilePic} alt="profile"/>
                    <NameTitle>
                        <h2 style={{margin: 0}}>{name}</h2>
                        <p style={{ margin: 0 }}>{title}</p>
                    </NameTitle>
                </PicNameTitle>
                <Button type='primary' icon={Plus} text="New request" />
            </TopProfile>
            <BottomProfile>
                <Skills>
                    <p className='bold'>Top Skills</p>
                    {skillsElements}
                </Skills>
                <div>
                    <p className='bold'>Interests</p>
                    <InterestTags>
                        {interestElements}
                    </InterestTags>
                </div>
                <div>
                    <p className='bold'>Achievements</p>
                    <div class="trophies">
                        {achievementElements}
                    </div>
                    
                </div>
            </BottomProfile>
            
            
        </ProfileCardContainer>
    )
}

export default ProfileCard;
