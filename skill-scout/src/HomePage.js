import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Filters from './Filters';
import ProfileCard from './ProfileCard';
import profilePic from './profilepic.png';



function HomePage() {

  const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allInterests, setAllInterests] = useState(['Frontend', 'React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma', 'Design', 'Testing', 'Backend']);
  const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <>
    <Header />
      <div style={{display: "flex"}}>
        <Filters 
          users={[]}
          filteredUsers={[]}
          allSkills={allSkills}
          allInterests={allInterests}
          allDepts={allDepts}
        />
        <ProfileCard
          name="Zohaib Corrigan-Scantling"
          title="Frontend Engineer"
          profilePic={profilePic}
          skills={[{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}, {name: "React", progress: "70%"}]}
          interests={["CSS", "Frontend", "Design", "Testing", "Java", "React"]}
          achievements={["achievement", "achievement", "achievement"]}
        />
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
