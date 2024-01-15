import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  border-radius: 50%;
  cursor: pointer;

  transition: all 0.2s linear;

  z-index: 30;
  `;

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border: 2px solid #333;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  
    cursor: pointer;
`;

const Title = styled.div`
  width: 30%;
  color: ${(props) => props.selected ? '#f7A400' : "#333"};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 35%;
  transition: all 0.2s linear;
  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.angle + props.action}deg) translate(0px, -155px)`};

  & > span {
    font-size: 16px;
    font-weight: normal;
  }
`;

const Separator = styled.div`
  position: absolute;
  width: 2px;
  height: 150px;
  background-color: #333;
  top: 0%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 15}deg)`};
`;

const Diagrama3 = ({ action, selected, onSelect }) => {
  const line1 = [
    { label: "Xm7M", sub: "9 11 13", angle: 0 },
    { label: "-", sub: "-", angle: 30 },
    { label: "Xm7", sub: "9b 11 13", angle: 60 },
    { label: "X7M(5+)", sub: "9 11+ 13", angle: 90 },
    { label: "-", sub: "-", angle: 120 },
    { label: "X7", sub: "9 11+ 13", angle: 150 },
    { label: "-", sub: "-", angle: 180 },
    { label: "X7", sub: "9 11 13b", angle: 210 },
    { label: "-", sub: "-", angle: 240 },
    { label: "Xø", sub: "9 11 13b", angle: 270 },
    { label: "-", sub: "-", angle: 300 },
    { label: "Xø", sub: "9b 11 13b", angle: 330 },
  ];

  return (
    <Container>
      <Wrapper selected={selected} onClick={onSelect} >
        {line1.map((line) => (
          <React.Fragment key={line.angle}>
            <Title selected={selected} action={action} angle={line.angle}>
              {line.label}
              <span>{line.sub}</span>
            </Title>
            <Separator selected={selected} angle={line.angle} />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Diagrama3;
