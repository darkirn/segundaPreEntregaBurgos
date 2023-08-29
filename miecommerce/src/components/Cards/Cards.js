

import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './Cards.css'
import productsData from './productsData.json'

function Cards() {
  const [products, setProducts] = useState([])
  const { category } = useParams()

  useEffect(() => {
    // Filtrar los productos según la categoría
    if (category) {
      const filteredProducts = productsData.filter(product => product.category === category)
      setProducts(filteredProducts)
    } else {
      // Mostrar todos los productos si no se proporciona una categoría en la URL
      setProducts(productsData)
    }
  }, [category])

  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} className="card-img-top" alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text"><small className="text-body-secondary">${product.price.toFixed(2)}</small></p>
            <Link className="btn btn-primary" to={`/product/${product.id}`}>View More</Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards