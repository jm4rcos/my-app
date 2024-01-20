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
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 0.2s linear;

  transform: ${(props) => `rotate(${props.action}deg)`};

  background-color: transparent;

  cursor: pointer;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    z-index: 0;
    border-radius: 50%;
    background-color: #fff;
  }
`;

const Diagrama6 = () => {
  return (
    <Container>
      <Wrapper>
        <img
          src="/triangulo.svg"
          alt='diagrama'
        />
      </Wrapper>
    </Container >
  );
};

export default Diagrama6;
