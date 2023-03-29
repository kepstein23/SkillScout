import React from "react";
import styled from "styled-components";

const SkillBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    gap: 4px;
`;

const SkillBarTitle = styled.div`
    margin: 0px;
    padding: 0px;
`;

const SkillBarProgress = styled.div`
    background-color: var(--medium-green);
    border-radius: 5px;
    width: ${props => props.width};
    height: 8px;
`;

export default function SkillBar({ title, width }) {
    return (
        <SkillBarContainer>
            <SkillBarTitle>{title}</SkillBarTitle>
            <SkillBarProgress width={width} />
        </SkillBarContainer>
    );
}