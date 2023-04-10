import SearchBar from "./SearchBar";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from "./Button";

export function MainSearch({handleSearch}) {
    const Logo = styled.h1`
    font-size: 7rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    // padding: 0;
    
    `;

    console.log(document.getElementById('header-search'))
    return (
        <div style={{marginTop: "15%"}}>
            <div onClick={handleSearch}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Logo style={{ color: '#3424C6'}}>SkillScout</Logo>
                </Link>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <SearchBar id={"main-search"} style={{width: "70%", height: "30px", backgroundColor: "white", marginRight: "30px"}} onSearch={() => {}}/>
                <Button onClick={handleSearch} text={"Go"}/>
            </div>
            
        </div>
    )
}