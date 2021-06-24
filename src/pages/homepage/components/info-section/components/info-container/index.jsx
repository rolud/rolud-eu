import * as React from 'react'
import PropTypes from 'prop-types'
import KotlinLogo from '../../../../../../assets/svgs/kotlin-logo'
import ReactLogo from '../../../../../../assets/svgs/react-logo'
import CppLogo from '../../../../../../assets/svgs/cpp-logo'

const InfoSection = ({ index }) => {
    const content = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis rhoncus sodales. Quisque pharetra vitae nulla in dapibus. Sed posuere magna tincidunt mi feugiat, vitae lobortis neque volutpat. Nullam dignissim tellus eu sollicitudin tincidunt. Etiam a pretium odio. Etiam fringilla ex nec enim tempus, at tempus nisi imperdiet. Donec nec arcu id arcu blandit ornare id ultrices justo. Fusce non nunc justo.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis ligula et eros vestibulum efficitur. Pellentesque interdum, massa a ultrices bibendum, velit justo tristique nulla, sed consectetur enim diam id felis. Mauris tempor felis non ipsum placerat faucibus. Etiam fringilla tortor odio, quis hendrerit enim ultrices ut. Ut ornare lacus.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis tortor eget ante vehicula efficitur.',
    ]

    return (
        <div className="info-container">
            <div className="info-icon-container">
                <div className="info-icon">
                    <KotlinLogo />
                </div>
                <div className="info-icon">
                    <ReactLogo />
                </div>
                <div className="info-icon">
                    <CppLogo />
                </div>
            </div>
            <h3>Lorem Ipsum</h3>
            <p>{content[index]}</p>
        </div>
    )
}

export default InfoSection

InfoSection.propTypes = {
    index: PropTypes.number.isRequired,
}
