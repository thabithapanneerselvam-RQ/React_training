import './App.css'
import Navigation from "../src/components/Navigation"

import { Route, Routes } from 'react-router-dom'
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Contact from "../src/pages/Contact";
import { Products, CarProducts, BikeProducts } from './pages/Products';
import useRedirectHome from './hooks/useNavigateHome';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/products" element={<Products />}>
          <Route path="car" element={<CarProducts />} />
          <Route path="bike" element={<BikeProducts />} />
        </Route>
      </Routes>
      <button onClick={useRedirectHome()}>Go to Home</button>
    </>
  )
}

export default App
