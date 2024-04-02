import Loading from "@/components/loading/Loading"
import NoResults from "@/components/no-results/NoResults"
import { NoResultsWrapper } from "@/components/no-results/NoResultsElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import ProductCard from "@/components/product/product-card/ProductCard"
import { ProductGrid } from "@/components/product/product-grid/ProductGridElements"
import { SearchInput } from "@/components/search/SearchInput"
import useProductSearch from "@/hooks/products-search-hook"
import breakpoints from "@/styles/breakpoints"
import { useRouter } from "next/router"
import styled from "styled-components"

export default function Search() {
  const router = useRouter()
  const query = router.query.query || ""

  const { data, error, isLoading } = useProductSearch(query as string)
  return (
    <PageWrapper>
      <title>Pesquisa</title>
      {error ? (
        <NoResultsWrapper>
          <NoResults />
        </NoResultsWrapper>
      ) : (
        <SearchPageWrapper>
          <SearchInput />
          {isLoading && <Loading />}
          <ProductGrid>
            {data?.products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ProductGrid>
        </SearchPageWrapper>
      )}
    </PageWrapper>
  )
}

const SearchPageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .loading-container {
    padding-top: 2.63rem;

    @media ${breakpoints.md} {
      padding-top: 3.43rem;
    }
  }
`
