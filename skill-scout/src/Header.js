import './App.css'
import { User, PaperPlaneTilt } from "@phosphor-icons/react"
import Button from './components/Button.js'
import styled from 'styled-components';


const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: var(--primary);
  color: white;
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
            <Logo>SkillScout</Logo>
            <SearchBar placeholder="Search..." />
            <LeftButtons>
                <Button type="secondary" icon={User} />
                <Button type="secondary" icon={PaperPlaneTilt} />
                {/* <Button type="secondary" IconComponent={PaperPlaneTilt} /> */}
                {/* <button>Button 1</button>
                <button>Button 2</button> */}
            </LeftButtons>
        </HeaderContainer>
    );
};