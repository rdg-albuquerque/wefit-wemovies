import Image from "next/image"
import { TextMd, TextSm, Headline } from "../typography/TypographyElements"
import { CartContainer, HeaderWrapper, MyCartContainer } from "./HeaderElements"
import Link from "next/link"

const Header = (): JSX.Element => {
  const itemsQty = 1 // for now
  return (
    <>
      <HeaderWrapper>
        <Link href="/">
          <Headline>WeMovies</Headline>
        </Link>
        <CartContainer>
          <MyCartContainer>
            <TextMd className="header__my-cart-text" variation="primary">
              Meu carrinho
            </TextMd>
            <TextSm variation="tertiary" fontWeight={600}>
              {itemsQty} itens
            </TextSm>
          </MyCartContainer>
          <Image
            alt="Shopping bag"
            src="/shopping-bag.svg"
            width={24}
            height={20.5}
          />
        </CartContainer>
      </HeaderWrapper>
    </>
  )
}

export default Header
