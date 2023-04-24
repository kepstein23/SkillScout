import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 80%;
  height: 20px;
  margin: 0 auto;
  background: #ddd;
  border-radius: 10px;
  position: relative;
`;

const SliderTrack = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #4caf50;
  border-radius: 10px;
`;

const SliderThumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #4caf50;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 1;
`;

const SliderRange = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  position: absolute;
  top: 0;
  left: ${(props) => props.left};
  background: #4caf50;
  border-radius: ${(props) =>
    props.isLeft ? "10px 0 0 10px" : "0 10px 10px 0"};
  z-index: 0;
`;

const Slider = () => {
  const [leftPos, setLeftPos] = useState(0);
  const [rightPos, setRightPos] = useState(80);
  const [isMovingLeftThumb, setIsMovingLeftThumb] = useState(false);
  const [isMovingRightThumb, setIsMovingRightThumb] = useState(false);

  const handleLeftThumbDragStart = () => {
    setIsMovingLeftThumb(true);
  };

  const handleLeftThumbDragEnd = () => {
    setIsMovingLeftThumb(false);
  };

  const handleRightThumbDragStart = () => {
    setIsMovingRightThumb(true);
  };

  const handleRightThumbDragEnd = () => {
    setIsMovingRightThumb(false);
  };

  const handleDrag = (e) => {
    const newLeftPos = e.clientX - e.target.getBoundingClientRect().left;
    if (newLeftPos < 0) {
      setLeftPos(0);
      setRightPos(80);
    } else if (newLeftPos > rightPos - 20) {
      setLeftPos(rightPos - 20);
    } else {
      setLeftPos(newLeftPos);
    }
  };

  const handleRightDrag = (e) => {
    const newRightPos = e.clientX - e.target.getBoundingClientRect().left;
    if (newRightPos > 80) {
      setRightPos(80);
      setLeftPos(0);
    } else if (newRightPos < leftPos + 20) {
      setRightPos(leftPos + 20);
    } else {
      setRightPos(newRightPos);
    }
  };

  const sliderWidth = `${rightPos - leftPos}px`;
  const leftWidth = `${leftPos}px`;
  const rightWidth = `${80 - rightPos}px`;

  const outOfRangeBackground = isMovingLeftThumb
    ? `linear-gradient(to right, #f5f5f5 ${leftPos}px, #ddd ${rightPos}px)`
    : isMovingRightThumb
    ? `linear-gradient(to left, #f5f5f5 ${80 - rightPos}px, #ddd ${leftPos}px)`
    : "none";

  return (
    <SliderContainer
    onMouseMove={(e) => {
        if (isMovingLeftThumb) {
          handleDrag(e);
        }
        if (isMovingRightThumb) {
          handleRightDrag(e);
        }
      }}
      onMouseUp={() => {
        handleLeftThumbDragEnd();
        handleRightThumbDragEnd();
      }}
    >
      <SliderTrack />
      <SliderRange width={sliderWidth} left={leftWidth} isLeft={true} />
      <SliderRange width={rightWidth} left={`${rightPos}px`} />
      <SliderThumb
        style={{ left: `${leftPos}px` }}
        onMouseDown={handleLeftThumbDragStart}
      />
      <SliderThumb
        style={{ left: `${rightPos - 20}px` }}
        onMouseDown={handleRightThumbDragStart}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          background: outOfRangeBackground,
        }}
      />
    </SliderContainer>
  );
};

export default Slider;
