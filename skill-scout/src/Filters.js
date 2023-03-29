import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';
import styled from "styled-components";

const FilterContainer = styled.div`
    width: 220px;
    padding: 0 24px;
    `;

export default function Filters({users, filteredUsers, allSkills, allInterests, allDepts}) {
    //TODO change to multiselect dropdown componenet
    const [appliedSkills, setAppliedSkills] = useState([]);
    const [appliedInterests, setAppliedInterests] = useState([]);
    const [appliedDept, setAppliedDept] = useState([]);

    let skillOptions = [];
    let interestOptions = [];
    let deptOptions = [];

    for (let i = 0; i < allSkills.length; i++) {
        const skill = allSkills[i];
        skillOptions.push(
            {name: skill, id: skill}
        )
    }

    for (let i = 0; i < allInterests.length; i++) {
        const interest = allInterests[i];
        interestOptions.push(
            {name: interest, id: interest}
        )
    }

    for (let i = 0; i < allDepts.length; i++) {
        const dept = allDepts[i];
        deptOptions.push(
            {name: dept, id: dept}
        )
    }

    function onSelectSkill(selectedList) {
        setAppliedSkills(selectedList)
    }

    function onSelectInterest(selectedList) {
        setAppliedInterests(selectedList)
    }
    function onSelectDept(selectedList) {
        setAppliedDept(selectedList)
    }

    return (
        <FilterContainer>
            <h3>Filters</h3>
            <p className="bold">Skills</p>
            <Multiselect 
                options={skillOptions}
                displayValue="name"
                loadingMessage='Select Skill Filters'
                onSelect={onSelectSkill}
            />
            <p className="bold">Interests</p>
            <Multiselect 
                options={interestOptions}
                displayValue="name"
                onSelect={onSelectInterest}
            />
            <p className="bold">Department</p>
            <Multiselect 
                options={deptOptions}
                displayValue="name"
                onSelect={onSelectDept}
            />
        </FilterContainer>
    )

}