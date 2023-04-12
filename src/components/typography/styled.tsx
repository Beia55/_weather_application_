import styled from "styled-components";
import { StyledProps } from "./types";

export const TypographyStyled = styled.p<StyledProps>`
  color: ${({ color }) => color};
`;

export const LabelStyled = styled.label<StyledProps>`
  color: ${({ color }) => color};
`;
