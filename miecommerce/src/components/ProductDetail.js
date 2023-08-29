import React from 'react'
import { useParams } from 'react-router-dom'
import productsData from './Cards/productsData.json'
import './ProductDetail.css'

function ProductDetail() {
  const { productId } = useParams();
  const product = productsData.find(product => product.id.toString() === productId)

  if (!product) {
    return <div className="product-detail">Producto no encontrado</div>
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2 className="product-name">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Precio: ${product.price.toFixed(2)}</p>
        {/* Otros detalles del producto */}
      </div>
    </div>
  )
}

export default ProductDetail