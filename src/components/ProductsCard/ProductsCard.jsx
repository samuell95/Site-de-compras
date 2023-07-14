import React, { useContext } from 'react'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import './ProductsCard.css'
import AppContext from '../../context/AppContext'

function ProductsCard({ data }) {
  const { title, thumbnail, price } = data
  const { cartItems, setCartItems } = useContext(AppContext)

  const handleAddCart = () => {
    setCartItems([...cartItems, data])
  }

  return (
    <section className="products-card">
      <img
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product"
        className="card_image"
      />
      <div className="card_infos">
        <h2 className="card_price">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="card_title">{title}</h2>
      </div>

      <button type="button" className="button_add-cart" onClick={handleAddCart}>
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductsCard

ProductsCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired
