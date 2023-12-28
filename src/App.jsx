import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './Components/Hero'
import CollectionCards from './Components/CollectionCards'
import Trending from './Components/Trending'
import Carts from './Components/Carts'
import OverviewCard from './Components/OverviewCard'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing'
import Social from './Components/Social'
import Products from './Components/Products'
import Contact from './Components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Hero/>
     <CollectionCards/>
     <Trending/> */}
     {/* <Carts/> */}
     {/* <OverviewCard/> */}
     <BrowserRouter>

            <Routes>

              <Route path="/" element={<Landing />} />
              <Route path="/cart/:id" element={<Carts />} />
              {/* <Route path="/data" element={<OverviewCard />} /> */}
              <Route path="/data/:id" element={<OverviewCard/>} />
              <Route path="/product" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

 </BrowserRouter>
    </>
  )
}

export default App