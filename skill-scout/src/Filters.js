import { useState } from "react";

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
        <div>
            <h1>Filters</h1>
            <h2>Skills</h2>
            <select>
                <option>Select a filter to apply</option>
                {skillOptions}
            </select>
            <h2>Interests</h2>
            <select>
                <option>Select a filter to apply</option>
                {interestOptions}
            </select>
            <h2>Department</h2>
            <select>
                <option>Select a filter to apply</option>
                {deptOptions}
            </select>
        </div>
        

    )

}