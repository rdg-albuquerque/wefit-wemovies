import breakpoints from "@/styles/breakpoints"
import styled from "styled-components"

export const ProductGrid = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  gap: 1.6rem;
  grid-template-columns: 1fr;

  margin-top: 1.6rem;

  @media ${breakpoints.md} {
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 2.4rem;
    margin-top: 2.4rem;
  }
`
