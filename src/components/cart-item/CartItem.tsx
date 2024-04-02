import { IProduct } from "@/types/product-type"
import {
  CartItemWrapper,
  ProductInfoContainer,
  ProductInfoContainerLeft,
  ProductInfoContainerRight,
  ProductPrice,
  RemoveProductBtnContainer,
  RemoveProductDesktopBtn,
  RemoveProductMobileBtn,
  SubTotal,
} from "./CartItemElements"
import { formatPrice } from "@/utils/format-price"
import { ImageMobile, ImageDesktop } from "../no-content/NoContentElements"
import { TextMd, TextSm, TextLg } from "../typography/TypographyElements"
import QtyPicker from "./QtyPicker"
import Image from "next/image"
import { useGlobal } from "@/hooks/global-hook"

interface ICartItemProps {
  product: IProduct & { qty: number }
}

const CartItem = ({ product }: ICartItemProps): JSX.Element => {
  const { cartItems, setCartItems } = useGlobal()

  const handleRemoveItem = () => {
    const updatedItems = { ...cartItems }
    delete updatedItems[product.id]
    setCartItems({ ...updatedItems })
  }

  return (
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
            <TextLg
              className="sub-total-value"
              fontWeight={700}
              variation="secondary"
            >
              {formatPrice(product.price, product.qty)}
            </TextLg>
          </SubTotal>
        </ProductInfoContainerRight>
        <RemoveProductBtnContainer>
          <RemoveProductDesktopBtn onClick={handleRemoveItem}>
            <TrashIcon />
          </RemoveProductDesktopBtn>
        </RemoveProductBtnContainer>
      </ProductInfoContainer>
    </CartItemWrapper>
  )
}

const TrashIcon = () => {
  return (
    <Image src="/trash-icon.svg" width={16} height={18} alt="Remove product" />
  )
}

export default CartItem
