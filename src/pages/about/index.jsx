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

export const Title = styled.h1`
    color: #fafafa;
    font-size: 4rem;

    @media ${device.tablet.max} {
        font-size: 5rem;
    }

    @media ${device.mobileL.max} {
        font-size: 3rem;
    }
`

const Content = styled.p`
    text-align: end;
    width: 70%;
`

const Link = styled.a`
    transition: 1s;
    position: relative;
    cursor: pointer !important;

    &:after {
        content: '';
        position: absolute;
        background: #fafafa;
        width: 100%;
        height: 100%;
        display: block;
        top: 0;
        left: 0;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 500ms ease;
        mix-blend-mode: difference;
    }

    &:hover:after {
        transform: scale(1);
    }
`

const AboutPage = () => {
    const navigate = useNavigate()
    return (
        <Wrapper>
            <Title onClick={() => navigate('/')}>rolud</Title>
            <Content>Hi, I am Rocco Luigi, a 27 years old software engineer, working as mobile developer.</Content>
            <Content>
                I studied computer science engineer in Turin, then I worked as Android developer. Now I am collaborating
                with&nbsp;
                <Link href="https://westudents.it" target="_blank">
                    WeStudents
                </Link>
                &nbsp;and&nbsp;
                <Link href="https://wezard.it" tarket="_blank">
                    Wezard
                </Link>
                &nbsp; as lead React Native developer.
            </Content>
        </Wrapper>
    )
}

export default AboutPage
