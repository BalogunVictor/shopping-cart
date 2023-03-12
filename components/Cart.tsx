import { CartItemType } from "./@types"
import CartItem from "./CartItem"

type Props={
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id:number) => void;
  remove: (id:number) => void;
  
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart, remove}) => {
  
  const calculateTotal = (items:CartItemType[]) => 
    items.reduce((ack:number, item) => ack + item.amount * item.price, 0 )
  

  return (
    <div className="h-full w-full bg-white p-3">
      <div>
        <h2 className="flex text-xl justify-center ">Your Shopping Cart</h2>
          {cartItems.length === 0 ? 
          <p> No items in Cart</p> 
          : null}
        {cartItems.map(item => 
          <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          remove={remove}
          />
        )}
      <h1 className="pt-10 text-2xl">Total: N{calculateTotal(cartItems)}</h1>
      </div>
    </div>
  )
}

export default Cart