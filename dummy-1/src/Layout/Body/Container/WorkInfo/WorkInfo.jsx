import React from 'react'
import Cards from '../../../../components/Cards/Cards'
import './WorkInfo.scss'

const WorkInfo = props => {
    return (
        <div className={'work-info'}>
            <h3 className="work-info__heading">How we work?</h3>
            <Cards />
            <button className="work-info__btn" href="#">Learn More</button>
        </div>
    )
}

export default WorkInfo