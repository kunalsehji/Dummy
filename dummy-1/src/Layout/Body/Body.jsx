import React from 'react'
import Container from './Container/Container'
import Header from './Header/Header'
import './Body.scss'

const Body = props => {
    return (
        <div className={'body'}>
            <Header />
            <Container />
        </div>
    )
}

export default Body