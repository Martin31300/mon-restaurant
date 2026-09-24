import { useFilters } from '../context/FilterContext'
import ProductCard from './ProductCard'

function ProductList() {
  const { filteredProducts, resetFilters } = useFilters()

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-5">
        <p>Aucun produit ne correspond à vos filtres.</p>
        <button type="button" className="btn btn-dark" onClick={resetFilters}>
          Réinitialiser les filtres
        </button>
      </div>
    )
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-3">
      {filteredProducts.map((product) => (
        <div key={product.id} className="col">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

export default ProductList