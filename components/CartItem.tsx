import { useState } from "react"
import { items } from "../Data"
import Item from "./Item"

export type CartItemType = {
  id: number
  name: string
  imageUrl:string
  price:number
  amount:number
}

const CartItem = () => {
  // const [cartItems, setCartItems] = useState([])

  const getTotalItems = (items:CartItemType[]) => 
  items.reduce((ack:number,item) => ack + item.amount, 0 )
  ; 
  const handleRemoveFromCart = () => null;

  return (
    <div>
      {items.map((item:CartItemType) => (
        <Item 
        item={item}
         key={item.id}             
        />
      ))
      }
    </div>
  )
}

export default CartItem