import { useState } from "react";
import styled from "styled-components";
import FilterSelect from "./components/FilterSelect";
// import Multiselect from 'multiselect-react-dropdown';


const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 24px;
    width: 220px;
    padding: 0 24px;
`;

export default function Filters({users, filteredUsers, allSkills, allInterests, allDepts}) {
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

    return (
        <FilterContainer>
            <h3>Filters</h3>
            <p className="bold">Skills</p>
            <FilterSelect options={allSkills} />
            {/* <select>
                <option>Select a filter to apply</option>
                {skillOptions}
            </select> */}
            <p className="bold">Interests</p>
            <FilterSelect options={allInterests} />
            <p className="bold">Department</p>
            <FilterSelect options={allDepts} />

        </FilterContainer>
    )

}