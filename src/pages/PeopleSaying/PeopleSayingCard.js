import React from 'react'

const PeopleSayingCard = () => {
    return (
        <div className="peopleSayingCard" >
            <img className="peopleSayingCard__profile__image" src={require("../assets/profile1.png")} alt="profile" />
            <p className="peopleSayingCard__description">Bought it twice in a week, awesome service and fresh grocery.
                Strongly recommend!!!</p>
            <p className='peopleSayingCard__name'>Evan Hoffman</p>
            <div className="peopleSayingCard__stars">
                <img src={require("../assets/filledStar.png")} alt="star" />
                <img src={require("../assets/filledStar.png")} alt="star" />
                <img src={require("../assets/filledStar.png")} alt="star" />
                <img src={require("../assets/filledStar.png")} alt="star" />
                <img src={require("../assets/emptyStar.png")} alt="star" />
            </div>
        </div>
    )
}

export default PeopleSayingCard