import { useFilters } from '../context/FilterContext'

function SidebarPrice() {
  const { maxPrice, setMaxPrice } = useFilters()

  return (
    <div className="card card-body mb-3">
      <div className="input-group">
        <span className="input-group-text">€</span>
        <input
          type="number"
          min="0"
          className="form-control"
          placeholder="Prix max"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
    </div>
  )
}

export default SidebarPrice