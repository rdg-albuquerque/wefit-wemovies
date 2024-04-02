import Image from "next/image"
import { TextMd, TextSm, Headline } from "../typography/TypographyElements"
import { CartContainer, HeaderWrapper, MyCartContainer } from "./HeaderElements"
import Link from "next/link"
import { useGlobal } from "@/hooks/global-hook"

const Header = (): JSX.Element => {
  const { cartItems } = useGlobal()

  const itemsQty = Object.values(cartItems).reduce(
    (total, item) => total + item.qty,
    0
  )

  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <Headline>WeMovies</Headline>
        </Link>
        <Link href="/cart">
          <CartContainer>
            <MyCartContainer>
              <TextMd
                fontWeight={600}
                className="header__my-cart-text"
                variation="primary"
              >
                Meu carrinho
              </TextMd>
              <TextSm variation="tertiary" fontWeight={600}>
                {itemsQty} {itemsQty === 1 ? "item" : "itens"}
              </TextSm>
            </MyCartContainer>
            <Image
              alt="Shopping bag"
              src="/shopping-bag.svg"
              width={24}
              height={20.5}
            />
          </CartContainer>
        </Link>
      </HeaderWrapper>
    </>
  )
}

export default Header
