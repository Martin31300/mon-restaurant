export const initialState = {
  items: [],
}

export function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD': {
      const existing = state.items.find((item) => item.id === action.product.id)

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }
      }

      const { id, title, price } = action.product
      return {
        ...state,
        items: [...state.items, { id, title, price, quantity: 1 }],
      }
    }

    case 'REMOVE': {
      const existing = state.items.find((item) => item.id === action.id)

      if (!existing) {
        return state
      }

      if (existing.quantity > 1) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.id ? { ...item, quantity: item.quantity - 1 } : item
          ),
        }
      }

      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      }
    }

    default:
      return state
  }
}