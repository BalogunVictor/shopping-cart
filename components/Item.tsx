import Image from "next/image";
import { useState } from "react";
import { CartItemType } from "./CartItem"

type Props = {
  item: CartItemType;
}

const Item: React.FC<Props> = ({item}) => {
  const [amounts, setAmounts] = useState(item.amount)

  const addToAmount = () => {
    setAmounts(prev => prev + 1)
  }
  return (
    <div className="w-full">
      <div className="flex h-[150px] items-center justify-between gap-3">
        <Image 
        src={item.imageUrl} 
        alt={item.name}
        width={150}
        height={150}
        />
        <div>
         <h3>{item.name}</h3>
         <div className="flex pt-8 gap-3">
          <button onClick={addToAmount}>+</button>
            <p>Qty {amounts}</p>
          <button className="bg-">-</button>
          </div>
        </div>
        <div className="block">
          <h3>N{amounts * item.price}</h3>
          <h2 className="pt-10 text-blue-600">Remove</h2>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Item