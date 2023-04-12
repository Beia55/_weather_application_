import styled from "styled-components";
import { SelectStyledProps } from "./types";

export const SelectStyled = styled.select<SelectStyledProps>`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  :focus-visible {
    outline: none;
  }
`;
