function Header() {
  return (
    <header className="header">
      <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
        <button className="btn btn-light position-absolute top-0 end-0 mt-4" aria-label="Panier">
          <i className="bi bi-cart"></i>
        </button>
        <h1 className="header-title text-white">Mon Restaurant</h1>
      </div>
    </header>
  )
}

export default Header