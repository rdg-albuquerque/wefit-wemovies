import { GlobalContext } from "@/contexts/global-context"
import { useContext } from "react"

export const useGlobal = () => {
  const context = useContext(GlobalContext)
  return { ...context }
}
