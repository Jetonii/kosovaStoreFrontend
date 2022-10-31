import React from 'react'

const LoyaltyMembership = () => {
    return (
        <div className='loyaltyMembership'>
            <div className="loyaltyMembership__join">
                <p className='loyaltyMembership__join__first'>JOIN OUR LOYALTY MEMBERSHIP
                    PROGRAM</p>
                <p className='loyaltyMembership__join__second'>AND RECEIVE MONTHLY DISCOUNTS </p>
                <button className="loyaltyMembership__join__button" type="button">JOIN NOW</button>
            </div>
            <img className="loyaltyMembership__join__image" src={require("../assets/loyalty.png")} alt="Loyalty"/>
            <div className="loyaltyMembership__send">
                <p className="loyaltyMembership__send__first">KEEP YOUR FRIENDS CLOSE</p>
                <p className="loyaltyMembership__send__second">AND SHOW HOW MUCH YOU LOVE THEM BY SENDING A <b>VIRTUAL GIFT CARD</b></p>
                <button className="loyaltyMembership__send__button" type="button">SEND NOW</button>
                <img className="loyaltyMembership__send__image" src={require("../assets/loyalty2.png")} alt="Gift Card" />
            </div>
        </div>
    )
}

export default LoyaltyMembership