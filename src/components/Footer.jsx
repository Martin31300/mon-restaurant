function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer text-white text-center py-5">
      <div className="container">
        <p className="footer-title mb-2">Mon Restaurant</p>
        <p className="mb-0">© {year} Mon Restaurant. Tous droits réservés.</p>
      </div>
    </footer>
  )
}

export default Footer