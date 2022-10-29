import React from 'react'
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <div className="product__card">
        <img className="product__card__image" src={require("../../pages/assets/product3.png")} alt="Product image"/>
        <hr></hr>
        <div className="product__card__info">
          <section className="product__card__productInfo">
            <p className="product__card__title">Cereal</p>
            <p className="product__card_description">lorem ipsum blah blah</p>
            </section>
          <section className="product__card__priceInfo">
            2.50$
            <button type='button'>-</button>
              0
            <button type='button'>+</button>

          </section>
        </div>
    </div>
  )
}

export default ProductCard