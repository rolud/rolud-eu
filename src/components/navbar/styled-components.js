import styled from 'styled-components'
import { device } from '../../utils/devices'
import navbarBackground from '../../assets/pngs/navbar_background.png'

export const NavWrapper = styled.div`
    height: 100vh;
    width: 12rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media ${device.mobileL.max} {
        width: 100vw;
        height: 4rem;
    }
`
export const NavBackground = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 20%;
    background: url(${navbarBackground});
    opacity: 0.4;
`

export const NavContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem 0 2rem;

    @media ${device.mobileL.max} {
        flex-direction: row;
        width: 100vw;
        height: unset;
        margin: unset;
        justify-content: space-around;
    }
`

export const NavTitle = styled.h4`
    color: #fafafa;
    transition: 1s;
    position: relative;
    margin: 1.3rem 0;

    &:after {
        content: '';
        position: absolute;
        background: #fafafa;
        width: 100%;
        display: block;
        top: 0;
        bottom: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
        mix-blend-mode: difference;
    }

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }
`

export const NavItem = styled.div`
    box-sizing: border-box;
    transition: 1s;
    display: flex;
    flex-direction: row;

    &:hover {
        @media (hover) {
            ${NavTitle}:after {
                transform: scaleX(1);
            }
        }
    }
`
