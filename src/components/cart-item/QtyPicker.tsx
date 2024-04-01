import Image from "next/image"
import { Button } from "../button/buttonElements"
import { QtyInput, QtyPickerWrapper } from "./CartItemElements"
import { useGlobal } from "@/hooks/global-hook"
import { useState } from "react"

const QtyPicker = ({ pid }: { pid: number }): JSX.Element => {
  const { cartItems, setCartItems } = useGlobal()

  const [inputValue, setInputValue] = useState<number>()

  const handleAddClick = () => {
    const updatedItems = { ...cartItems }
    updatedItems[pid].qty++
    setCartItems({ ...updatedItems })
  }

  const handleRemoveClick = () => {}

  return (
    <QtyPickerWrapper>
      <button style={{ height: "18px" }}>
        <Image
          alt="Decrease button"
          src="/minus-icon.svg"
          width={18}
          height={18}
        />
      </button>
      <QtyInput readOnly value={cartItems[pid]?.qty || 1} type="number" />
      <button style={{ height: "18px" }}>
        <Image
          onClick={handleAddClick}
          alt="Add button"
          src="/plus-icon.svg"
          width={18}
          height={18}
        />
      </button>
    </QtyPickerWrapper>
  )
}

export default QtyPicker
