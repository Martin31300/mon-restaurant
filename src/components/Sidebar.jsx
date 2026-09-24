import SidebarCategories from './SidebarCategories'
import SidebarPrice from './SidebarPrice'
import SidebarTags from './SidebarTags'

function Sidebar() {
  return (
    <aside>
      <SidebarCategories />
      <SidebarPrice />
      <SidebarTags />
    </aside>
  )
}

export default Sidebar