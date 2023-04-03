import { useState } from "react";
import styled from "styled-components";
import FilterSelect from "./components/FilterSelect";
// import Multiselect from 'multiselect-react-dropdown';


const FilterContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 12px;
    width: 220px;
    padding: 0 24px;
`;

export default function Filters({users, filteredUsers, allSkills, allInterests, allDepts, setFilteredCards, filteredCards, setFilteredUsers, allCards}) {
    //TODO change to multiselect dropdown componenet
    const [appliedSkills, setAppliedSkills] = useState([]);
    const [appliedInterests, setAppliedInterests] = useState([]);
    const [appliedDept, setAppliedDept] = useState([]);

    let skillOptions = []
    for (let i = 0; i < allSkills.length; i++) {
        const skill = allSkills[i];
        skillOptions.push(
            <option>{skill}</option>
        )
    }

    let interestOptions = []
    for (let i = 0; i < allInterests.length; i++) {
        const interest = allInterests[i];
        interestOptions.push(
            <option>{interest}</option>
        )
    }

    let deptOptions = []
    for (let i = 0; i < allDepts.length; i++) {
        const dept = allDepts[i];
        deptOptions.push(
            <option>{dept}</option>
        )
    }

    function onSelectSkill(selectedList) {
        // setAppliedSkills(selectedList);
        // const filtered = [];
        // for (let i = 0; i < filteredUsers.length; i++) {
        //     const user = filteredUsers[i];
        //     for (let j = 0; j < appliedSkills.length; i++) {
        //         if (appliedSkills[i].name === user.skills[i].name) {
        //             console.log(user.name);
        //             filtered.push(user);
        //         }
        //     }
        // }
        // setFilteredUsers(filtered);
        // const cards = []
        // for (let i = 0; i < filteredUsers.length; i++) {
        //     const user = filteredUsers[i];
        //     cards.push(
        //         <ProfileCard 
        //             name={user.name}
        //             title={user.title}
        //             profilePic={user.profilePic}
        //             skills={user.skills}
        //             interests={user.interests}
        //             achievements={user.achievements}
        //         />
        //     )
        // }
        // setFilteredCards(cards);
        // console.log(filteredUsers.length);
        // console.log(filteredCards);

        setFilteredUsers(filteredUsers[0]);
        setFilteredCards(filteredCards[0]);
    }

    function onSelectInterest(selectedList) {
        setAppliedInterests(selectedList)
    }
    function onSelectDept(selectedList) {
        setAppliedDept(selectedList)
    }

    function onRemoveSkill() {
        setFilteredUsers(users);
        setFilteredCards(allCards)
    }

    return (
        <FilterContainer>
            <h3>Filters</h3>
            <p className="bold">Skills</p>
            <FilterSelect options={allSkills} placeholder="Select skills" onSelect={onSelectSkill} onRemove={onRemoveSkill} />
            <p className="bold">Interests</p>
            <FilterSelect options={allInterests} placeholder="Select interests" />
            <p className="bold">Department</p>
            <FilterSelect options={allDepts} placeholder="Select department" />

        </FilterContainer>
    )

}