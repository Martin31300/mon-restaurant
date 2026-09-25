import { useReducer } from 'react'
import { CartContext } from './CartContext'
import { cartReducer, initialState } from './cartReducer'

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  function addToCart(product) {
    dispatch({ type: 'ADD', product })
  }

  function removeFromCart(id) {
    dispatch({ type: 'REMOVE', id })
  }

  const items = state.items
  const count = items.reduce((sum, item) => sum + item.quantity, 0)
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, count, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider