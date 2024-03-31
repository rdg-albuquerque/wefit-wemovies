import type { ICartItems } from "@/types/cart-items"
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react"

interface IGlobalContext {
  cartItems: ICartItems
  setCartItems: Dispatch<SetStateAction<ICartItems>>
}

export const GlobalContext = createContext<IGlobalContext>({} as IGlobalContext)

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [cartItems, setCartItems] = useState<ICartItems>({})

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
