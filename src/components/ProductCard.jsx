import Tag from './Tag'
import { useCart } from '../context/CartContext'

function ProductCard({ product }) {
      const { items, addToCart, removeFromCart } = useCart()
  const quantity = items.find((item) => item.id === product.id)?.quantity ?? 0
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
                <div className="d-grid gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addToCart(product)}
          >
            Ajouter au panier {quantity > 0 && <span className="badge bg-primary ms-1">{quantity}</span>}
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={() => removeFromCart(product.id)}
          >
            Retirer du panier
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard