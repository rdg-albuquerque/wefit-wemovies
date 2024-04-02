import breakpoints from "@/styles/breakpoints"
import styled from "styled-components"
import { TextLg } from "../typography/TypographyElements"

export const CartPageWrapper = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.bg.light};
  border-radius: 0.4rem;
  padding: 1.6rem;

  @media ${breakpoints.md} {
    padding: 2.4rem;
  }
`

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-radius: 0.4rem;
  padding-bottom: 2.1rem;

  @media ${breakpoints.md} {
    align-items: center;
    padding-bottom: 2.4rem;
  }
`
export const ColumnTitleGridContainer = styled.div`
  display: none;
  width: 100%;
  margin-bottom: 2.4rem;

  @media ${breakpoints.md} {
    display: flex;
  }
`
export const ColumnTitleInnerGrid = styled.div`
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1.2fr 4fr 1fr;
  margin-left: 1.6rem;
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 1.6rem;
  margin-left: 1.6rem;

  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 1.2fr 4fr 1fr;
    gap: 0;
  }
`

export const ProductInfoContainerLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${breakpoints.md} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const ProductInfoContainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 1.5rem;

  @media ${breakpoints.md} {
    padding-right: 16rem;
    align-items: center;
  }
`

export const QtyPickerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.1rem;
`

export const QtyInput = styled.input`
  all: unset;
  width: 5.9rem;
  height: 2.6rem;
  text-align: center;
  border: 0.1rem solid #d9d9d9;
  font-size: 1.4rem;
  border-radius: 0.4rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const MinusPlusBtn = styled.button`
  cursor: pointer;
  height: 1.8rem;
`
export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${breakpoints.md} {
    .md-none {
      display: none;
    }
    .sub-total-value {
      width: 7.26rem;
    }
  }
`

export const RemoveProductBtnContainer = styled.div`
  display: none;
  @media ${breakpoints.md} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const RemoveProductMobileBtn = styled.button`
  cursor: pointer;
  display: block;
  margin-top: 0.4rem;
  @media ${breakpoints.md} {
    display: none;
  }
`

export const RemoveProductDesktopBtn = styled.button`
  cursor: pointer;
  display: none;
  @media ${breakpoints.md} {
    display: block;
  }
`

export const ProductPrice = styled(TextLg)`
  margin: 0 1.6rem;

  @media ${breakpoints.md} {
    margin: 0;
  }
`

export const OrderConfirmationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 0.1rem solid ${(props) => props.theme.colors.text.tertiary};
  padding-top: 2.1rem;
  row-gap: 1.6rem;

  @media ${breakpoints.md} {
    flex-direction: row-reverse;
    justify-content: space-between;
    .place-order-btn {
      max-width: 17.3rem;
    }
  }
`
export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .total-price {
    font-size: 2.4rem;
  }

  @media ${breakpoints.md} {
    gap: 2rem;
    padding-right: 1.5rem;
  }
`
