import { Button } from "@/components/button/buttonElements"
import CartItem from "@/components/cart-item/CartItem"
import {
  CartPageWrapper,
  ColumnTitleGridContainer,
  ColumnTitleInnerGrid,
  OrderConfirmationWrapper,
  TotalContainer,
} from "@/components/cart-item/CartItemElements"
import NoResults from "@/components/no-results/NoResults"
import { NoResultsWrapper } from "@/components/no-results/NoResultsElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import { TextLg, TextMd } from "@/components/typography/TypographyElements"
import { useGlobal } from "@/hooks/global-hook"
import { formatPrice } from "@/utils/format-price"

export default function Cart(): JSX.Element {
  const { cartItems } = useGlobal()
  const cartItemsValues = Object.values(cartItems)
  const isEmptyCart = Boolean(!cartItemsValues?.length)

  const orderTotal = cartItemsValues?.reduce(
    (total, item) => total + Number(item.price) * item.qty,
    0
  )

  return (
    <PageWrapper>
      {isEmptyCart ? (
        <NoResultsWrapper>
          <NoResults isCartPage />
        </NoResultsWrapper>
      ) : (
        <CartPageWrapper>
          <ColumnTitleGridContainer>
            <TextMd
              style={{ width: "91px" }}
              variation="tertiary"
              fontWeight={700}
            >
              PRODUCT
            </TextMd>
            <ColumnTitleInnerGrid>
              <div></div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "16rem",
                }}
              >
                <TextMd variation="tertiary" fontWeight={700}>
                  QTD
                </TextMd>
                <TextMd variation="tertiary" fontWeight={700}>
                  SUBTOTAL
                </TextMd>
              </div>
              <div></div>
            </ColumnTitleInnerGrid>
          </ColumnTitleGridContainer>
          {Object.keys(cartItems)?.map((key) => {
            const product = cartItems[key]
            return <CartItem key={key} product={product} />
          })}
          <OrderConfirmationWrapper>
            <TotalContainer>
              <TextMd variation="tertiary" fontWeight={700}>
                TOTAL
              </TextMd>
              <TextLg
                className="total-price"
                variation="secondary"
                fontWeight={700}
              >
                {formatPrice(orderTotal)}
              </TextLg>
            </TotalContainer>
            <Button className="place-order-btn">
              <TextMd fontWeight={700}>FINALIZAR PEDIDO</TextMd>
            </Button>
          </OrderConfirmationWrapper>
        </CartPageWrapper>
      )}
    </PageWrapper>
  )
}
