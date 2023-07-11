import React, { useState, useEffect } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductsCard from '../ProductsCard/ProductsCard'

function Products() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <section className="products container">
      {products.map((product) => (
        <ProductsCard key={product.id} data={product} />
      ))}
    </section>
  )
}

export default Products
