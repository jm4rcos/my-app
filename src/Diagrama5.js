import styled from "styled-components";

const Container = styled.div`
    /* background-color: crimson; */
    position: absolute;

    z-index: 100;

    height: 200px;
    width: 200px;
    border-radius: 50%;

    display: flex;
    /* align-items: center; */
    justify-content: center;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: bold;
    position: absolute;
    top: 0;
    ${(props) => props.right && `right: ${props.right}px;`}
    ${(props) => props.top && `top: ${props.top}px;`}
    ${(props) => props.rotate && `transform: rotate(${props.rotate}deg);`}
    

    /* ${(props) => props.top && `top: ${props.top}`};
    ${(props) => props.rotate && `transform: rotate(${props.rotate});`}
    ${(props) => props.left && `left: ${props.left}`}; */
`

const titles = [
    { label: "F#", right: 90, top: 172, rotate: 180 },
    { label: "G", right: 135, top: 163, rotate: 210 },
    { label: "G#", right: 163, top: 130, rotate: 240 },
    { label: "A", right: 180, top: 90, rotate: 270 },
    { label: "A#", right: 163, top: 42, rotate: 300 },
    { label: "B", right: 135, top: 10, rotate: 330 },
    { label: "C", right: 0, top: 0, rotate: 0 },
    { label: "C#", right: 42, top: 14, rotate: 30 },
    { label: "D", right: 18, top: 42, rotate: 60 },
    { label: "D#", right: 1, top: 90, rotate: 90 },
    { label: "E", right: 18, top: 130, rotate: 120 },
    { label: "F", right: 52, top: 163, rotate: 150 },
]


const Diagrama1 = ({ action }) => {
    return (
        <Container>
            {titles.map((title) => (
                <Title rotate={title.rotate} top={title.top} right={title.right}>{title.label}</Title>
            ))}
        </Container>
    )
}

export default Diagrama1;