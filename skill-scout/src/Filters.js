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
    width: 250px;
    padding: 0 24px;
`;

export default function Filters({users, filteredUsers, allSkills, allInterests, allDepts, setFilteredCards, filteredCards, setFilteredUsers, allCards, handleSearch}) {
    //TODO change to multiselect dropdown componenet
    const [appliedSkills, setAppliedSkills] = useState([]);
    const [appliedInterests, setAppliedInterests] = useState([]);
    const [appliedDept, setAppliedDept] = useState([]);

    const [startDate, setStartDate] = useState(0)
    const [endDate, setEndDate] = useState(0);

    // const allDays = [
    //     { value: 1, label: 'Monday' },
    //     { value: 2, label: 'Tuesday' },
    //     { value: 3, label: 'Wednesday' },
    //     { value: 4, label: 'Thursday' },
    //     { value: 5, label: 'Friday' },
    //   ];
    const allDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']


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
    
    function filterByDay(selectedDays) {
        //check if the original cards have at least one day in common with the selected days
        if (selectedDays.length == 0) {
            setFilteredCards(allCards)
        } else {
            const newFilteredCards = filteredCards.size > 0 ? filteredCards.filter(item => {
                return item.props.availability.some(date => {
                    return selectedDays.includes(date.day)
                })
            }
            ) : allCards.filter(item => {
                return item.props.availability.some(date => {
                    return selectedDays.includes(date.day)
                })
            }
            )
            setFilteredCards(newFilteredCards)
        }

    }


    function onSkillsChange(selectedList) {
        console.log(filteredCards[0])
        filterBySkills(selectedList)
    }

    function onInterestsChange(selectedList) {
        filterByInterests(selectedList)
    }

    function onSelectDept(selectedList) {
        setAppliedDept(selectedList)
    }


    const handleStartDate = (option) => {
        setStartDate(option.value)
        console.log("handle start start date: " + startDate)
        console.log("handle start option value: " + option.value)

        // console.log("handle start end date: " + endDate)
        filterByDate(option.value, endDate)
    }
    const handleEndDate = (option) => { 
        setEndDate(option.value)
        filterByDate(startDate, option.value)
    }

    const filterByDate = (startDate, endDate) => {
        if (startDate != 0 && endDate != 0) {
            const newFilteredCards = filteredCards.size > 0 ? filteredCards.filter(item => {
                return item.props.availability.some(date => {
                    const dayInNum = convertDateToNumber(date.day)
                    return dayInNum >= startDate && dayInNum <= endDate
                })
            }
            ) : allCards.filter(item => {
                return item.props.availability.some(date => {
                    const dayInNum = convertDateToNumber(date.day)
                    return dayInNum >= startDate && dayInNum <= endDate
                })
            }
            )
            setFilteredCards(newFilteredCards)
        }
    }

    const convertDateToNumber = (date) => {
        switch (date) {
            case "Monday":
                return 1
            case "Tuesday":
                return 2
            case "Wednesday":
                return 3
            case "Thursday":
                return 4
            case "Friday":
                return 5
            default:
                return 0
        }
    }

    const onDaysChange = (selectedList) => {
        filterByDay(selectedList)
    }


    return (
        <FilterContainer>
            <h3>Filters</h3>
            <p className="bold">Skills</p>
            <FilterSelect options={allSkills} placeholder="Select skills" onSelect={onSkillsChange} onRemove={onSkillsChange} />
            <p className="bold">Interests</p>
            <FilterSelect options={allInterests} placeholder="Select interests" onSelect={onInterestsChange} onRemove={onInterestsChange} />
            <p className="bold">Department</p>
            <FilterSelect options={allDepts} placeholder="Select department" />
            <p className="bold">Available Days</p>
            <FilterSelect menuPosition="fixed" options={allDays} placeholder="Select days" onSelect={onDaysChange} onRemove={onDaysChange} />
            {/* <Select options={allDays} placeholder="Select day" onChange={handleStartDate} /> */}
            {/* <p className="bold">To</p> */}
            {/* <Select menuPosition="fixed" options={allDays} placeholder="Select day" onChange={handleEndDate} /> */}
            
        </FilterContainer>
    )

}