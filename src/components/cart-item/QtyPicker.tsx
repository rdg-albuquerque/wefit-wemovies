import Image from "next/image"
import { Button } from "../button/buttonElements"
import { MinusPlusBtn, QtyInput, QtyPickerWrapper } from "./CartItemElements"
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
      <MinusPlusBtn>
        <Image
          alt="Decrease button"
          src="/minus-icon.svg"
          width={18}
          height={18}
        />
      </MinusPlusBtn>
      <QtyInput readOnly value={cartItems[pid]?.qty || 1} type="number" />
      <MinusPlusBtn>
        <Image
          onClick={handleAddClick}
          alt="Add button"
          src="/plus-icon.svg"
          width={18}
          height={18}
        />
      </MinusPlusBtn>
    </QtyPickerWrapper>
  )
}

export default QtyPicker
