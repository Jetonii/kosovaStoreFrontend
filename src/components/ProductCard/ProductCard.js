import React from 'react'
import "./ProductCard.css"
const ProductCard = () => {
  return (
    <div className="product__card">
      <img className="product__card__image" src={require("../../pages/assets/product3.png")} alt="Product" />
      <div className="product__card__info">
        <section className="product__card__productInfo">
          <p className="product__card__title">Cereal</p>
          <p className="product__card_description">lorem ipsum blah blah</p>
        </section>
        <section className="product__card__priceInfo">
          <div className="product__card__price">
            2.50$
          </div>
          <div className="product__card__quantity">
            <button className="product__card__change__quantity" type='button'>-</button>
            <button className="product__card__value" type='button' disabled={true}>0</button>
            
            <button  className="product__card__change__quantity"type='button'>+</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductCard