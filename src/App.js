import React, { useState } from 'react'

import Cart from './Components/Cart/Cart'
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals'
import CartProvider from './store/CartProvider'

const App = () => 
{
  const [cartIsShowm, setCartIsShown] = useState(false)

  const ShowCartHandler = () =>
  {
    setCartIsShown(true)
  }

  const hideCartHandler = () =>
  {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
      {cartIsShowm && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
