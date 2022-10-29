import React from 'react'

const Delivery = () => {
    return (
        <div className="delivery">
            <h1>Delivery Services</h1>
            <div className="delivery__inner">
                <img src={require("../assets/delivery.png")} alt="Delivery Car image" className="delivery__image" />
                <ul className="delivery__ul">
                    <li>Accurate delivery time estimation</li>
                    <li>Money-back guarantee for damaged goods</li>
                    <li>Our EVs leave no gas emissions</li>
                </ul>
            </div>
        </div>

    )
}

export default Delivery