import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../utils/devices'

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    padding: 10rem;
`
const NotFoundTitle = styled.h1`
    font-size: 14rem;
    margin: 0;
    padding: 0;
`

export const Title = styled.h2`
    font-size: 4rem;

    @media ${device.tablet.max} {
        font-size: 5rem;
    }

    @media ${device.mobileL.max} {
        font-size: 3rem;
    }
`

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Title onClick={() => navigate('/')}>rolud</Title>
            <NotFoundTitle>404</NotFoundTitle>
            <p style={{ fontSize: '1.4rem' }}>Ups, seems there is nothing here</p>
        </Wrapper>
    )
}

export default NotFoundPage
