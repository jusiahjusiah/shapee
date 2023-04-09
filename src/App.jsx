import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Navbar from './components/Navbar'
import Cart from "./pages/Cart"
import Shop from "./pages/Shop"
function App() {

  return (
    <>

      <BrowserRouter>
        <Navbar />
        <div className="min-h-screen bg-primary-bg p-20 pt-32 px-32 pr-32 
        large:px-5 large:pr-10">
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
