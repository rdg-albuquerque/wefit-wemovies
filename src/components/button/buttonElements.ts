import { Variation } from "@/types/color-variation-type"
import styled from "styled-components"

interface IButtonProps {
  variation?: Exclude<Variation, "tertiary">
  maxWidth?: number
}

export const Button = styled.button<IButtonProps>`
  cursor: pointer;
  background-color: ${(props) =>
    props.theme.colors.button[props.variation || "primary"]};
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + "px" : "unset")};
  border-radius: 0.4rem;
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.15rem 0;
`
