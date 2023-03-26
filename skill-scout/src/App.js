import './App.css';
import ProfileCard from "./ProfileCard"
import Filters from "./Filters"
import profilePic from './profilepic.png'
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{display: "flex"}}>
        <Filters 
          users={[]}
          filteredUsers={[]}
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
    </div>
  );
}

export default App;
