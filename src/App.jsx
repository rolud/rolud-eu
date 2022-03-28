import './App.css'
import HomePage from './pages/homepage'
import * as React from 'react'
// import Cursor from './components/cursor'
import styled from 'styled-components'
import NavBar from './components/navbar'
import { device } from './utils/devices'

const Main = styled.div`
    background-color: #101010;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;

    @media ${device.mobileL.max} {
        flex-direction: column;
    }
`

const PageWrapper = styled.div`
    background-color: #101010;
    height: 100vh;
    display: flex;
    flex: 1;
    flex-direction: row;

    @media ${device.mobileL.max} {
        flex-direction: column;
        height: unset;
        width: 100vw;
    }
`

const App = () => {
    return (
        <>
            {/* <Cursor /> */}
            <div className="App">
                <Main>
                    <NavBar />
                    <PageWrapper>
                        <HomePage />
                    </PageWrapper>
                </Main>
            </div>
        </>
    )
}

export default App
