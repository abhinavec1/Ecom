import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

const App = () => {
  return(
    <Router>
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  )
};

export default App;
