export const formatPrice = (rawPrice: string) => {
  return Number(rawPrice).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
