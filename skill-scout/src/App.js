import './App.css';
import ProfileCard from "./ProfileCard"
import Filters from "./Filters"
import profilePic from './profilepic.png'
import Header from './Header';
import { useState } from 'react';
import ProfilePage from './ProfilePage';

function App() {
  const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allInterests, setAllInterests] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <div className="App">
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
          skills={[{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}]}
          interests={["CSS", "Frontend", "Design"]}
          achievements={["achievement", "achievement", "achievement"]}
        />
      </div>
      {/* uncomment <ProfilePage/> and comment the rest of return() to view profile page */}
      {/* TODO: implement router */}
      {/* <ProfilePage
      
      /> */}
    </div>
  );
}

export default App;
