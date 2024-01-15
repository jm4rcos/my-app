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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s linear;

  transform: ${(props) => `rotate(${props.action}deg)`};

  background-color: transparent;

  cursor: pointer;
`;

const Separator = styled.div`
  /* position: absolute;
  width: 2px;
  height: 51px;
  background-color: #333;
  top: 0%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 14}deg)`}; */
`;

const CircleContainer = styled.div`
    position: relative;
    width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.2s linear;

  transform-origin: bottom center;
  transform: ${(props) => `rotate(${props.angle + props.action}deg) translate(0px, -112px)`};
`
const calculatePosition = (angle) => {
    const radius = 50; // Raio do círculo
    const centerX = 50; // Centro do círculo X
    const centerY = 50; // Centro do círculo Y

    const radians = (angle - 90) * (Math.PI / 180); // Converte graus para radianos
    const x = centerX + radius * Math.cos(radians);
    const y = centerY + radius * Math.sin(radians);

    return { x, y };
};

const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: transparent;
  border-radius: 50%;

  position: absolute;
  transform: translate(${(props) => calculatePosition(props.angle).x - 25}px, ${(props) =>
        calculatePosition(props.centre).y}px) rotate(30deg);
`;

const CircleText = styled.div`
    width: 30%;
    position: absolute;
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.selected ? '#f7A400' : "#333"};
    ${(props) => props.top && `top: ${props.top}`};

    ${(props) => props.rotate && `transform: rotate(${props.rotate});`}
    ${(props) => props.left && `left: ${props.left}`};
`;

const CircleSubText = styled.p`
    font-size: 8px;
    color: ${(props) => props.selected ? '#f7A400' : "#333"};
    position: absolute;
    ${(props) => props.top && `top: ${props.top}`};
    ${(props) => props.left && `left: ${props.left}`};
    ${(props) => props.rotate && `transform: rotate(${props.rotate});`}
`;

const Diagrama5 = ({ action, selected, onSelect }) => {
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

    const circles = [
        { label: "BC", angle: -8, centre: '-10', top: '3px', left: '10%', rotate: '-43deg' },
        { label: "C#D", angle: 20, centre: '30', top: '-1px', left: '42%', rotate: '16deg' },
        { label: "D#E", angle: 28, centre: '68', top: '10px', left: '70%', rotate: '73deg' },
        { label: "FF#", angle: 7, centre: '88', top: '31px', left: '62%', rotate: '133deg' },
        { label: "GG#", angle: -20, centre: '82', top: '36px', left: '25%', rotate: '203deg' },
        { label: "AA#", angle: -29, centre: '50', top: '24px', left: '0%', rotate: '265deg' },
        { label: "", angle: 0, centre: '60' },
    ]

    const subtexts = [
        { label: "Bb", top: '29px', left: '21px', rotate: '-59deg' },
        { label: "Cb", top: '20px', left: '29px', rotate: '-30deg' },
        { label: "Db", top: '19px', left: '56.5px', rotate: '21deg' },
        { label: "Eb", top: '42px', left: '74px', rotate: '82deg' },
        { label: "Fb", top: '61px', left: '69px', rotate: '122deg' },
        { label: "Gb", top: '73px', left: '43px', rotate: '187deg' },
        { label: "Ab", top: '57px', left: '19px', rotate: '-115deg' }
    ]

    return (
        <Container onClick={onSelect}>
            <Wrapper action={action} selected={selected}>
                {line1.map((line) => (
                    <React.Fragment key={line.angle}>
                        <Separator angle={line.angle} />
                    </React.Fragment>
                ))}
                <CircleContainer>
                    {circles.map((circle) => (
                        <Circle key={circle.label} centre={circle.centre} angle={circle.angle}>
                            <CircleText rotate={circle.rotate} left={circle.left} top={circle.top} selected={selected}>{circle.label}</CircleText>
                            <CircleSubText selected={selected}>
                            </CircleSubText>
                        </Circle>
                    ))}
                    {subtexts.map((sub, index) => (
                        <CircleSubText selected={selected} rotate={sub.rotate} left={sub.left} top={sub.top} key={index}>{sub.label}</CircleSubText>
                    ))}
                </CircleContainer>
            </Wrapper>
        </Container >
    );
};

export default Diagrama5;
