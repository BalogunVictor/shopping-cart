import Image from "next/image";
import { CartItemType } from "./@types";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem:CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {

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
          <h3>{item.price}</h3>
        </div>
      </div>
      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
  )
}

export default Item