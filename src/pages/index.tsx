import Loading from "@/components/loading/Loading"
import NoResults from "@/components/no-results/NoResults"
import { NoResultsWrapper } from "@/components/no-results/NoResultsElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import ProductCard from "@/components/product/product-card/ProductCard"
import { ProductGrid } from "@/components/product/product-grid/ProductGridElements"
import useProducts from "@/hooks/products-hook"
import Head from "next/head"

export default function Home() {
  const { data, error, isLoading } = useProducts()

  if (error) {
    console.error(error.message)
  }

  return (
    <>
      <Head>
        <title>WeMovies</title>
      </Head>
      <PageWrapper>
        {isLoading && <Loading />}
        {error ? (
          <NoResultsWrapper>
            <NoResults />
          </NoResultsWrapper>
        ) : (
          <ProductGrid>
            {data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        )}
      </PageWrapper>
    </>
  )
}
