import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import ProfileCard from './ProfileCard';
import profilePic from './profilepic.png';



function HomePage() {
  const users = [
    {
      name: "Zohaib Corrigan-Scantling",
      title: "Frontend Engineer",
      profilePic: profilePic,
      skills: [{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}],
      interests: ["CSS", "Frontend", "Design", "Testing", "Java", "React"],
      achievements: ["achievement", "achievement", "achievement"]

    },
    {
      name: "Eli Nathan",
      title: "Designer",
      profilePic: profilePic,
      skills: [{name: "HTML", progress:"70%"}, {name: "Figma", progress: "90%"}, {name: "CSS", progress: "55%"}],
      interests: ["CSS", "Frontend", "Design", "React"],
      achievements: ["achievement", "achievement", "achievement"]

    },
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
        <div>
          {filteredCards}
        </div>
        
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
}

export default HomePage;
