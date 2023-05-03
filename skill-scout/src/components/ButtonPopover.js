import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Popover from './Popover';
import { toast } from 'react-toastify';

const Container = styled.div`
    position: relative;
    display: inline-block;
`;

const ButtonPopover = ({ type = 'primary', icon: IconComponent, text, allSkills }) => {
    const [isPopoverVisible, setIsPopoverVisible] = useState(false);

    const handleButtonClick = () => {
        setIsPopoverVisible(!isPopoverVisible);
    };

    const handleClose = () => {
        setIsPopoverVisible(false);
        console.log('close');
    };

    const handleSubmit = () => {
        setIsPopoverVisible(false);
        console.log('submit');
        toast.success('Your request was submitted.', {
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <Container>
            <Button type={type} icon={IconComponent} text={text} onClick={handleButtonClick} />
            {isPopoverVisible && <Popover onClose={handleClose} onSubmit={handleSubmit} allSkills={allSkills} />}
        </Container>
    );
};

export default ButtonPopover;
