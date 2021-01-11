import React, { Fragment } from 'react'
import './Card.scss'

const Card = ({ url }) => {
    return (
        <div className="card">
            <div className="card__img-box">
                <img src={url} alt="Eva Elfie" className="card__img" />
            </div>
            <div className="card__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, explicabo. Repudiandae, quo itaque.
            </div>
        </div>
    )
}

export default Card