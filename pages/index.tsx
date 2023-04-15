import type { NextPage } from 'next'
import Head from 'next/head'
import { CartItemType } from '../components/@types'
import Item from '../components/Item'
import { useState } from 'react'
import { useQuery } from 'react-query';
// Components
import Drawer from '@mui/material/Drawer'
import { LinearProgress } from '@mui/material'
import {Grid} from '@mui/material'
import IconButton  from '@mui/material/IconButton'
import { Badge } from '@mui/material'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Cart from '../components/Cart'

const Home: NextPage = () => {
  
  const getProducts = async (): Promise<CartItemType[]> => 
    await (await fetch ('https://fakestoreapi.com/products')).json();

  const {data, isLoading, error} = useQuery<CartItemType[]>('products', getProducts); 

  console.log(data);
  
  const [cartOpen,setCartOpen] = useState(false);
  const [cartItems,setCartItems] = useState([] as CartItemType[])

  // const handleToggle = () => {
  //   setCartOpen(prevs => !prevs)
  // }

  const getTotalItems = (Items: CartItemType[]) => 
  Items.reduce((ack:number, item) => ack + item.amount, 0)
  ;
  const handleAddToCart = (clickedItem:CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id)

      if (isItemInCart) {
        return prev.map(item => 
          item.id === clickedItem.id ? 
          {...item, amount: item.amount + 1}
          : item)
      }

      //first time the item is added
      return [...prev, {...clickedItem, amount: 1} ]
    })
  };

   const handleRemoveFromCart = (id:number) => {
    setCartItems(prev => (prev.reduce ((ack, item) => {
      if(item.id === id) {
        if (item.amount === 1) return ack;
        return [...ack, {...item, amount: item.amount -1}]
      } else {
        return[...ack, item]
      }
    },[] as CartItemType[])))
   }

   if (isLoading) return <LinearProgress />
   if (error) return <div>Something went wrong ...</div>

  return ( 
    <div className='w-[100%]'>
      <Head>
        <title>Shopping-Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
            <Drawer 
            anchor='right'
            open={cartOpen}
            onClose={() => setCartOpen(false)}>
              <Cart 
                cartItems={cartItems}
                addToCart={handleAddToCart}
                removeFromCart={handleRemoveFromCart}
              />
            </Drawer>
            <IconButton
             onClick={() => setCartOpen(true)} 
             className='fixed z-30 right-5 top-5'>
              <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                <AddShoppingCartIcon />
              </Badge>
            </IconButton>
        <div className='flex justify-between p-2 flex-col w-[100%] h-[100%] border-2 border-solid border-blue-300 rounded-2xl'>
          <Grid container spacing={3}>
            {data?.map(item => (
              <Grid item key={item.id} xs={12} sm={4}>
                <Item item={item} handleAddToCart={handleAddToCart} />
              </Grid> 
            ))
            }
          </Grid>
        </div>
      </main> 
    </div>
  )
}

export default Home
