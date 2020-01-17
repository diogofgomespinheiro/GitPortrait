import styled from "styled-components";
import theme from "./theme";

const { colors } = theme;

export const Error = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 30px;
    color: ${colors.secondary};
  }
`;
