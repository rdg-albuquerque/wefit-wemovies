import { Variation } from "@/styles/theme/types/color-variation"
import styled from "styled-components"

interface TitleProps {
  variation?: Exclude<Variation, "tertiary">
}

interface TextProps {
  variation?: Variation
  fontWeight?: number
}

export const Headline = styled.h1<TitleProps>`
  font-size: 2rem;
  font-weight: 700;
  color: ${(props) =>
    props.theme.colors.headline[props.variation] ||
    props.theme.colors.headline.primary};
`

const Text = styled.span<TextProps>`
  display: block;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) =>
    props.theme.colors.text[props.variation] ||
    props.theme.colors.text.primary};
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
