import Image from "next/image";
import { CartItemType } from "./@types";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem:CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {

  return (
    <div className="w-full flex flex-col justify-center ">
      <div className="py-2">
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
      <button className='p-2 text-lg bg-gray-500 shadow-lg shadow-gray-400 rounded-xl cursor-pointer hover:scale-110 ease-in duration-300' onClick={() => handleAddToCart(item)}>Add to Cart</button>
    </div>
  )
}

export default Item