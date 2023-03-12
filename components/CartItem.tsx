import Image from "next/image"
import { CartItemType } from "./@types"

type Props = {
item: CartItemType
addToCart: (clickedItem:CartItemType) => void
removeFromCart: (id:number) => void
}


const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => {
  return (
    <div className="flex pt-4 gap-2">
        <div>
          <h3>{item.name}</h3>
          <div>
            <p>Price: N{item.price}</p>
            <p>Total: N{(item.amount * item.price)}</p>
          </div>
          <div>
            <button>+</button>
            <p>{item.amount}</p>
            <button>-</button>
          </div>
        </div>
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={40}
          height={40}
         />
    </div>
  )
}

export default CartItem