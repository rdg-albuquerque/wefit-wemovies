import { IProduct } from "@/types/product-type"
import {
  AddToCardBtn,
  AddToCartIconContainer,
  ProductCardWrapper,
} from "./ProductCardElements"
import Image from "next/image"
import { TextLg, TextSm } from "../../typography/TypographyElements"
import { formatPrice } from "@/utils/format-price"
import { useGlobal } from "@/hooks/global-hook"

const ProductCard = ({ product }: { product: IProduct }): JSX.Element => {
  const { cartItems, setCartItems } = useGlobal()
  const isInCart = Boolean(cartItems[product.id]?.id)

  const handleAddToCart = () => {
    if (isInCart) {
      const updatedItems = { ...cartItems }
      updatedItems[product.id].qty++
      setCartItems({ ...updatedItems })
    } else {
      setCartItems((prevState) => ({
        ...prevState,
        [product.id]: { ...product, qty: 1 },
      }))
    }
  }

  return (
    <ProductCardWrapper>
      <Image alt={product.title} src={product.image} width={147} height={188} />
      <TextSm variation="secondary">{product.title}</TextSm>
      <TextLg variation="secondary" fontWeight={700}>
        {formatPrice(product.price)}
      </TextLg>
      <AddToCardBtn
        variation={isInCart ? "secondary" : "primary"}
        onClick={handleAddToCart}
      >
        <AddToCartIconContainer>
          <Image
            alt="Add to card icon"
            src="/add-to-card-icon.svg"
            width={13.6}
            height={13.6}
          />
          <TextSm className="add-to-cart__product-qty" fontWeight={400}>
            {cartItems[product.id]?.qty || 0}
          </TextSm>
        </AddToCartIconContainer>
        <TextSm>ADICIONAR AO CARRINHO</TextSm>
      </AddToCardBtn>
    </ProductCardWrapper>
  )
}

export default ProductCard
