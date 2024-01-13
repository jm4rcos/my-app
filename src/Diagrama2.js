import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;

  border-radius: 50%;
  cursor: pointer;
  z-index: 20;
`;

const Wrapper = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
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
  color: ${(props) => props.selected ? '#69C050' : "#333"};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  font-size: 18px;
  font-weight: bold;
  top: 39%;
  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.angle + props.action}deg) translate(0px, -205px)`};

  & > span {
    font-size: 16px;
    font-weight: normal;
  }
`;

const Separator = styled.div`
  position: absolute;
  width: 1px;
  height: 200px;
  background-color: #333;
  top: 0%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 15}deg)`};
`;

const Diagrama2 = ({ action, selected, onSelect }) => {
  const line1 = [
    { label: "X7M", sub: "9 11 13", angle: 0 },
    { label: "-", sub: "-", angle: 30 },
    { label: "Xm7", sub: "9 11 13", angle: 60 },
    { label: "-", sub: "-", angle: 90 },
    { label: "Xm7", sub: "9b 11 13b", angle: 120 },
    { label: "X7M", sub: "9 11+ 13", angle: 150 },
    { label: "-", sub: "-", angle: 180 },
    { label: "X7", sub: "9 11 13", angle: 210 },
    { label: "-", sub: "-", angle: 240 },
    { label: "Xm7", sub: "9 11 13b", angle: 270 },
    { label: "-", sub: "-", angle: 300 },
    { label: "Xø", sub: "9b 11 13b", angle: 330 },
  ];

  return (
    <Container selected={selected}>
      <Wrapper onClick={onSelect}>
        {line1.map((line) => (
          <React.Fragment key={line.angle}>
            <Title selected={selected} action={action} angle={line.angle}>
              {line.label}
              <span>{line.sub}</span>
            </Title>
            <Separator className='separator' angle={line.angle} />
          </React.Fragment>
        ))}
      </Wrapper>
    </Container >
  );
};

export default Diagrama2;
