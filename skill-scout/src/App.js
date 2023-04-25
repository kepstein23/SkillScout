import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import Notifications from './components/NotificationCard'
import profilePic from './img/zohaib.png';
import profilePictures from './img/profilePictures';

function App() {
  const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allInterests, setAllInterests] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}  />
          {/* <Route path="/profile-page" element={<ProfilePage 
                    name="Zohaib Corrigan-Scantling"
                    title="Frontend Engineer"
                    profilePic={profilePic}
                    skills={[{name: "Java", progress:"30%"}, {name: "CSS", progress: "70%"}, {name: "React", progress: "40%"}]}
                    interests={["CSS", "Frontend", "Design", "Testing", "Java", "React"]}
                    achievements={["achievement", "achievement", "achievement"]} />} /> */}
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/notifications" element={
            <Notifications 
              requester={{
                name: "Zohaib Corrigan-Scantling",
                title: "Frontend Engineer",
                profilePic: profilePictures.zohaib,
                skills: [{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}],
                interests: ["CSS", "Frontend", "Design", "Testing", "Java", "React"],
                achievements: ["achievement", "achievement", "achievement"]
              }}
              message="This is my message"
              skills={["Java"]}
            />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
