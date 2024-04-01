import breakpoints from "@/styles/breakpoints"
import styled from "styled-components"
import { TextLg, TextMd, TextSm } from "../typography/TypographyElements"

export const CartPageWrapper = styled.div`
  width: 100%;
  background-color: #fff;
  border-radius: 0.4rem;
`

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 1.6rem;
  border-radius: 0.4rem;

  @media ${breakpoints.md} {
    align-items: center;
    padding: 2.4rem;
  }
`
export const ColumnTitleGridMobile = styled.div`
  display: none;

  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
  }
`

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 1.6rem;
  margin-left: 1.6rem;

  @media ${breakpoints.md} {
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
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
  border: 1px solid #d9d9d9;
  font-size: 1.4rem;
  border-radius: 0.4rem;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`
export const SubTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const RemoveProductBtnContainer = styled.div`
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
