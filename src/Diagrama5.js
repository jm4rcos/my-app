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
  border: 1px solid #333;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: scale(2);

  background-color: #fff;

  cursor: pointer;
`;

const Separator = styled.div`
  position: absolute;
  width: 0.5px;
  height: 50px;
  background-color: #333;
  top: 0%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: ${(props) => `rotate(${props.angle + 15}deg)`};
`;

const CircleContainer = styled.div`
    position: relative;
    width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
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
  height: 49px;
  width: 49px;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 50%;

  position: absolute;
  transform: translate(${(props) => calculatePosition(props.angle).x - 25}px, ${(props) =>
        calculatePosition(props.centre).y}px) rotate(30deg);
`;

const CircleText = styled.p`
    width: 30%;
    position: absolute;
    font-size: 10px;
    font-weight: 500;
    color: ${(props) => props.selected ? '#69C050' : "#333"};
    ${(props) => props.top && `top: ${props.top}`};

    ${(props) => props.rotate && `transform: rotate(${props.rotate});`}
    ${(props) => props.left && `left: ${props.left}`};

    /* transform-origin: bottom center; */
    /* transform: ${(props) => `rotate(${props.angle + props.action}deg) translate(0px, -22px)`};

    & > span {
        font-size: 12px;
        font-weight: 500;
    } */
`;

const CircleSubText = styled.span`
    font-size: 8px;
    color: ${(props) => props.selected ? '#69C050' : "#333"};
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
        { sub: "Bb Cb", label: "BC", angle: -8, centre: -10, top: '-6px', left: '10%', rotate: '-43deg' },
        { sub: "Db", label: "C#D", angle: 20, centre: 30, top: '-10px', left: '42%', rotate: '16deg' },
        { sub: "Eb", label: "D#E", angle: 28, centre: 68, top: '1px', left: '70%', rotate: '73deg' },
        { sub: "Fb", label: "FF#", angle: 7, centre: 88, top: '21px', left: '62%', rotate: '133deg' },
        { sub: "Gb", label: "GG#", angle: -20, centre: 82, top: '27px', left: '25%', rotate: '203deg' },
        { sub: "Ab", label: "AA#", angle: -29, centre: 50, top: '15px', left: '0%', rotate: '255deg' },
        { label: "", angle: 0, centre: 60 },
    ]

    return (
        <Container onClick={onSelect}>
            <Wrapper selected={selected}>
                {line1.map((line) => (
                    <React.Fragment key={line.angle}>
                        {/* <Title selected={selected} action={action} angle={line.angle}>
                            {line.label}
                            <span>{line.sub}</span>
                        </Title> */}
                        <Separator angle={line.angle} />
                    </React.Fragment>
                ))}
                <CircleContainer>
                    {circles.map((circle) => (
                        <Circle key={circle.label} centre={circle.centre} angle={circle.angle}>
                            <CircleText rotate={circle.rotate} left={circle.left} top={circle.top} action={action} selected={selected}>{circle.label}</CircleText>
                            <CircleSubText selected={selected}>
                                {circle.sub}
                            </CircleSubText>
                        </Circle>
                    ))}
                </CircleContainer>
            </Wrapper>
        </Container>
    );
};

export default Diagrama5;
