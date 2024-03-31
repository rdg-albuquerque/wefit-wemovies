import Image from "next/image"
import { Headline } from "../typography/TypographyElements"
import {
  ImageDesktop,
  ImageMobile,
  NoResultsContent,
} from "./NoResultsElements"
import { Button } from "../button/buttonElements"
import { useRouter } from "next/router"

const NoResults = (): JSX.Element => {
  const router = useRouter()
  return (
    <NoResultsContent>
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
      <Button maxWidth={173} onClick={() => router.reload()}>
        Recarregar página
      </Button>
    </NoResultsContent>
  )
}

export default NoResults