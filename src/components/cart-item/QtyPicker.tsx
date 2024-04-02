import Image from "next/image"
import { Button } from "../button/buttonElements"
import { MinusPlusBtn, QtyInput, QtyPickerWrapper } from "./CartItemElements"
import { useGlobal } from "@/hooks/global-hook"
import { useState } from "react"

const QtyPicker = ({ pid }: { pid: number }): JSX.Element => {
  const { cartItems, setCartItems } = useGlobal()

  const handleAddClick = () => {
    const updatedItems = { ...cartItems }
    updatedItems[pid].qty++
    setCartItems({ ...updatedItems })
  }

  const handleMinusClick = () => {
    const updatedItems = { ...cartItems }
    if (cartItems[pid].qty > 1) {
      updatedItems[pid].qty--
    } else {
      delete updatedItems[pid]
    }
    setCartItems({ ...updatedItems })
  }

  return (
    <QtyPickerWrapper>
      <MinusPlusBtn onClick={handleMinusClick}>
        <Image
          alt="Decrease button"
          src="/minus-icon.svg"
          width={18}
          height={18}
        />
      </MinusPlusBtn>
      <QtyInput readOnly value={cartItems[pid]?.qty || 1} type="number" />
      <MinusPlusBtn onClick={handleAddClick}>
        <Image alt="Add button" src="/plus-icon.svg" width={18} height={18} />
      </MinusPlusBtn>
    </QtyPickerWrapper>
  )
}

export default QtyPicker
