import './styles.css'
import * as React from 'react'
import styled from 'styled-components'
import { shuffle } from '../../utils/array'

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
    &:hover {
        transform-origin: center;

        ${TileTitle} {
            font-size: 1.8rem;
            color: #fafafa;
        }
        ${TileTitle}:after {
            transform: scaleX(1);
        }
    }
`

const SectionLeft = styled.section`
    height: 30%;
    display: flex;
    flex-direction: row;
`

const SectionRight = styled.section`
    height: 30%;
    display: flex;
    flex-direction: row;
`

const SectionCentral = styled.section`
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    color: #fafafa;
    font-size: 10rem;
`

const sectionLeftStyles = [
    { width: '25%' /* backgroundColor: '#300350' */ },
    { width: '45%' /* backgroundColor: '#94167F' */ },
    { width: '30%' /* backgroundColor: '#E93479' */ },
]
const sectionRightStyles = [
    { width: '55%' /* backgroundColor: '#F9AC53' */ },
    { width: '30%' /* backgroundColor: '#F62E97' */ },
    { width: '15%' /* backgroundColor: '#153CB4' */ },
]

const HomePage = () => {
    const [leftTileStyles, setLeftStyles] = React.useState(sectionLeftStyles)
    const [rightTileStyles, setRightStyles] = React.useState(sectionRightStyles)

    React.useEffect(() => {
        console.log('perform')
        setLeftStyles(shuffle(sectionLeftStyles))
        setRightStyles(shuffle(sectionRightStyles))
    }, [])

    return (
        <Wrapper>
            <SectionLeft>
                <Tile style={leftTileStyles[0]}>
                    <TileTitle onClick={() => window.open('https://github.com/rolud', '_blank')}>GitHub</TileTitle>
                </Tile>
                <Tile style={leftTileStyles[1]}>
                    <TileTitle onClick={() => window.open('https://instagram.com/rolud.dev', '_blank')}>
                        Instagram
                    </TileTitle>
                </Tile>
                <Tile style={leftTileStyles[2]}>
                    <TileTitle>Linkedin</TileTitle>
                </Tile>
            </SectionLeft>
            <SectionCentral>
                <Title>rolud</Title>
            </SectionCentral>
            <SectionRight>
                <Tile style={rightTileStyles[0]}>
                    <TileTitle>Twitter</TileTitle>
                </Tile>
                <Tile style={rightTileStyles[1]}>
                    <TileTitle onClick={() => window.open('https://stackoverflow.com/users/9686027/rolud', '_blank')}>
                        Stack Overflow
                    </TileTitle>
                </Tile>
                <Tile style={rightTileStyles[2]}>
                    <TileTitle>CV</TileTitle>
                </Tile>
            </SectionRight>
        </Wrapper>
    )
}

export default HomePage
