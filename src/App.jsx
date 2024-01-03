import Carts from "./Components/Carts";
import OverviewCard from "./Components/OverviewCard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart/:id" element={<Carts />} />
          <Route path="/data/:id" element={<OverviewCard />} />
          <Route path="/product" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
