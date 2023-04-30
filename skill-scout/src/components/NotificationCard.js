import React, { useState } from "react"
import styled from "styled-components";
import Tab from "../Tab";
import Button from "./Button";
import ReplyPopover from "./ReplyPopover";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProfileCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 24px;
gap: 32px;

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
    gap: 48px;
    width: 100%;
`;

const PicNameTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 18px;

    width: 100%;
    // height: 100px;
`;

const NameTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 2px;

    // max-width: 408px;
    // height: 68px;
`;


const SkillsRequested = styled.div `
    width: 100%;
`;
const Skills = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 12px;
    flex-wrap: wrap;
`;

const BottomProfile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 63px;
`;

const Request = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 4px;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 16px;
`;

export default function NotificationCard({request}) {
//requester -> {profilepic: "", name: }
const requester = request.requester
const message = request.message
const skills = request.skills
const [visible, setVisible] = useState(true);
const [popoverVisible, setPopoverVisible] = useState(false);

console.log(requester.title)
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

    function handleConfirm() {
        setVisible(false);
        toast.success(`${requester.name} will be notified that you accept their request`, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    }

    function handleReply() {
        toast.success(`Email has been sent to ${requester.name}.`, {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
        setPopoverVisible(false);
    }

    function handleClose() {
        setPopoverVisible(false);
    }

    return(
    <div>
        {visible && <ProfileCardContainer>
            <TopProfile>
                <PicNameTitle>
                    <img class="profile-pic" src={requester.profilePic}></img>
                    <NameTitle>
                        <h2 style={{ margin: 0 }}>{requester.name}</h2>
                        <p style={{ margin: 0 }} >{requester.title}</p>
                    </NameTitle>
                </PicNameTitle>
                <SkillsRequested>
                    <h3>Skills requested from you:</h3>
                    <Skills> 
                        {skillElements}
                    </Skills>
                </SkillsRequested>
            </TopProfile>
            <BottomProfile>
                <Request>
                    <h3>Request Description</h3>
                    <p>{message}</p>
                </Request>
                <Buttons>
                    <Button text="Confirm" onClick={handleConfirm}/>
                    <Button text="Reply" type='secondary' onClick={() => setPopoverVisible(true)}/>
                    {popoverVisible && <ReplyPopover onClose={handleClose} onSubmit={handleReply} requester={requester.name}/>}
                </Buttons>
            </BottomProfile>
        </ProfileCardContainer>}
        <ToastContainer limit={1}/>
    </div>
    )
}