import type { NextPage } from 'next'
import Head from 'next/head'
import { items } from '../Data'
import { CartItemType } from '../components/@types'
import Item from '../components/Item'
import { useState } from 'react'
import {BsCart3} from 'react-icons/bs'
import Cart from '../components/Cart'
import { useQuery } from 'react-query';
// Components
import Drawer from '@mui/material/Drawer'
import { LinearProgress } from '@mui/material'
import Grid from '@mui/material'

const Home: NextPage = () => {
  
  const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch ('https://fakestoreapi.com/products')).json();

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts); 

  console.log(data);
  
//   const [open,setOpen] = useState(false);
//   const [cartItems,setCartItems] = useState([] as CartItemType[])

//   const handleToggle = () => {
//     setOpen(prevs => !prevs)
//   }

//   const getTotalItems = (Items: CartItemType[]) => 
//   Items.reduce((ack:number, item) => ack + item.amount, 0)
//   ;
//   const handleAddToCart = (clickedItem:CartItemType) => {
//     setCartItems(prev => {
//       const isItemInCart = prev.find(item => item.id === clickedItem.id)

//       if (isItemInCart) {
//         return prev.map(item => 
//           item.id === clickedItem.id ? {...item, amount: item.amount + 1}
//           : item)
//       }
//       return [...prev, clickedItem]
//     })
//   };

//    const handleRemoveFromCart = (id:number) => {
//     setCartItems(prev => (prev.reduce ((ack, item) => {
//       if(item.id === id) {
//         if (item.amount === 1) return ack;
//         return [...ack, {...item, amount: item.amount -1}]
//       } else {
//         return[...ack, item]
//       }
//     },[] as CartItemType[])))
//    }
   
//   //  const remove = (id:number) => {
//   //   setCartItems(prev => (prev.reduce((ack, item) => {(item.id === id) 
//   //     return ack;
//   //     },[] as CartItemType[]
//   //   )))
//   //   }


//  const remove = (id:number) => {
//     setCartItems((prev) => prev.filter((item) => item.id === id))
//   } 

  return ( 
    <div className='w-[100%]'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex relative flex-col justify-center items-center'>
        start
        {/* <div className= { open ? 
            'w-[300px] h-full top-20 right-0 absolute translate-x-0 transition-all duration-300' 
            : 'w-[300px] h-full translate-x-[100%] transition-all duration-500'}>
              <div className={open ? 'w-[300px] h-full transition-all duration-500' : 'hidden transition-all duration-400 '}>
                <Cart 
                  cartItems={cartItems}
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart}
                  remove={ remove}
                />
              </div>
        </div>
    
        <div className='p-4 bg-white h-[70px] w-full fixed top-0 flex justify-center'>
          <BsCart3 className='relative' size={40} onClick={handleToggle} />
          <p className='absolute top-0 h-[15x] w-[15px] ml-5 text-sm bg-red-400 flex rounded-full text-white justify-center items-center'>{getTotalItems(cartItems)}</p>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-4 mt-20 px-3'>
            {items.map((item:CartItemType) => (
              <Item 
              item={item}
              handleAddToCart={handleAddToCart}
              key={item.id}             
              />
            ))
            }
          </div>
        </div> */}
      </main> 
    </div>
  )
}

export default Home
