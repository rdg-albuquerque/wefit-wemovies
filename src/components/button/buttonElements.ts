import { ComponentProps } from "react"
import { Variation } from "@/styles/theme/types/color-variation"
import styled from "styled-components"

interface ButtonProps {
  variation?: Exclude<Variation, "tertiary">
  maxWidth?: number
}

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.theme.colors.button[props.variation] ||
    props.theme.colors.button.primary};
  width: 100%;
  max-width: ${(props) => props.maxWidth + "px" || "unset"};
  border-radius: 0.4rem;
  color: ${(props) => props.theme.colors.text.primary};
  text-align: center;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1.15rem 0;
`
