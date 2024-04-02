import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../data.json"
import { IProduct } from "@/types/product-type"

interface Data {
  products: IProduct[]
}

function removeAccent(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const dataJson = JSON.stringify(data)
    let { products }: Data = JSON.parse(dataJson)

    if (req.query.query) {
      const queryLower = removeAccent(
        (req?.query?.query as string).toLowerCase()
      )
      products = products.filter((product) => {
        const productTitleLower = removeAccent(product.title.toLowerCase())
        return productTitleLower.includes(queryLower)
      })
    }
    res.status(200).json({ products })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return
    }
    console.error(error)
  }
}
