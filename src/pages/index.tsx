import Header from "@/components/header/Header"
import Loading from "@/components/loading/Loading"
import NoResults from "@/components/no-results/NoResults"
import { NoResultsWrapper } from "@/components/no-results/NoResultsElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>WeMovies</title>
      </Head>
      <PageWrapper>
        {/* <Loading /> */}
        <NoResultsWrapper>
          <NoResults />
        </NoResultsWrapper>
      </PageWrapper>
    </>
  )
}
