import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  cursor: pointer;

  border-radius: 50%;
  
  z-index: 10;
`;

const Wrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
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
  position: absolute;
  color: #333;
  font-size: 20px;
  font-weight: bold;
  top: 45%;
  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.angle + 0}deg) translate(0px, -270px)`};
`;

const Separator = styled.div`
  position: absolute;
  width: 2px;
  height: 300px;
  background-color: #333;
  top: -10%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 15}deg)`};
`;

const Diagrama1 = ({ action, selected, onSelect }) => {
  const line1 = [
    { label: "1/8", angle: 0 },
    { label: "2b", angle: 30 },
    { label: "2", angle: 60 },
    { label: "2+/3b", angle: 90 },
    { label: "3/4b/11b", angle: 120 },
    { label: "4", angle: 150 },
    { label: "4+/11+/5b", angle: 180 },
    { label: "5", angle: 210 },
    { label: "5+/6b/13b", angle: 240 },
    { label: "6", angle: 270 },
    { label: "7b", angle: 300 },
    { label: "7", angle: 330 },
  ];

  return (
    <Container>
      <Wrapper selected={selected} onClick={onSelect}>
        {line1.map((line) => (
          <React.Fragment key={line.angle}>
            <Title action={action} angle={line.angle}>{line.label}</Title>
            <Separator angle={line.angle} />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Diagrama1;
