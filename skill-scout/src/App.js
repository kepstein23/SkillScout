import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import profilePic from './profilepic.png';

function App() {
  const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allInterests, setAllInterests] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<HomePage />}  />
          <Route path="/profile-page" element={<ProfilePage 
                    name="Zohaib Corrigan-Scantling"
                    title="Frontend Engineer"
                    profilePic={profilePic}
                    skills={[{name: "Java", progress:"30%"}, {name: "CSS", progress: "70%"}, {name: "React", progress: "40%"}]}
                    interests={["CSS", "Frontend", "Design", "Testing", "Java", "React"]}
                    achievements={["achievement", "achievement", "achievement"]} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
