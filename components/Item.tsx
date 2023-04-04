import Image from "next/image";
import { CartItemType } from "./@types";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem:CartItemType) => void;
}

const Item: React.FC<Props> = ({item, handleAddToCart}) => {

  return (
    <div className="flex justify-between p-2 flex-col w-[100%] h-[100%] border-2 border-solid border-blue-100 rounded-2xl">
      <div className="flex justify-between items-center flex-col py-2">
        <Image 
        src={item.image} 
        alt={item.title}
        width={150}
        height={150}
        />
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h3>{item.price}</h3>
        </div>
      </div>
      <button 
      className='p-2 w-full text-lg bg-gray-500 shadow-lg shadow-gray-400 rounded-xl cursor-pointer hover:scale-90 ease-in duration-300' 
      onClick={() => handleAddToCart(item)}
      >
      Add to Cart
        </button>
    </div>
  )
}

export default Item