import type { NextApiRequest, NextApiResponse } from "next"
import data from "../../data.json"
import { IProduct } from "@/types/product-type"

interface Data {
  products: IProduct[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const movies = JSON.stringify(data)
    res.status(200).json(JSON.parse(movies))
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return
    }
    console.error(error)
  }
}
