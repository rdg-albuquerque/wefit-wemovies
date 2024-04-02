import { Button } from "@/components/button/buttonElements"
import {
  CartItemWrapper,
  CartPageWrapper,
  ColumnTitleGridContainer,
  ColumnTitleInnerGrid,
  OrderConfirmationWrapper,
  ProductInfoContainer,
  ProductInfoContainerLeft,
  ProductInfoContainerRight,
  ProductPrice,
  RemoveProductBtnContainer,
  RemoveProductDesktopBtn,
  RemoveProductMobileBtn,
  SubTotal,
  TotalContainer,
} from "@/components/cart-item/CartItemElements"
import QtyPicker from "@/components/cart-item/QtyPicker"
import NoResults from "@/components/no-results/NoResults"
import {
  ImageDesktop,
  ImageMobile,
  NoResultsWrapper,
} from "@/components/no-results/NoResultsElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import {
  TextLg,
  TextMd,
  TextSm,
} from "@/components/typography/TypographyElements"
import { useGlobal } from "@/hooks/global-hook"
import useProducts from "@/hooks/products-hook"
import { formatPrice } from "@/utils/format-price"
import Image from "next/image"

export default function Cart(): JSX.Element {
  const { cartItems } = useGlobal()
  //   const isEmptyCart = Boolean(!Object.keys(cartItems)?.length)
  const isEmptyCart = false
  const { data } = useProducts()

  const product = data?.products?.[2]

  if (!product) return <></>

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
          <CartItemWrapper>
            <ImageMobile
              src={product.image}
              width={64}
              height={82}
              alt={product.title}
            />
            <ImageDesktop
              src={product.image}
              width={91}
              height={114}
              alt={product.title}
            />
            <ProductInfoContainer>
              <ProductInfoContainerLeft>
                <TextMd
                  variation="secondary"
                  fontWeight={700}
                  style={{ flexGrow: 1 }}
                >
                  {product.title}
                </TextMd>
                <ProductPrice fontWeight={700} variation="secondary">
                  {formatPrice(product.price)}
                </ProductPrice>
                <RemoveProductMobileBtn>
                  <TrashIcon />
                </RemoveProductMobileBtn>
              </ProductInfoContainerLeft>
              <ProductInfoContainerRight>
                <QtyPicker pid={product.id} />
                <SubTotal>
                  <TextSm className="md-none" variation="tertiary">
                    SUBTOTAL
                  </TextSm>
                  {/* console.log -> reminder to update this logic below */}
                  <TextLg
                    className="sub-total-value"
                    fontWeight={700}
                    variation="secondary"
                  >
                    {formatPrice(product.price)}
                  </TextLg>
                </SubTotal>
              </ProductInfoContainerRight>
              <RemoveProductBtnContainer>
                <RemoveProductDesktopBtn>
                  <TrashIcon />
                </RemoveProductDesktopBtn>
              </RemoveProductBtnContainer>
            </ProductInfoContainer>
          </CartItemWrapper>
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
                {/* REMOVE MOCKED */}
                {formatPrice("29.99")}
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

const TrashIcon = () => {
  return (
    <Image src="/trash-icon.svg" width={16} height={18} alt="Remove product" />
  )
}
