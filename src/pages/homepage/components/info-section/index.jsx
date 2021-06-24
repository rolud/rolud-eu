import * as React from 'react'
import InfoContainer from './components/info-container'
import './styles.css'

const InfoSection = () => {
    return (
        <div className="container section-2">
            <div className="info-wrapper">
                <div>
                    <div className="info-row">
                        <InfoContainer index={0} />
                        <InfoContainer index={1} />
                        <InfoContainer index={2} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection
