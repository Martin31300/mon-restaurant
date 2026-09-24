import { products } from '../data/products'
import Tag from './Tag'

const tags = [...new Set(products.flatMap((product) => product.tags))]

function SidebarTags() {
  return (
    <div className="card card-body">
      <div className="d-flex flex-wrap gap-1">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </div>
  )
}

export default SidebarTags