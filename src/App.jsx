import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import Cart from "./pages/cart/Cart"
import Shop from "./pages/shop/Shop"
function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className=" bg-primary-bg pt-32 pl-28
        large:px-5 large:pr-5
        sm:pt-28">
          <Routes>
            <Route path='/' element={<Shop />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          </div>
      </BrowserRouter>

    </>
  )
}

export default App
