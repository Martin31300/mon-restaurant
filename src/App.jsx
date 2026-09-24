import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main className="container py-5">
  <div className="row">
    <div className="col-lg-3 mb-4">
      <Sidebar />
    </div>
    <div className="col-lg-9">
      <ProductList/>
    </div>
  </div>
</main>
<Footer/>
    </>
  )
}

export default App