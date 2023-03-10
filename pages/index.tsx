import type { NextPage } from 'next'
import Head from 'next/head'
import CartItem from '../components/CartItem'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <CartItem />
      </main>
        
    </div>
  )
}

export default Home
