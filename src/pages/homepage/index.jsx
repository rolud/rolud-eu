import './styles.css'
import * as React from 'react'
import styled from 'styled-components'
import { device } from '../../utils/devices'

// https://www.schemecolor.com/vaporwave.php

const Wrapper = styled.section`
    // background-color: #66003b;
    background-color: #101010;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

const TileTitle = styled.h3`
    // color: #fafafa;
    color: #fafafa;
    font-size: 1.5rem;
    transition: 1s;
    position: relative;
    cursor: pointer;

    &:after {
        content: '';
        position: absolute;
        height: 3px;
        background: #fafafa;
        width: 100%;
        display: block;
        bottom: 0;
        transform: scaleX(0);
        // transform-origin: left;
        transition: transform 500ms ease;
    }

    @media ${device.mobileL.max} {
        font-size: 1rem;
    }
`

const Tile = styled.div`
    // border: 1px solid white;
    box-sizing: border-box;
    width: 100%;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    flex: 1;
    &:hover {
        transform-origin: center;

        @media (hover) {
            ${TileTitle} {
                font-size: 1.8rem;
            }
            ${TileTitle}:after {
                transform: scaleX(1);
            }
        }
    }
`

const TileWrapper = styled.section`
    height: 30%;
    display: flex;
    flex-direction: row;

    @media ${device.mobileL.max} {
        height: 20%;
        display: flex;
        flex-direction: column;
        margin: 5% 0;
    }
`

const SectionCentral = styled.section`
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${device.mobileL.max} {
        height: 60%;
    }
`

const Title = styled.h1`
    color: #fafafa;
    font-size: 10rem;

    @media ${device.tablet.max} {
        font-size: 3rem;
    }
`

const HomePage = () => {
    return (
        <Wrapper>
            <TileWrapper>
                <Tile>
                    <TileTitle onClick={() => window.open('https://github.com/rolud', '_blank')}>GitHub</TileTitle>
                </Tile>
                <Tile>
                    <TileTitle onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')}>
                        Instagram
                    </TileTitle>
                </Tile>
                <Tile>
                    <TileTitle onClick={() => window.open('https://linkedin.com/in/roccoluigiscarcella', '_blank')}>
                        Linkedin
                    </TileTitle>
                </Tile>
            </TileWrapper>
            <SectionCentral>
                <Title>rolud</Title>
            </SectionCentral>
            <TileWrapper>
                <Tile>
                    <TileTitle onClick={() => window.open('https://twitter.com/roluds', '_blank')}>Twitter</TileTitle>
                </Tile>
                <Tile>
                    <TileTitle onClick={() => window.open('https://stackoverflow.com/users/9686027/rolud', '_blank')}>
                        Stack Overflow
                    </TileTitle>
                </Tile>
                <Tile>
                    <TileTitle>CV</TileTitle>
                </Tile>
            </TileWrapper>
        </Wrapper>
    )
}

export default HomePage
