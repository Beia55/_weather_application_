import styled from "styled-components";
import { SpinnerStyledProps } from "./types";

export const SpinnerBoxStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerStyled = styled.div<SpinnerStyledProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border: 4px solid ${({ color, theme }) => color ?? theme.colors.primary};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
