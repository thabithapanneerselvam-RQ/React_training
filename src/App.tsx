import './App.css'
import Navigation from "./components/Navigation"

import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Products, CarProducts, BikeProducts } from './pages/Products';
import useRedirectHome from './hooks/useNavigateHome';


function App() {
  const redirectHome =  useRedirectHome();
  
  return (
    <>
    <button onClick={redirectHome}>Go to Home</button>
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
    </>
  )
}

export default App
