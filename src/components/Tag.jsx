import { useFilters } from '../context/FilterContext'

function Tag({ label }) {
  const { tag, setTag } = useFilters()
  const isActive = tag === label

  return (
    <button
      type="button"
      className={`btn btn-sm ${isActive ? 'btn-dark' : 'btn-outline-dark'}`}
      onClick={() => setTag(isActive ? null : label)}
    >
      {label}
    </button>
  )
}

export default Tag