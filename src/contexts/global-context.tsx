import type { ICartItems } from "@/types/cart-items"
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from "react"

interface IGlobalContext {
  cartItems: ICartItems
  setCartItems: Dispatch<SetStateAction<ICartItems>>
  orderConfirmed: boolean
  setOrderConfirmed: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, cartItemsDispatch] = useState<ICartItems>({})
  const [orderConfirmed, setOrderConfirmed] = useState(false)

  const setCartItems = (
    value: ICartItems | ((prevState: ICartItems) => ICartItems)
  ) => {
    cartItemsDispatch(value)
    localStorage.setItem("cartItems", JSON.stringify(value))
  }

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems")

    if (
      storedCartItems &&
      storedCartItems !== "undefined" &&
      storedCartItems !== "null"
    ) {
      const parsed = JSON.parse(storedCartItems)
      setCartItems({ ...parsed })
    }
  }, [])
  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        setCartItems,
        orderConfirmed,
        setOrderConfirmed,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
