import styled from "styled-components";
import { StyledProps } from "./types";

export const ContainerStyled = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.sizes.l};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    flex-direction: column;
  }

  @media only screen and (min-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    section:first-child {
      width: 40%;
    }

    section:last-child {
      width: calc(60% - ${({ theme }) => theme.sizes.l});
    }
  }
`;

export const FlexContainer = styled.div<StyledProps>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.sizes.xs};
`;

export const DatepickerStyled = styled.input<StyledProps>`
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  :focus-visible {
    outline: none;
  }
`;

export const AddToFavoritesButtonStyled = styled.button<StyledProps>`
  padding: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;
