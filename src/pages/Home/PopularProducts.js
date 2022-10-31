import React from 'react'
import Card from "../../components/ProductCard/ProductCard"

const PopularProducts = () => {
  return (
    <>
      <p className="popular__products__text">Our most popular products</p>

      <div className="popular__products">
        <Card src="assets/product1" />
        <Card src="assets/product2" />
        <Card src="assets/product3" />
        <Card src="assets/product4" />
        <Card src="assets/product5" />
        <Card src="assets/product6" />
        <Card src="assets/product7" />
        <Card src="assets/product8" />
      </div>
    </>
  )
}

export default PopularProducts