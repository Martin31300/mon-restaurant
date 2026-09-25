import Tag from './Tag'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
      const { addToCart } = useCart()
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between">
          <h5 className="card-title mb-0">{product.title}</h5>
          <span className="fw-semibold text-nowrap ms-2">{product.price} €</span>
        </div>
        <hr />
        {product.tags.length > 0 && (
          <>
            <div className="d-flex flex-wrap gap-1">
              {product.tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </div>
            <hr />
          </>
        )}
        <button 
            type="button" 
            className="btn btn-outline-primary w-100 mt-auto"
            onClick={() => addToCart(product)}
            >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ProductCard