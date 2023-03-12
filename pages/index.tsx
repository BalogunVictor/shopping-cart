import type { NextPage } from 'next'
import Head from 'next/head'
import { items } from '../Data'
import { CartItemType } from '../components/@types'
import Item from '../components/Item'
import { useState } from 'react'
import {BsCart3} from 'react-icons/bs'
import Cart from '../components/Cart'

const Home: NextPage = () => {

  const [open,setOpen] = useState(false);
  const [cartItems,setCartItems] = useState([] as CartItemType[])

  const handleToggle = () => {
    setOpen(prevs => !prevs)
  }

  const getTotalItems = (Items: CartItemType[]) => 
  Items.reduce((ack:number, item) => ack + item.amount, 0)
  ;
  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id ? {...item, amount: item.amount + 1}
          : item)
      }
      return [...prev, clickedItem]
    })
  };
  const handleRemoveFromCart = () => null;


  return ( 
    <div className='w-[100%]'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex relative flex-col justify-center items-center'>
        <div className= { open ? 
            'w-[300px] h-full top-20 right-0 absolute translate-x-0 transition-all duration-300' 
            : 'w-[300px] h-full translate-x-[100%] transition-all duration-500'}>
              <div className={open ? 'w-[300px] h-full transition-all duration-500' : 'hidden transition-all duration-400 '}>
                <Cart 
                  cartItems={cartItems}
                  addToCart={handleAddToCart}
                  removeFromCart={handleRemoveFromCart}
                />
              </div>
        </div>
    
        <div className='p-4'>
          <BsCart3 size={40} onClick={handleToggle} />
          <p>{getTotalItems(cartItems)}</p>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-4 p-3'>
            {items.map((item:CartItemType) => (
              <Item 
              item={item}
              handleAddToCart={handleAddToCart}
              key={item.id}             
              />
            ))
            }
          </div>
        </div>
      </main> 
    </div>
  )
}

export default Home
