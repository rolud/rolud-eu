import * as React from 'react'
import { NavContent, NavItem, NavTitle, NavWrapper } from './styled-components'
import PropTypes from 'prop-types'
import useWindowDimensions from '../../hooks/use-window-dimensions'
import { sizes } from '../../utils/devices'
import Icon from '../icon'

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
    return (
        <NavContent>
            <NavBarItem text="GitHub" onClick={() => window.open('https://github.com/rolud', '_blank')} />
            <NavBarItem
                text="Linkedin"
                onClick={() => window.open('https://linkedin.com/in/roccoluigiscarcella', '_blank')}
            />
            <NavBarItem text="Instagram" onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')} />
            <NavBarItem text="About me" onClick={() => console.log('todo')} />
            <NavBarItem text="CV" onClick={() => console.log('todo')} />
        </NavContent>
    )
}

const NavBarMobile = () => {
    return (
        <>
            <NavContent>
                <NavBarIcon icon="github" onClick={() => window.open('https://github.com/rolud', '_blank')} />
                <NavBarIcon
                    icon="linkedin"
                    onClick={() => window.open('https://linkedin.com/in/roccoluigiscarcella', '_blank')}
                />
                <NavBarIcon icon="instagram" onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')} />
                <NavBarIcon icon="info" onClick={() => console.log('todo')} />
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
