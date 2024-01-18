import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    flex-direction: column;

    position: relative;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px #000 solid;
    background-color: #333;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
`

export const DiagramContainer = styled.div`
   @media (max-width: 600px) {
       transform: rotate(15deg) scale(0.8);
   }

   @media (max-width: 460px) {
       transform: rotate(15deg) scale(0.7);
   }

    height: 100%;
    max-height: 500px;
    max-width: 600px;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;
    transform: rotate(15deg);
`

export const ActionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }
`

export const DiagramTitle = styled.p`
    font-size: 26px;
    font-weight: bold;
    color: #f7A400;
`
