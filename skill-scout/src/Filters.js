import { useState } from "react";

export default function Filters({users, filteredUsers}) {
    const [appliedSkills, setAppliedSkills] = useState([]);
    const [appliedInterests, setAppliedInterests] = useState([]);
    const [appliedDept, setAppliedDept] = useState([]);

    return (
        <div>
            <h1>Filters</h1>
            <h2>Skills</h2>
            <select>
                
            </select>
            <h2>Interests</h2>
            <select>

            </select>
            <h2>Department</h2>
            <select>
                <option></option>
                <option>Frontend</option>
                <option>Design</option>
            </select>
        </div>
        

    )

}