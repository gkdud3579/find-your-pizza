import React from 'react'
import styled, { keyframes } from 'styled-components'

const ImageSrc = 'Image/pizzaIcon.png'

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1));


const snowAnimation = keyframes`
  0% {
    transform: translateY(-100vh) rotate(0deg);
  }
  100% {
    transform: translateY(100vh) rotate(1080deg);
  }
`;

const Snow = styled.div`
  top: ${props => props.top};
  left: ${props => props.left};
  width: 30px;
  height: 30px;
  
  background-image: url(${ImageSrc});
  background-size: contain; /* 이미지 크기에 맞게 조정 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  position: absolute;
  z-index: 0;
  animation: ${snowAnimation} ${props => props.animationDuration}s linear infinite;
`;


const snowflakes = Array.from({ length: 15 }).map((_, index) => {
  const intervalWidth = window.innerWidth / 3;
  const intervalHeight = window.innerHeight / 3;

  const middleIntervalStartX = intervalWidth;
  const middleIntervalEndX = intervalWidth * 2;
  const middleIntervalStartY = intervalHeight;
  const middleIntervalEndY = intervalHeight * 2;

  const left = getRandomValue(middleIntervalStartX, middleIntervalEndX) + 'px';
  const top = getRandomValue(middleIntervalStartY, middleIntervalEndY) + 'px';

  const animationDuration = Math.random() * 15 + 10;
  return (
    <Snow key={index} top={top} left={left} animationDuration={animationDuration} />
  );
});

const PizzaFlakes = () => {
  return snowflakes;
}

export default PizzaFlakes
