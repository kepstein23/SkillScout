import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Filters from './Filters';
import ProfileCard from './ProfileCard';
import styled from 'styled-components';
import profilePictures from './img/profilePictures';
import { MainSearch } from './components/MainSearch';
import LoginPage from './LoginPage';

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
  const [currentUser, setCurrentUser] = useState("")
  const [notifications, setNotifications] = useState([])
  const users = [
    {
      name: "Zohaib Corrigan-Scantling",
      title: "Frontend Engineer",
      profilePic: profilePictures.zohaib,
      skills: [{name: "Java", progress:"90%"}, {name: "CSS", progress: "50%"}],
      interests: ["CSS", "Frontend", "Design", "Testing", "Java", "React"],
      achievements: ["achievement", "achievement", "achievement"],
      availability: [
        {day: "Monday", start: "1:00", end: "2:00", period: "PM"},
        {day: "Tuesday", start: "4:30", end: "5:30", period: "PM"},
        {day: "Wednesday", start: "12:30", end: "2:00", period: "PM"}
      ]
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
      achievements: ["Certified Data Analyst", "Data Science Competition Winner", "Published Research Paper"],
      availability: 
      [
        {day: "Monday", start: "1:30", end: "2:00", period: "PM"},
        {day: "Wednesday", start: "3:30", end: "5:00", period: "PM"},
        {day: "Friday", start: "12:00", end: "2:00", period: "PM"}
      ]
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
      achievements: ["Best Research Paper Award", "Research Grant Recipient", "Innovative Research Award"],
      availability: 
      [
        {day: "Thursday", start: "4:30", end: "6:00", period: "PM"},
        {day: "Friday", start: "5:00", end: "7:30", period: "PM"}
      ]

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
        availability={user.availability}
      />
    )
  }


  const [filteredCards, setFilteredCards] = useState(userProfileCards);
  const [hasSearched, setHasSearched] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleMainSearch = () => {
    setHasSearched(true);
    setSearchValue(document.getElementById("main-search").value);
  }

  const handleSearch = (value) => {
      setSearchValue(value);
  };

  useEffect(() => {
    console.log('The count variable has changed:', searchValue);
    if (searchValue.length >= 3) {
      
      const searchedUsers = userProfileCards.filter(item => 
        // console.log('UserProfileCardsItem:', item)
        item.props.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.props.interests.some(interest => 
          interest.toLowerCase().includes(searchValue.toLowerCase())
          ) ||
        item.props.skills.some(skill => 
          skill.name.toLowerCase().includes(searchValue.toLowerCase())
          )
        );
      setFilteredCards(searchedUsers)
      setHasSearched(true);
    } else {
      setFilteredCards(userProfileCards)
    }
  }, [searchValue]);

  const onReset = () => {
    setHasSearched(false);
    setSearchValue("");
  }
  
  return (
    <>
        <><Header onClick={onReset} onSearch={handleSearch} showHeaderSearchBar={true} /><div style={{ display: "flex" }}>
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
            handleSearch={handleSearch} />
          <ProfilesContainer>
            {filteredCards}
          </ProfilesContainer>

        </div></>
      {/* {!hasSearched &&
        <><Header onClick={onReset} onSearch={handleSearch} showHeaderSearchBar={false} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <MainSearch handleSearch={handleMainSearch} />
        </div>
        </>
      } */}
      </>
  );  
      
}

export default HomePage;
