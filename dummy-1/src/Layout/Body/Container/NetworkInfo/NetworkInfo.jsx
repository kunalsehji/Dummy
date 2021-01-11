import React from 'react'
import './NetworkInfo.scss'
import backImg from '../../../../assets/background-1.jpg'

const NetworkInfo = props => {
    return (
        <div className={'network-info'}>
            <h2 className={'network-info__heading'}>Global fan-following with thousands of views daily</h2>
            <p className={'network-info__text'}>Best in the industry since 2018</p>
            <div className={'network-info__img-box'}>
                <img src={backImg} alt="world map" className={'network-info__img'}/>
            </div>
            {/* <div className="network-info__design"></div> */}
        </div>
    )
}

export default NetworkInfo