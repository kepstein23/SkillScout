import './App.css'
import {PaperPlaneTilt, User} from "@phosphor-icons/react"

export default function Header() {

    return(
        <div class="header">
            <h1>SkillScout</h1>
            <input></input>
            <div style={{display:"flex"}}>
                <button><PaperPlaneTilt/></button>
                <button><User/></button>
            </div>
            
            <img></img>
        </div>
    )
    
}