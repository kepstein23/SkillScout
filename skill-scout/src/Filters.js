import { useState } from "react";
import Multiselect from 'multiselect-react-dropdown';

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

    function handleSelect(type) {
        if (type === "skill") {
            setAppliedSkills(appliedSkills)
        }
    }

    return (
        <div>
            
            <h1>Filters</h1>
            <h2>Skills</h2>
            <Multiselect 
                options={skillOptions}
                displayValue="name"
                loadingMessage='Select Skill Filters'
                onSelect={handleSelect("skill")}
            />
            <h2>Interests</h2>
            <Multiselect 
                options={interestOptions}
                displayValue="name"
            />
            <h2>Department</h2>
            <Multiselect 
                options={deptOptions}
                displayValue="name"
            />
        </div>
        

    )

}