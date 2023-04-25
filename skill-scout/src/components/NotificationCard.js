import React from "react"
import styled from "styled-components";
import Tab from "../Tab";
import Button from "./Button";
const ProfileCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;

width: 801px;
height: 320px;

/* Default/White */

background: #FFFFFF;
/* Box Shadows/Small */

box-shadow: 0px 11px 20px rgba(5, 16, 55, 0.1);
border-radius: 8px;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;

const TopProfile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    gap: 96px;

    width: 753px;
    height: 80px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
`;

const PicNameTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 24px;

    width: 267px;
    height: 80px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    width: 163px;
    height: 60px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;
const SkillsRequested = styled.div `
    width: 319px;
    height: 58px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`
const Skills = styled.div`
    width: 319px;
    height: 58px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 63px;

    width: 753px;
    height: 160px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
`;

const Request = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;

    width: 507px;
    height: 160px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 1;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;

    width: 183px;
    height: 49px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
`;

export default function NotificationCard({requester, message, skills}) {
//requester -> {profilepic: "", name: }
    let skillElements = []
    for (let i = 0; i < skills.length; i++) {
        const skill = skills[i];
        skillElements.push(
            //TODO set div width and spacing between
            <Tab 
                deletable={false}
                text={skill}
            />
        )
    }

    return(
        <ProfileCardContainer>
            <TopProfile>
                <PicNameTitle>
                    <img src={requester.profilePic}></img>
                    <NameTitle>
                        <h2>{requester.name}</h2>
                        <p>{requester.title}</p>
                    </NameTitle>
                    <SkillsRequested>
                        <Skills>
                            <h3>Skills requested from you:</h3>
                            {skillElements}
                        </Skills>
                    </SkillsRequested>
                </PicNameTitle>
            </TopProfile>
            <BottomProfile>
                <Request>
                    <h3>Request Description</h3>
                    <p>{message}</p>
                </Request>
                <Buttons>
                    <Button text="Confirm"/>
                    <Button text="Reply" type='secondary'/>
                </Buttons>
            </BottomProfile>
        </ProfileCardContainer>
    )
}