import Image from "next/image"
import {GrClose} from 'react-icons/gr'
import { CartItemType } from "./@types"

type Props = {
item: CartItemType
addToCart: (clickedItem:CartItemType) => void;
removeFromCart: (id:number) => void;
remove: (id:number) => void;
}


const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart,remove}) => {
  return (
    <div className="flex p-4 gap-5 h-[200px]">
        <div className="flex flex-col justify-center items-center">
          <h3>{item.name}</h3>
          <div>
            <p>Price: N{item.price}</p>
            <p>Total: N{(item.amount * item.price)}</p>
          </div>
          <div className="flex justify-center items-center gap-4 p-4">
            <button 
              className="text-lg h-[20px] w-[20px] bg-green-400 flex rounded-lg text-white justify-center items-center"
              onClick={() => addToCart(item)}>
              +
            </button>
            <p>{item.amount}</p>
            <button 
              className="text-lg h-[20px] w-[20px] bg-red-400 flex rounded-lg text-white justify-center items-center"
              onClick={() => removeFromCart(item.id)}
              >
              -
            </button>
          </div>
            <button onClick={() => remove(item.id)}>
              <GrClose size={30}/>
            </button>
        </div>
        <Image
          src={item.imageUrl}
          alt={item.name}
          width={120}
          height={40}
         />
    </div>
  )
}

export default CartItem