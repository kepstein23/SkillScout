import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import profilePic from './img/maya.png';
import MyProfile from './MyProfile';

function App() {
  const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allInterests, setAllInterests] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}  />
          <Route path="/my-profile" element={<MyProfile 
                    name="Alex Oxlade-Chamberlain"
                    title="Frontend Engineer"
                    profilePic={profilePic}
                    skills={[{name: "Java", progress:"22%"}, {name: "CSS", progress: "82%"}, {name: "React", progress: "77%"}]}
                    interests={["CSS", "Frontend", "Design", "Java", "React"]}
                    achievements={["achievement", "achievement", "achievement"]} />} />
          <Route path="/profile-page" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
