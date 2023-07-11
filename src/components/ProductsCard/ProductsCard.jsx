import React from 'react'
import propTypes from 'prop-types'
import { BsFillCartPlusFill } from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import './ProductsCard.css'

function ProductsCard({ data }) {
  const { title, thumbnail, price } = data

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

      <button type="button" className="button_add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  )
}

export default ProductsCard

ProductsCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired
