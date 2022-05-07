import * as React from 'react'
import { NavContent, NavItem, NavTitle, NavWrapper } from './styled-components'
import PropTypes from 'prop-types'
import useWindowDimensions from '../../hooks/use-window-dimensions'
import { sizes } from '../../utils/devices'
import Icon from '../icon'
import { useNavigate } from 'react-router-dom'
import ResumeIT from '../../assets/pdfs/CV_Rocco_Luigi_Scarcella.pdf'
import ResumeEN from '../../assets/pdfs/Resume_Rocco_Luigi_Scarcella.pdf'

const NavBarItem = ({ text, onClick }) => {
    return (
        <NavItem onClick={onClick}>
            <NavTitle>{text}</NavTitle>
        </NavItem>
    )
}

const NavBarIcon = ({ icon, onClick }) => {
    return (
        <NavItem onClick={onClick}>
            <Icon name={icon} />
        </NavItem>
    )
}

const NavBarDesktop = () => {
    const navigate = useNavigate()

    return (
        <NavContent>
            <NavBarItem text="GitHub" onClick={() => window.open('https://github.com/rolud', '_blank')} />
            <NavBarItem
                text="Linkedin"
                onClick={() => window.open('https://linkedin.com/in/roccoluigiscarcella', '_blank')}
            />
            <NavBarItem text="Instagram" onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')} />
            <NavBarItem text="About me" onClick={() => navigate('/about')} />
            <a
                href={/^it\b/.test(navigator.language) ? ResumeIT : ResumeEN}
                style={{ textDecorationLine: 'none' }}
                download>
                <NavBarItem text="CV" />
            </a>
        </NavContent>
    )
}

const NavBarMobile = () => {
    const navigate = useNavigate()
    return (
        <>
            <NavContent>
                <NavBarIcon icon="github" onClick={() => window.open('https://github.com/rolud', '_blank')} />
                <NavBarIcon
                    icon="linkedin"
                    onClick={() => window.open('https://linkedin.com/in/roccoluigiscarcella', '_blank')}
                />
                <NavBarIcon icon="instagram" onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')} />
                <NavBarIcon icon="info" onClick={() => navigate('/about')} />
                <NavBarIcon icon="file" onClick={() => console.log('todo')} />
            </NavContent>
        </>
    )
}

const NavBar = () => {
    const { width: windowWidth } = useWindowDimensions()

    console.log('windows width', windowWidth, sizes.tablet.max)

    return <NavWrapper>{windowWidth < sizes.mobileL.max ? <NavBarMobile /> : <NavBarDesktop />}</NavWrapper>
}

NavBarItem.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

NavBarIcon.propTypes = {
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default NavBar
