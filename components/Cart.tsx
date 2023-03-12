import { CartItemType } from "./@types"
import CartItem from "./CartItem"

type Props={
  cartItems: CartItemType[]
  addToCart: (clickedItem: CartItemType) => void
  removeFromCart: (id:number) => void
}

const Cart: React.FC<Props> = ({cartItems, addToCart, removeFromCart}) => {
  return (
    <div className="h-full w-full bg-white p-3">
      <div>
        <h2>Your Shopping Cart</h2>
          {cartItems.length === 0 ? 
          <p> No items in Cart</p> 
          : null}
        {cartItems.map(item => 
          <CartItem 
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          />
        )}
      </div>
    </div>
  )
}

export default Cart