import Cart from './Cart'

function Header() {
  return (
    <header className="header">
      <div className="container position-relative h-100 d-flex align-items-center justify-content-center">
        <Cart />
        <h1 className="header-title text-white">Mon Restaurant</h1>
      </div>
    </header>
  )
}

export default Header