import Loading from "@/components/loading/Loading"
import NoContent from "@/components/no-content/NoContent"
import { NoContentWrapper } from "@/components/no-content/NoContentElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import ProductCard from "@/components/product/product-card/ProductCard"
import { ProductGrid } from "@/components/product/product-grid/ProductGridElements"
import { SearchInput } from "@/components/search/SearchInput"
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
          <NoContentWrapper>
            <NoContent />
          </NoContentWrapper>
        ) : (
          <>
            {!isLoading && <SearchInput />}
            <ProductGrid>
              {data?.products?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </ProductGrid>
          </>
        )}
      </PageWrapper>
    </>
  )
}
