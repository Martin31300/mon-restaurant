import { useState } from 'react'
import { CartContext } from './CartContext'

function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(product) {
    const existing = items.find((item) => item.id === product.id)

    if (existing) {
      setItems(
        items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      )
    } else {
      setItems([
        ...items,
        { id: product.id, title: product.title, price: product.price, quantity: 1 },
      ])
    }
  }

  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider