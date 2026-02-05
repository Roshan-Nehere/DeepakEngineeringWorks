import { useState } from 'react'
import {Routes, Route ,Navigate} from "react-router";
import './App.css'
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import Services from './Components/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/about" element={<About></About>} ></Route>
      <Route path="/services" element={<Services></Services>}></Route>
      <Route path="/products" element={<Products></Products>}></Route>
    

    </Routes>
    </>
  )
}

export default App
