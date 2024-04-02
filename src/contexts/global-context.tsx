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
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, cartItemsDispatch] = useState<ICartItems>({})

  const setCartItems = (
    value: ICartItems | ((prevState: ICartItems) => ICartItems)
  ) => {
    cartItemsDispatch(value)
    localStorage.setItem("cartItems", JSON.stringify(value))
  }

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems")

    if (storedCartItems) {
      const parsed = JSON.parse(storedCartItems)
      setCartItems({ ...parsed })
    }
  }, [])
  return (
    <GlobalContext.Provider
      value={{
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
