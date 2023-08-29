import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FaShoppingCart className="cart-icon" />
      <span className="cart-notification">{itemCount}</span>
    </div>
  )
}

export default CartWidget
