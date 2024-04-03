import Loading from "@/components/loading/Loading"
import NoContent from "@/components/no-content/NoContent"
import { NoContentWrapper } from "@/components/no-content/NoContentElements"
import { PageWrapper } from "@/components/page-content-wrapper/PageWrapperElements"
import ProductCard from "@/components/product/product-card/ProductCard"
import { ProductGrid } from "@/components/product/product-grid/ProductGridElements"
import { SearchInput } from "@/components/search/SearchInput"
import useProductSearch from "@/hooks/products-search-hook"
import breakpoints from "@/styles/breakpoints"
import { GetServerSideProps } from "next"
import styled from "styled-components"

type PageProps = {
  query: string
}

export const getServerSideProps: GetServerSideProps<PageProps> = async (
  context: any
) => {
  const { query } = context
  return {
    props: {
      query: query.query,
    },
  }
}

export default function Search({ query }: PageProps) {
  const { data, error, isLoading } = useProductSearch(query as string)
  return (
    <PageWrapper>
      <title>Pesquisa</title>
      {error ? (
        <NoContentWrapper>
          <NoContent />
        </NoContentWrapper>
      ) : (
        <SearchPageWrapper>
          <SearchInput
            query={query}
            className={
              !isLoading && data?.products?.length === 0
                ? "input-no-results"
                : ""
            }
          />
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {!data.products.length ? (
                <NoContentWrapper className="search-no-results">
                  <NoContent redirectToHome />
                </NoContentWrapper>
              ) : (
                <ProductGrid>
                  {data?.products?.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </ProductGrid>
              )}
            </>
          )}
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
  .search-no-results {
    height: calc(100vh - ${(props) => props.theme.header.height} - 8rem);

    margin-top: 1.6rem;

    @media (min-width: 656px) {
      width: 90%;
    }

    @media (min-width: 750px) {
      width: 80%;
    }

    @media ${breakpoints.md} {
      width: 100%;
      max-width: unset;
      margin-top: 2.4rem;
    }
  }
`
