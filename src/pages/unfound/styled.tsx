import styled from "styled-components";
import { StyledProps } from "./types";

export const UnfoundPAgeStyled = styled.div<StyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ theme: { sizes } }) => sizes.xxl};
  font-size: ${({ theme: { fonts } }) => fonts.size.extraLarge};
  color: ${({ theme: { colors } }) => colors.error};

  @media only screen and (max-width: ${({ theme: { breakpoints } }) => `${breakpoints.m}px`}) {
    font-size: ${({ theme: { fonts } }) => fonts.size.large};
  }
`;
