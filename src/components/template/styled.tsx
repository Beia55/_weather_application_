import styled from "styled-components";
import { StyledProps } from "./types";

export const TemplateStyled = styled.div<StyledProps>`
  background: ${({ theme }) => theme.colors.neutral};
  padding: ${({ theme }) => theme.sizes.m};
  height: auto;
  min-height: 100%;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    padding: ${({ theme }) => theme.sizes.xs};
  }
`;

export const NavigationStyled = styled.nav<StyledProps>`
  display: flex;
  justify-contetnt: center;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.s};
  padding: ${({ theme }) => theme.sizes.s};
  border: ${({ theme: { borders } }) => `${borders.width.small} ${borders.style.solid}`};
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  background: ${({ theme }) => theme.colors.neutral};
  margin-bottom: ${({ theme }) => theme.sizes.l};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    margin-bottom: ${({ theme }) => theme.sizes.s};
  }
`;

export const AppTitleStyled = styled.h1<StyledProps>`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme: { fonts } }) => fonts.size.large};
  margin: 0;

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    font-size: ${({ theme: { fonts } }) => fonts.size.regular};
  }
`;

export const ActionBoxStyled = styled.h1<StyledProps>`
  width: 10rem;
  margin: 0 0 0 auto;
`;
