import styled from 'styled-components'
import { device } from '../../utils/devices'

export const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 12rem;

    @media ${device.mobileL.max} {
        height: unset;
        width: 100vw;
        margin-right: unset;
        margin-bottom: 4rem;
    }
`

export const Title = styled.h1`
    color: #fafafa;
    font-size: 10rem;

    @media ${device.tablet.max} {
        font-size: 5rem;
    }

    @media ${device.mobileL.max} {
        font-size: 3rem;
    }
`
