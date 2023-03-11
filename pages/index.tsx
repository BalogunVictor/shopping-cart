import type { NextPage } from 'next'
import Head from 'next/head'
import { items } from '../Data'
import { CartItemType } from '../components/@types'
import Item from '../components/Item'

const Home: NextPage = () => {

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem:CartItemType) => null;
  const handleRemoveFromCart = () => null;


  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {items.map((item:CartItemType) => (
        <Item 
        item={item}
        handleAddToCart={handleAddToCart}
         key={item.id}             
        />
      ))
      }
      </main>
        
    </div>
  )
}

export default Home
