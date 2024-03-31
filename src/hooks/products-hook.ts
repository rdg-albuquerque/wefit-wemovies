import { IProduct } from "@/types/product-type"
import useSWR from "swr"

interface IProductsResponse {
  data: {
    products: IProduct[]
  }
  error: any
  isLoading: boolean
}

const useProducts = (): IProductsResponse => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json())
  return useSWR("/api/products", fetcher)
}

export default useProducts
