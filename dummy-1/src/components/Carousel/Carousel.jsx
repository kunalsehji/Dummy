import React from 'react'
import './Carousel.scss'
import img from '../../assets/photo-1.jpg'

const Carousel = props => {

    const onClick = () => {
        return true
    }

    return (
        <div className={'carousel'}>
            <div className="carousel__box">
                <div className="carousel__container">
                    <h3 className="carousel__heading">We believe in the future of Eva Elfie</h3>
                    <div className="carousel__img-box">
                        <img src={img} alt="Eva Elfie" className="carousel__img" />
                    </div>
                    <div className="carousel__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perferendis
                        minus qui ullam molestiae velit quia corrupti autem minima alias. Tenetur expedita
                        fuga nemo illo blanditiis dolorem esse, cumque quibusdam!
                    </div>
                </div>
                {/* <div className="carousel__container">
                    <div className="carousel__heading">We believe in the future of Eva Elfie</div>
                    <div className="carousel__img-box">
                        <img src={img} alt="Eva Elfie" className="coursel__img" />
                    </div>
                    <div className="carousel__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perferendis
                        minus qui ullam molestiae velit quia corrupti autem minima alias. Tenetur expedita
                        fuga nemo illo blanditiis dolorem esse, cumque quibusdam!
                    </div>
                </div>
                <div className="carousel__container">
                    <div className="carousel__heading">We believe in the future of Eva Elfie</div>
                    <div className="carousel__img-box">
                        <img src={img} alt="Eva Elfie" className="coursel__img" />
                    </div>
                    <div className="carousel__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perferendis
                        minus qui ullam molestiae velit quia corrupti autem minima alias. Tenetur expedita
                        fuga nemo illo blanditiis dolorem esse, cumque quibusdam!
                    </div>
                </div>
                <div className="carousel__container">
                    <div className="carousel__heading">We believe in the future of Eva Elfie</div>
                    <div className="carousel__img-box">
                        <img src={img} alt="Eva Elfie" className="coursel__img" />
                    </div>
                    <div className="carousel__text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio perferendis
                        minus qui ullam molestiae velit quia corrupti autem minima alias. Tenetur expedita
                        fuga nemo illo blanditiis dolorem esse, cumque quibusdam!
                    </div>
                </div> */}

                <div className="slider">
                    <span className="slider__dot"></span>
                    <span className="slider__dot"></span>
                    <span className="slider__dot"></span>
                    <span className="slider__dot"></span>
                </div>
            </div>


        </div>
    )
}

export default Carousel