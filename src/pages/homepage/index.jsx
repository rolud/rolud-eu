import './styles.css'
import * as React from 'react'
import LandingSection from './components/landing-section'
import InfoSection from './components/info-section'

const HomePage = () => {
    return (
        <div>
            <LandingSection />
            <InfoSection />
        </div>
    )
}

export default HomePage
