import React, { useEffect, useContext } from 'react'
import './Products.css'
import fetchProducts from '../../api/fetchProducts'
import ProductsCard from '../ProductsCard/ProductsCard'
import Loading from '../Loading/Loading'
import AppContext from '../../context/AppContext'

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext)

  useEffect(() => {
    fetchProducts('iphone').then((response) => {
      setProducts(response)
      setLoading(false)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    (loading && <Loading />) || (
      <section className="products container">
        {products.map((product) => (
          <ProductsCard key={product.id} data={product} />
        ))}
      </section>
    )
  )
}

export default Products
