import React from "react";
import styled from "styled-components";
import NotificationCard from "./components/NotificationCard";
import Header from "./Header";
import profilePictures from './img/profilePictures';
const NotificationCardContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    justifyContent: center;
    width: 80%;
    margin: auto;
`;

//requests: {requester: "", message: "", skills: []}
export default function InboxPage({requests}) {
    let notificationElements = [];
    for (let i = 0; i < requests.length; i++) {
        notificationElements.push(
            <NotificationCard
                request={requests[i]}
                handleConfirm={handleConfirm}
            />
        )
    }

    function handleConfirm(message) {
        let index;
        for (let i = 0; i < requests.length; i++) {
            if (requests[i].message === message) {
                index = i;
            }
        }
        delete requests[index];
    }

    return(
        <div>
            <Header/>
            <div style={{textAlign: "center"}}>
                <h1>Inbox</h1>
                <p>Manage all of your messages, requests, and notifications</p>
            </div>
            <NotificationCardContainer>
                {notificationElements}
            </NotificationCardContainer>
        </div>

    )
}