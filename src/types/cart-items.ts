import { IProduct } from "./product-type"

export interface ICartItems {
  [id: string]: IProduct & { qty: number }
}
