import { useState } from 'react'
import { useCart } from '../context/CartContext'

function Cart() {
  const { items, count, total } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        className="btn btn-light position-absolute top-0 end-0 mt-4"
        aria-label="Panier"
        onClick={() => setIsOpen(true)}
      >
        <i className="bi bi-cart"></i>
        {count > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {count}
          </span>
        )}
      </button>

      {isOpen && (
        <>
          <div className="modal d-block" tabIndex="-1" onClick={() => setIsOpen(false)}>
            <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Mon panier</h5>
                  <button type="button" className="btn-close" aria-label="Fermer" onClick={() => setIsOpen(false)}></button>
                </div>
                <div className="modal-body">
                  {items.length === 0 ? (
                    <p className="mb-0">Votre panier est vide.</p>
                  ) : (
                    <table className="table align-middle mb-0">
                      <thead>
                        <tr>
                          <th>Produit</th>
                          <th className="text-end">Prix</th>
                          <th className="text-center">Qté</th>
                          <th className="text-end">Sous-total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {items.map((item) => (
                          <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className="text-end">{item.price} €</td>
                            <td className="text-center">{item.quantity}</td>
                            <td className="text-end">{item.price * item.quantity} €</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
                <div className="modal-footer justify-content-between">
                  <strong>Total : {total} €</strong>
                  <button type="button" className="btn btn-dark" onClick={() => setIsOpen(false)}>
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show"></div>
        </>
      )}
    </>
  )
}

export default Cart