import { IProduct } from "@/types/product-type"
import useSWR from "swr"

interface IProductsResponse {
  data: {
    products: IProduct[]
  }
  error: any
  isLoading: boolean
}

const useProductSearch = (search: string): IProductsResponse => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  return useSWR(`/api/products?query=${search}`, fetcher)
}

export default useProductSearch
