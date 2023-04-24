import { useState } from "react";
import styled from "styled-components";
import FilterSelect from "./components/FilterSelect";
import Slider from "./components/Slider";
// import Multiselect from 'multiselect-react-dropdown';
import Select from 'react-select'


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

export default function Filters({users, filteredUsers, allSkills, allInterests, allDepts, setFilteredCards, filteredCards, setFilteredUsers, allCards, handleSearch}) {
    //TODO change to multiselect dropdown componenet
    const [appliedSkills, setAppliedSkills] = useState([]);
    const [appliedInterests, setAppliedInterests] = useState([]);
    const [appliedDept, setAppliedDept] = useState([]);

    // const allDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const allDays = [
        { value: 1, label: 'Monday' },
        { value: 2, label: 'Tuesday' },
        { value: 3, label: 'Wednesday' },
        { value: 4, label: 'Thursday' },
        { value: 5, label: 'Friday' },
      ];


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


    function isSuperset(set, subset) {
        return subset.every(function (value) {
          return set.includes(value);
        });
      }

      
    function isCoveredByName(objects, array) {
        const names = objects.map((object) => {
          return object.name;
        });
        return array.every((value) => {
          return names.includes(value);
        });
    }

    function filterBySkills(selectedSkills) {
        const newFilteredCards = filteredCards.size > 0 ? filteredCards.filter(item => {
            return isCoveredByName(item.props.skills, selectedSkills)
        }
        ) : allCards.filter(item => {
            return isCoveredByName(item.props.skills, selectedSkills)
        }
        ) 
        setFilteredCards(newFilteredCards)
    }

    function filterByInterests(selectedInterests) {
        const newFilteredCards = filteredCards.size > 0 ? filteredCards.filter(item => {
            return isSuperset(item.props.interests, selectedInterests)
        }
        ) : allCards.filter(item => {
            return isSuperset(item.props.interests, selectedInterests)
        }
        )
        setFilteredCards(newFilteredCards)
    }


    function onSelectSkill(selectedList) {
        console.log(filteredCards[0])
        filterBySkills(selectedList)
    }

    function onSelectInterest(selectedList) {
        filterByInterests(selectedList)
    }

    function onRemoveInterest(selectedList) {
        filterByInterests(selectedList)
    }

    function onSelectDept(selectedList) {
        setAppliedDept(selectedList)
    }

    function onRemoveSkill(selectedList) {
        filterBySkills(selectedList)
    }

    const handleStartDate = (option) => {
        setStartDate(option.value)
    }
    const handleEndDate = (option) => { 
        setEndDate(option.label)
    }

    return (
        <FilterContainer>
            <h3>Filters</h3>
            <p className="bold">Skills</p>
            <FilterSelect options={allSkills} placeholder="Select skills" onSelect={onSelectSkill} onRemove={onRemoveSkill} />
            <p className="bold">Interests</p>
            <FilterSelect options={allInterests} placeholder="Select interests" onSelect={onSelectInterest} onRemove={onRemoveInterest} />
            <p className="bold">Department</p>
            <FilterSelect options={allDepts} placeholder="Select department" />
            <p className="bold">From</p>
            <Select options={allDays} placeholder="Select day" onSelect={handleStartDate} />
            <p className="bold">To</p>
            <Select menuPosition="fixed" options={allDays} placeholder="Select day" onSelect={handleEndDate} />
        </FilterContainer>
    )

}