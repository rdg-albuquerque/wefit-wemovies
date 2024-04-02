import Image from "next/image"
import { Headline } from "../typography/TypographyElements"
import { ImageDesktop, ImageMobile, NoContentInner } from "./NoContentElements"
import { Button } from "../button/buttonElements"
import { useRouter } from "next/router"

const NoContent = ({ isCartPage }: { isCartPage?: boolean }): JSX.Element => {
  const router = useRouter()
  const handleButtonClick = () => {
    if (isCartPage) {
      router.push("/")
      return
    }
    router.reload()
  }
  return (
    <NoContentInner>
      <Headline variation="secondary">
        {"Parece que não há nada por aqui :("}
      </Headline>
      <ImageMobile
        alt="No results"
        src="/no-results-mobile.png"
        width={178.63}
        height={265.36}
      />
      <ImageDesktop
        alt="No results"
        src="/no-results-desktop.png"
        width={447}
        height={265.36}
      />
      <Button maxWidth={173} onClick={handleButtonClick}>
        {isCartPage ? "Voltar" : "Recarregar página"}
      </Button>
    </NoContentInner>
  )
}

export default NoContent