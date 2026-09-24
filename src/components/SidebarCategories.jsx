import { categories } from '../data/products'
import { useFilters } from '../context/FilterContext'

function SidebarCategories() {
  const { category, setCategory } = useFilters()

  return (
    <div className="list-group mb-3">
      <div className="list-group-item bg-dark text-white">Catégorie</div>
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          className={`list-group-item list-group-item-action ${category === cat ? 'active' : ''}`}
          onClick={() => setCategory(category === cat ? null : cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}

export default SidebarCategories