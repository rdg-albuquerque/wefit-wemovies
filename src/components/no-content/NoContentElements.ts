import styled from "styled-components"
import { Headline } from "../typography/TypographyElements"
import breakpoints from "@/styles/breakpoints"
import Image from "next/image"

export const NoContentWrapper = styled.div`
  height: calc(100vh - ${(props) => props.theme.header.height});
  width: 100%;
  padding-bottom: 6.364rem;

  @media ${breakpoints.md} {
    padding-bottom: 4rem;
  }
`

export const NoContentInner = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.colors.bg.light};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 0;
  gap: 2.4rem;
  border-radius: 0.4rem;
  min-height: 50rem;

  ${Headline} {
    text-align: center;
    max-width: 20rem;

    @media ${breakpoints.md} {
      max-width: unset;
    }
  }

  &.order-confirmation img {
    width: 23.8rem;
    height: 24.8rem;
  }
`

export const ImageMobile = styled(Image)`
  @media ${breakpoints.md} {
    display: none;
  }
`

export const ImageDesktop = styled(Image)`
  display: none;
  @media ${breakpoints.md} {
    display: block;
  }
`
