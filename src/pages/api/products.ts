import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../data.json"
import { IProduct } from "@/types/product-type"

interface Data {
  products: IProduct[]
}

function cleanString(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f\s.,_-]+/g, "")
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const dataJson = JSON.stringify(data)
    let { products }: Data = JSON.parse(dataJson)

    if (req.query.query) {
      const queryLower = cleanString(
        (req?.query?.query as string).toLowerCase()
      )
      products = products.filter((product) => {
        const productTitleLower = cleanString(product.title.toLowerCase())
        return productTitleLower.includes(queryLower)
      })
    }
    res.status(200).json({ products })
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      res.status(500).json({ error: error.message })
      return
    }
    console.error(error)
    return res.status(500).json({ error })
  }
}
