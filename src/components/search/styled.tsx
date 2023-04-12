import styled from "styled-components";
import { StyledProps } from "./types";

export const SearchStyled = styled.input<StyledProps>`
  width: 100%;
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  :focus-visible {
    outline: none;
  }
`;

export const SearchButtonStyled = styled.button<StyledProps>`
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const SearchContainerStyled = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  gap: ${({ theme }) => theme.sizes.xs};
`;
