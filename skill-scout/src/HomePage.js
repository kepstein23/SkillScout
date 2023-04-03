import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import ProfileCard from './ProfileCard';
import styled from 'styled-components';
import profilePictures from './img/profilePictures';

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 250px;
  flex-grow: 1;
  max-width: 1000px;
`;

function HomePage() {
  const users = [
    {
      name: "Zohaib Corrigan-Scantling",
      title: "Frontend Engineer",
      profilePic: profilePictures.zohaib,
      skills: [{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}],
      interests: ["CSS", "Frontend", "Design", "Testing", "Java", "React"],
      achievements: ["achievement", "achievement", "achievement"]

    },
    {
      name: "Grace Lin",
      title: "Data Analyst",
      profilePic:profilePictures.grace,
      skills: [
        { name: "Python", progress: "90%" },
        { name: "SQL", progress: "80%" },
        { name: "Data Visualization", progress: "75%" },
      ],
      interests: ["Data Analysis", "Machine Learning", "Big Data", "Statistics"],
      achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"]
    },
    {
      name: "Mark Johnson",
      title: "Head Researcher",
      profilePic: profilePictures.mark,
      skills: [
        { name: "Research Methodology", progress: "95%" },
        { name: "Python", progress: "80%" },
        { name: "Project Management", progress: "85%" },
      ],
      interests: ["Scientific Research", "Innovation", "AI", "Data Science"],
      achievements: ["Best Research Paper Award", "Research Grant Recipient", "Innovative Research Award"]
    }
  ]

  const [filteredUsers, setFilteredUsers] = useState(users);

  const allSkills = [];
  const allInterests = [];
  const allDepts = [];

  const [appliedSkills, setAppliedSkills] = useState([]);
  const [appliedInterests, setAppliedInterests] = useState([]);
  const [appliedDept, setAppliedDept] = useState([]);

  const userProfileCards = [];
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    for (let j = 0; j < user.skills.length; j++) {
      allSkills.push(user.skills[j].name);
    }
    for (let j = 0; j < user.interests.length; j++) {
      allInterests.push(user.interests[j]);
    }
    allDepts.push(user.dept);
    userProfileCards.push(
      <ProfileCard 
        name={user.name}
        title={user.title}
        profilePic={user.profilePic}
        skills={user.skills}
        interests={user.interests}
        achievements={user.achievements}
      />
    )
  }

  const [filteredCards, setFilteredCards] = useState(userProfileCards);

  //const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  //const [allInterests, setAllInterests] = useState(['Frontend', 'React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma', 'Design', 'Testing', 'Backend']);
  //const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <>
    <Header />
      <div style={{display: "flex"}}>
        <Filters 
          users={users}
          filteredUsers={filteredUsers}
          setFilteredUsers={setFilteredUsers}
          allSkills={allSkills}
          allInterests={allInterests}
          allDepts={allDepts}
          setAppliedDept={setAppliedDept}
          setAppliedInterests={setAppliedInterests}
          setAppliedSkills={setAppliedSkills}
          appliedSkills={appliedSkills}
          filteredCards={filteredCards}
          setFilteredCards={setFilteredCards}
          allCards={userProfileCards}
        />
        <ProfilesContainer>
          {filteredCards}
        </ProfilesContainer>
        
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile-page">Profile Page</Link>
        </li>
      </ul>
      </>
  );  
      
{/* <div style={{display: "flex"}}>
    <div style={{display: "flex"}}>
      <Filters 
        users={[]}
        filteredUsers={[]}
        allSkills={allSkills}
        allInterests={allInterests}
        allDepts={allDepts}
      />
      <ProfilesContainer>
        <ProfileCard
          name="Zohaib Corrigan-Scantling"
          title="Frontend Engineer"
          profilePic={profilePictures.zohaib}
          skills={[{ name: "Java", progress: "90%" }, { name: "CSS", progress: "50%" }, { name: "React", progress: "70%" }]}
          interests={["CSS", "Frontend", "Design", "Testing", "Java", "React"]}
          achievements={["achievement", "achievement", "achievement"]}
        />
        <ProfileCard
          name="Grace Lin"
          title="Data Analyst"
          profilePic={profilePictures.grace}
          skills={[
            { name: "Python", progress: "90%" },
            { name: "SQL", progress: "80%" },
            { name: "Data Visualization", progress: "75%" },
          ]}
          interests={["Data Analysis", "Machine Learning", "Big Data", "Statistics"]}
          achievements={["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"]}
        />

        <ProfileCard
          name="Mark Johnson"
          title="Head Researcher"
          profilePic={profilePictures.mark}
          skills={[
            { name: "Research Methodology", progress: "95%" },
            { name: "Python", progress: "80%" },
            { name: "Project Management", progress: "85%" },
          ]}
          interests={["Scientific Research", "Innovation", "AI", "Data Science"]}
          achievements={["Best Research Paper Award", "Research Grant Recipient", "Innovative Research Award"]}
        />

        <ProfileCard
          name="Alexander Petrov"
          title="Research Scientist"
          profilePic={profilePictures.alexander}
          skills={[
            { name: "Machine Learning", progress: "90%" },
            { name: "Deep Learning", progress: "85%" },
            { name: "Python", progress: "80%" },
          ]}
          interests={["AI", "Computer Vision", "Neural Networks", "Natural Language Processing"]}
          achievements={["Published AI Research", "Conference Speaker", "ML Competition Winner"]}
        />

        <ProfileCard
          name="Maya Anderson"
          title="Graphic Designer"
          profilePic={profilePictures.maya}
          skills={[
            { name: "Adobe Creative Suite", progress: "95%" },
            { name: "Illustration", progress: "80%" },
            { name: "UI Design", progress: "70%" },
          ]}
          interests={["Visual Design", "Branding", "Typography", "Illustration"]}
          achievements={["Design Award Winner", "Featured in Design Magazine", "Successful Rebranding Project"]}
        />

        <ProfileCard
          name="Bianca Rossi"
          title="UI/UX Designer"
          profilePic={profilePictures.bianca}
          skills={[
            { name: "UX Design", progress: "90%" },
            { name: "UI Design", progress: "85%" },
            { name: "Prototyping", progress: "80%" },
          ]}
          interests={["User-Centered Design", "Accessibility", "Interaction Design", "Mobile Design"]}
          achievements={["Best Mobile App Design", "UX Conference Speaker", "Design Mentor"]}
        />
      </ProfilesContainer>
    </div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile-page">Profile Page</Link>
      </li>
    </ul> */}
}

export default HomePage;
