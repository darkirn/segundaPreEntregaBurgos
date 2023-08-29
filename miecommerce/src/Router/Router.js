import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import React from 'react'
import NavBar from '../components/NavBar'
import ItemListContainer from '../components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductDetail from "../components/ProductDetail"


function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:category" element={<ItemListContainer />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        
      </Routes>
    </BrowserRouter>
  )
}







export default Router