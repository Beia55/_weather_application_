import styled from "styled-components";
import { StyledProps } from "./types";

export const InfoCardStyled = styled.ul<StyledProps>`
  border-radius: ${({ theme }) => theme.borders.radius.regular};
  padding: ${({ theme: { sizes } }) => sizes.s};
  background: ${({ theme: { colors } }) => colors.success};
  list-style: none;
  p {
    margin: 0;
  }
`;
