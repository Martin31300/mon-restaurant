import { useFilters } from '../context/FilterContext'

function Nav() {
  const { search, setSearch } = useFilters()

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Mon Restaurant</a>
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <a className="nav-link active" href="#">Menu</a>
          </li>
        </ul>
        <input
          type="search"
          className="form-control w-auto"
          placeholder="Rechercher…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  )
}

export default Nav