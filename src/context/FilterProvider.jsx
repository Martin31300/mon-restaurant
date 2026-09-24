import { useState } from 'react'
import { products } from '../data/products'
import { FilterContext } from './FilterContext'

function FilterProvider({ children }) {
  const [category, setCategory] = useState(null)
  const [tag, setTag] = useState(null)
  const [maxPrice, setMaxPrice] = useState('')
  const [search, setSearch] = useState('')

  const query = search.trim().toLowerCase()

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false
    if (tag && !product.tags.includes(tag)) return false
    if (maxPrice !== '' && product.price > Number(maxPrice)) return false
    if (query) {
      const text = [product.title, product.category, ...product.tags, ...product.keywords]
        .join(' ')
        .toLowerCase()
      if (!text.includes(query)) return false
    }
    return true
  })

  function resetFilters() {
    setCategory(null)
    setTag(null)
    setMaxPrice('')
    setSearch('')
  }

  return (
    <FilterContext.Provider
      value={{
        category, setCategory,
        tag, setTag,
        maxPrice, setMaxPrice,
        search, setSearch,
        filteredProducts,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}

export default FilterProvider