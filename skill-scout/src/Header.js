import './App.css'
import { User, PaperPlaneTilt } from "@phosphor-icons/react"
import Button from './components/Button.js'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--primary);
  color: white;
  position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0px 11px 20px rgba(5, 16, 55, 0.1);
`;

const Logo = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    margin: 0;
    // padding: 0;
`;

const SearchBar = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 400px;
  background-color: #eee;
`;

const LeftButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export default function Header() {

    return (
        <HeaderContainer>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Logo style={{ color: 'white'}}>SkillScout</Logo>
            </Link>
            <SearchBar placeholder="Search..." />
            <LeftButtons>
                <Link to="/profile-page">
                    <Button type="secondary" icon={User} />
                </Link>
                <Button type="secondary" icon={PaperPlaneTilt} />
                {/* <Button type="secondary" IconComponent={PaperPlaneTilt} /> */}
                {/* <button>Button 1</button>
                <button>Button 2</button> */}
            </LeftButtons>
        </HeaderContainer>
    );
};