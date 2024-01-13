import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  border-radius: 50%;

  z-index: 40;
`;

const Wrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.selected ? '#fde68a' : "white"};

  cursor: pointer;
`;

const Title = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  top: 31%;
  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.angle + props.action}deg) translate(0px, -112px)`};

  & > span {
    font-size: 12px;
    font-weight: 500;
  }
`;

const Separator = styled.div`
  position: absolute;
  width: 1px;
  height: 100px;
  background-color: #333;
  top: 0%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 15}deg)`};
`;

const Diagrama4 = ({ action, selected, onSelect }) => {
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
    <Container onClick={onSelect}>
      <Wrapper selected={selected}>
        {line1.map((line) => (
          <React.Fragment key={line.angle}>
            <Title action={action} angle={line.angle}>
              {line.label}
              <span>{line.sub}</span>
            </Title>
            <Separator angle={line.angle} />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Diagrama4;