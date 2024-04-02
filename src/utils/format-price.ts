export const formatPrice = (rawPrice: string | number, qty: number = 1) => {
  const rawTotal =
    typeof rawPrice === "string" ? Number(rawPrice) * qty : rawPrice * qty

  return rawTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })
}
