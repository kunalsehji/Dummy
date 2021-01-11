import React from 'react'
import './Footer.scss'
import sprite from '../../../../assets/sprite.svg'

const Footer = props => {
    return (
        <div className="footer">
            <div className="footer__container">
                <h3 className="footer__heading">Ready to get started?</h3>

                <div className="footer__btn-box">
                    <button className="footer__btn" href="#">Contact Us</button>
                </div>

                <div className="pless">
                    <h4 className="pless__heading">pless</h4>
                    <p className="pless__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet praesentium,
                        at quibusdam quas quae voluptates beatae incidunt numquam molestiae!
    </p>
                    {/* <div className="pless__icons">
        <svg className="pless__icon">
            <use href={sprite + "#icon-twitter"} />
        </svg>
        <svg className="pless__icon">
            <use href={sprite + "#icon-facebook"} />
        </svg>
        <svg className="pless__icon">
            <use href={sprite + "#icon-google"} />
        </svg>
        <svg className="pless__icon">
            <use href={sprite + "#icon-tumblr"} />
        </svg>
        <svg className="pless__icon">
            <use href={sprite + "#icon-pinterest"} />
        </svg>
        <svg className="pless__icon">
            <use href={sprite + "#icon-linkedin"} />
        </svg>
    </div> */}
                </div>

                <div className="footer__learn-more">
                    <h4 className="footer__sub-heading">Learn More</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a className="footer__link" href="#">How it works</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Meeting tools</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Live streaming</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Contact</a></li>
                    </ul>
                </div>

                <div className="footer__about-us">
                    <h4 className="footer__sub-heading">About Us</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a className="footer__link" href="#">About us</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Features</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Privacy policy</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div className="footer__support">
                    <h4 className="footer__sub-heading">Support</h4>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a className="footer__link" href="#">FAQ</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Contact us</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Live chat</a></li>
                        <li className="footer__list-item"><a className="footer__link" href="#">Phone call</a></li>
                    </ul>
                </div>
            </div>

        </div >
    )
}

export default Footer