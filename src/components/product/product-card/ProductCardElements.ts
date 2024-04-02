import styled from "styled-components"
import { Button } from "../../button/buttonElements"

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg.light};
  padding: 1.6rem;
  gap: 0.8rem;
  border-radius: 0.4rem;
  width: 100%;
  max-width: 33.86rem;

  .card__product-title {
    color: #333333;
  }
`

export const AddToCardBtn = styled(Button)`
  gap: 1.2rem;
  display: flex;
  justify-content: center;
`
export const AddToCartIconContainer = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
`
