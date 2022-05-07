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

    @media ${device.tablet.max} {
        padding: 4rem;
    }

    @media ${device.mobileL.max} {
        padding: 2rem;
    }
`

const NotFoundTitle = styled.h1`
    font-size: 14rem;
    margin: 0;
    padding: 0;

    @media ${device.tablet.max} {
        font-size: 10rem;
    }

    @media ${device.mobileM.max} {
        font-size: 6rem;
    }
`

const Content = styled.p`
    font-size: 1.5rem;
    text-align: end;

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }
`

export const Title = styled.h2`
    font-size: 4rem;

    @media ${device.tablet.max} {
        font-size: 3rem;
    }
`

const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Title onClick={() => navigate('/')}>rolud</Title>
            <NotFoundTitle>404</NotFoundTitle>
            <Content>Ups, seems there is nothing here</Content>
        </Wrapper>
    )
}

export default NotFoundPage
