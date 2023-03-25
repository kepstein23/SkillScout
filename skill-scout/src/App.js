import './App.css';
import ProfileCard from "./ProfileCard"
import profilePic from './profilepic.png'

function App() {
  return (
    <div className="App">
      <ProfileCard
        name="Zohaib Corrigan-Scantling"
        title="Frontend Engineer"
        profilePic={profilePic}
        skills={[{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}]}
        interests={["CSS", "Frontend", "Design"]}
        achievements={["achievement", "achievement", "achievement"]}
      />
    </div>
  );
}

export default App;
