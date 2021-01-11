import React from 'react'
import './SubHeader.scss'

const SubHeader = props => {
    const navElements = ['Home', 'Products', 'Merchant', 'Developer', 'Contact']
    return (
        <div className="sub-header">
            <h3 className="sub-header__heading">pless</h3>
            <ul className="nav">
                {/* {navElements.map((el, i) => <li key={i} className="nav-item"><a className="nav-link">{el}</a></li>)} */}
                <li className="nav__item"><a href="#" className="nav__link">Home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Products</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Merchant</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Developer</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
            </ul>
        </div>
    )
}

export default SubHeader