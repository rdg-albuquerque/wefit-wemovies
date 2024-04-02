import { Button } from "@/components/button/buttonElements"
import {
  NoContentInner,
  NoContentWrapper,
} from "@/components/no-content/NoContentElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import { Headline } from "@/components/typography/TypographyElements"
import { useGlobal } from "@/hooks/global-hook"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function OrderConfirmation() {
  const router = useRouter()
  const { orderConfirmed } = useGlobal()

  useEffect(() => {
    if (!orderConfirmed) {
      router.push("/")
    }
  }, [])

  return (
    <PageWrapper>
      <Head>
        <title>Confirmação de pedido</title>
      </Head>
      <NoContentWrapper>
        <NoContentInner className="order-confirmation">
          <Headline variation="secondary">
            {"Compra realizada com sucesso!"}
          </Headline>
          <Image
            alt="No results"
            src="/confirmation-image.png"
            width={295}
            height={307}
          />
          <Button maxWidth={173} onClick={() => router.push("/")}>
            Voltar
          </Button>
        </NoContentInner>
      </NoContentWrapper>
    </PageWrapper>
  )
}
