import { Variation } from "@/types/color-variation-type"
import styled from "styled-components"

interface ITitleProps {
  variation?: Exclude<Variation, "tertiary">
}

interface ITextProps {
  variation?: Variation
  fontWeight?: number
}

export const Headline = styled.h1<ITitleProps>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) =>
    props.theme.colors.headline[props.variation || "primary"]};
`

const Text = styled.span<ITextProps>`
  display: block;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.theme.colors.text[props.variation || "primary"]};
`

export const TextLg = styled(Text)`
  font-size: 1.6rem;
`

export const TextMd = styled(Text)`
  font-size: 1.4rem;
`

export const TextSm = styled(Text)`
  font-size: 1.2rem;
  font-weight: ${(props) => props.fontWeight || 700};
`
