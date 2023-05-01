import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage';
import MyProfile from './MyProfile';
import profilePictures from './img/profilePictures';
import InboxPage from './InboxPage';
import LoginPage from './LoginPage';

function App() {
  // const [allSkills, setAllSkills] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  // const [allInterests, setAllInterests] = useState(['React', 'Java', 'CSS', 'HTML', 'JavaScript', 'Figma']);
  // const [allDepts, setAllDepts] = useState(['Frontend', 'Design', 'Backend', 'Testing']);

  const requests = [
    {
      requester: {
        name: "Maya Anderson",
        title: "Graphic Designer",
        profilePic:profilePictures.maya,
        skills: [
          { name: "Python", progress: "90%" },
          { name: "SQL", progress: "80%" },
          { name: "Data Visualization", progress: "75%" },
        ],
        interests: ["Data Analysis", "Machine Learning", "Big Data", "Statistics"],
        achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"]
      },
      message: "I'm working on a quick project in the research lab that requires some frontend skills, and I was wondering if you might be available to help out. We're looking to create a prototype for a new user interface, and I think your expertise in React, CSS, and HTML would be a great fit.",
      skills: ["Frontend", "Javascript", "Data Analytics"]
    },
    {
      requester: {
        name: "Bianca Rossi",
        title: "UI/UX designer",
        profilePic:profilePictures.bianca,
        skills: [
          { name: "Python", progress: "90%" },
          { name: "SQL", progress: "80%" },
          { name: "Data Visualization", progress: "75%" },
        ],
        interests: ["Data Analysis", "Machine Learning", "Big Data", "Statistics"],
        achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"]
      },
      message: "We're looking to create a new web app that incorporates some cutting-edge data analytics techniques, and I think your expertise in React, CSS, and HTML would be a great asset.",
      skills: ["Frontend", "Javascript", "Data Analytics"]
    },
    {
      requester: {
        name: "Alexander Petrov",
        title: "Research scientist",
        profilePic:profilePictures.alexander,
        skills: [
          { name: "Python", progress: "90%" },
          { name: "SQL", progress: "80%" },
          { name: "Data Visualization", progress: "75%" },
        ],
        interests: ["Data Analysis", "Machine Learning", "Big Data", "Statistics"],
        achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"]
      },
      message: "The project is still in the planning stages, but we're hoping to start development soon. We would love to have your input on the design and functionality of the dashboard. If you're interested in getting involved, please let me know and we can discuss the details further.",
      skills: ["Frontend", "Javascript", "Data Analytics"]
    }
  ]

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<LoginPage />}  />
          <Route exact path="/search" element={<HomePage />}  />
          <Route path="/my-profile" element={<MyProfile 
                    name="Alex Oxlade-Chamberlain"
                    title="Frontend Engineer"
                    profilePic={profilePictures.alexander}
                    skills={[{name: "Java", progress:"22%"}, {name: "CSS", progress: "82%"}, {name: "React", progress: "77%"}]}
                    interests={["CSS", "Frontend", "Design", "Java", "React"]}
                    achievements={["achievement", "achievement", "achievement"]} />} />
          <Route path="/profile-page/:userId" element={<ProfilePage/>} />
          <Route path="/inbox" element={
            <InboxPage 
              requests={requests} 
            />
          }/>  
        </Routes>
      </div>
    </Router>
  );
}

export default App;
