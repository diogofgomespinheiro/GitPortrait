import styled, { css, keyframes } from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const shine = (firstPosition, secondPosition) => keyframes`
  0% {
    background-position: ${`-${firstPosition}px`};
  }
  
  40%, 100% {
    background-position: ${`${secondPosition}px`};
  }
`;

export const backgroundGradient = css`
  background-image: linear-gradient(90deg, #ddd 0px, #fff 40px, #ddd 80px);
  background-size: 600px;
`;

export const Container = styled.div`
  height: 100%;
  display:flex;

  div {
    margin: 50px auto 0 auto;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: ${colors.secondary};
  text-align: center;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 10px 10px;
  border: none;
  border-radius: 10px;
  outline: 0;
  font-size: 24px;
`;
