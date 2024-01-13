import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    border: 2px orangered solid;
    background-color: orange;
    color: #000;
    font-weight: bold;
    cursor: pointer;
`

export const ActionContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    bottom: 50px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }
`

export const DiagramTitle = styled.p`
    font-size: 26px;
    font-weight: bold;
    color: darkcyan;
`
