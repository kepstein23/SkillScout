import Header from './Header';
import React from 'react';
import { ProfileInfo } from './ProfileInfo';
import { ProfileContact } from './ProfileContact';
import './App.css'
import Tab from './Tab.js'
import { Trophy } from "@phosphor-icons/react"
import styled from 'styled-components';
import SkillBar from './components/SkillBar';
import { useLocation, useParams } from 'react-router-dom';
import users from './data/userData';

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    // padding-top: 350px;
    gap: 60px;

    width: 100%;
`;

const Skills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 8px;

    width: 237px;
    height: 100%;
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

const PastProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 400px;
`;

const ProjectContainer = styled.div`
    // padding-left: 2.5%;
    margin-top: 10px;
    // width: 30%
`;


function ProfilePage() {

    const { userId } = useParams(); // Import useParams from react-router-dom and get the userId
    // console.log("User ID:", userId); // Debug line


    // Find the user with the corresponding ID
    const user = users[parseInt(userId)];
    // console.log("User data:", user); // Debug line


    if (!user) {
        return <div>User not found</div>;
    }

    const { name, title, profilePic, skills, interests, achievements, bio, pastProjects, availability } = user;


    let skillsElements = [];
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        skillsElements.push(
            <SkillBar title={skill.name} width={skill.progress} />
        )
    }

    let interestElements = [];
    for (let i = 0; i < interests.length; i++) {
        const interest = interests[i];
        interestElements.push(
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
                <Trophy />
            </div>

        )
    }

    let projectElements = [];
    for (let i = 0; i < pastProjects.length; i++) {
        const project = pastProjects[i];
        projectElements.push(
            <ProjectContainer>
                <p className='bold'>{project.name}</p>
                <p>{project.description}</p>
            </ProjectContainer>
        )
    }

    return (
        <>
            <Header onClick={{}} showHeaderSearchBar={true} />
            <div className='profile-page-top'>
                <ProfileInfo name={name} title={title} profilePic={profilePic} availability={availability} bio={bio} />
                <ProfileContact name={name} />
            </div>

            <BottomProfile>
                <Skills>
                    <p className='bold'>Top Skills</p>
                    {skillsElements}
                </Skills>
                <div style={{ height: "100%" }}>
                    <p className='bold'>Interests</p>
                    <InterestTags>
                        {interestElements}
                    </InterestTags>
                </div>
                <PastProjectsContainer>
                    <p className='bold'>Past Projects</p>
                    {projectElements}
                </PastProjectsContainer>
            </BottomProfile>
            {/* <div class="biography"> 
                <p>Bio</p>
                <p> Frontend Engineer with expertise in React, CSS, and HTML.
                    Passionate about creating beautiful and engaging user interfaces.
                    Interested in data analytics, algorithms, and animation. </p>
            </div> */}
            {/* <BioText>
                <p className='bold'>Bio</p>
                <p> {bio} </p>
            </BioText> */}
        </>
    );
}

export default ProfilePage