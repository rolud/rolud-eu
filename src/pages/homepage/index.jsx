import './styles.css'
import * as React from 'react'

import { Wrapper, TileWrapper, Tile, TileTitle, SectionCentral, Title } from './styled-components'
// https://www.schemecolor.com/vaporwave.php

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
                        About me
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
