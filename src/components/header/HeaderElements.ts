import breakpoints from "@/styles/breakpoints"
import styled from "styled-components"

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 1.6rem;
  margin: 0 auto;
  max-width: 108rem;
  max-height: ${(props) => props.theme.header.height};
`

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const MyCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 4rem;

  .header__my-cart-text {
    display: none;
    @media ${breakpoints.md} {
      display: block;
    }
  }
`
