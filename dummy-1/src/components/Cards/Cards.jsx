import React from 'react'
import Card from './Card/Card'
import './Cards.scss'
import img1 from '../../assets/photo-2.png'
import img2 from '../../assets/photo-3.jpg'
import img3 from '../../assets/photo-4.jpg'

const Cards = props => {
    const images = [ img1, img2, img3 ]
    return (
        <div className="cards">
            {images.map(url => <Card url={url} />)}
        </div>
    )
}

export default Cards