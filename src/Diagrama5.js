import styled from "styled-components";

const Container = styled.div`
    /* background-color: crimson; */
    position: absolute;

    z-index: 100;

    height: 200px;
    width: 200px;
    border-radius: 50%;

    display: flex;
    justify-content: center;
    transition: all 0.2s linear;
    cursor: pointer;
    ${(props) => props.action && `transform: rotate(${props.action}deg);`}
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    cursor: pointer;
    top: 0;
    color: ${(props) => props.selected ? '#f7A400' : "#333"};
    ${(props) => props.right && `right: ${props.right}px;`}
    ${(props) => props.top && `top: ${props.top}px;`}
    ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
`
const Subtext = styled.p`
    font-size: 14px;
    font-weight: bold;
    position: absolute;
    top: 0;
    color: ${(props) => props.selected ? '#f7A400' : "#333"};
    ${(props) => props.right && `right: ${props.right}px;`}
    ${(props) => props.top && `top: ${props.top}px;`}
    ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
`


const titles = [
    { label: "F#", right: 90, top: 172, rotate: 180 },
    { label: "G", right: 135, top: 163, rotate: 210 },
    { label: "G#", right: 163, top: 130, rotate: 240 },
    { label: "A", right: 180, top: 90, rotate: 270 },
    { label: "A#", right: 163, top: 42, rotate: 300 },
    { label: "B", right: 136, top: 13, rotate: 330 },
    { label: "C", right: 0, top: 0, rotate: 0 },
    { label: "C#", right: 42, top: 14, rotate: 30 },
    { label: "D", right: 18, top: 42, rotate: 60 },
    { label: "D#", right: 1, top: 90, rotate: 90 },
    { label: "E", right: 18, top: 130, rotate: 120 },
    { label: "F", right: 52, top: 163, rotate: 150 },
]

const subtexts = [
    { label: "Cb", right: 125, top: 35, rotate: 330 },
    { label: "Db", right: 55, top: 35, rotate: 30 },
    { label: "Eb", right: 25, top: 91, rotate: 90 },
    { label: "Fb", right: 35, top: 125, rotate: 125 },
    { label: "Gb", right: 90, top: 155, rotate: 180 },
    { label: "Ab", right: 148, top: 125, rotate: 240 },
    { label: "Bb", right: 150, top: 58, rotate: 300 },
]


const Diagrama1 = ({ onSelect, selected, action }) => {
    return (
        <Container action={action} onClick={onSelect}>
            {titles.map((title) => (
                <Title selected={selected} rotate={title.rotate} top={title.top} right={title.right}>{title.label}</Title>
            ))}
            {subtexts.map((sub) => (
                <Subtext selected={selected} right={sub.right} top={sub.top} rotate={sub.rotate}>{sub.label}</Subtext>
            ))}
        </Container>
    )
}

export default Diagrama1;