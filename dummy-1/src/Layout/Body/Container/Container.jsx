import React from 'react'
import SubHeader from './SubHeader/SubHeader'
import NetworkInfo from './NetworkInfo/NetworkInfo'
import Carousel from '../../../components/Carousel/Carousel'
import WorkInfo from './WorkInfo/WorkInfo'
import Footer from './Footer/Footer'
import './Container.scss'

const Container = props => {
    return (
        <div className={'container'}>
            <SubHeader />
            <NetworkInfo />
            <Carousel />
            <WorkInfo />
            <div className="bg-style"></div>
            <Footer />
        </div>
    )
}

export default Container