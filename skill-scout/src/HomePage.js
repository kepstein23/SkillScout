import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Filters from './Filters';
import ProfileCard from './ProfileCard';
import styled from 'styled-components';
import { MainSearch } from './components/MainSearch';
import LoginPage from './LoginPage';
import users from './data/userData'; 
import NotFound from './components/NotFound';

const ProfilesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: 300px;
  flex-grow: 1;
  max-width: 1000px;
`;

function HomePage() {
  const [currentUser, setCurrentUser] = useState("")
  const [notifications, setNotifications] = useState([])

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
      if (!allSkills.includes(user.skills[j].name)) {
        allSkills.push(user.skills[j].name);
      }
    }
    for (let j = 0; j < user.interests.length; j++) {
      if (!allInterests.includes(user.interests[j])){
        allInterests.push(user.interests[j]);
      }
    }
    allDepts.push(user.dept);
    userProfileCards.push(
      <ProfileCard 
        key={i}
        id={i}
        name={user.name}
        title={user.title}
        profilePic={user.profilePic}
        skills={user.skills}
        interests={user.interests}
        achievements={user.achievements}
        availability={user.availability}
        allSkills={allSkills}
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
          {/* <ProfilesContainer>
            {filteredCards}
          </ProfilesContainer> */}
          {filteredCards.length > 0 ? (
    <ProfilesContainer>{filteredCards}</ProfilesContainer>
) : (
    <NotFound> 
      
    </NotFound>
)}

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
