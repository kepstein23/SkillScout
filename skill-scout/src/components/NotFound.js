//display an image not-found.png and a message
import React from 'react';
import styled from 'styled-components';
import notFound from '../img/not-found.png';

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 12px;
    margin-top: 200px;
    margin-left: 750px;
`;

const NotFoundImage = styled.img`
    width: 100px;
    height: 100px;
`;

const NotFoundText = styled.p`
    font-size: 18px;
    font-weight: bold;

    color: #4F4F4F;
`;

export default function NotFound() {
    return (
        <NotFoundContainer>
            <NotFoundImage src={notFound} alt="not-found"/>
            <NotFoundText>No results</NotFoundText>
        </NotFoundContainer>
    )
}


