import './styles.css'
import * as React from 'react'
import { useSpring, animated } from 'react-spring'
import Typist from 'react-typist'
import useWindowDimensions from '../../components/hooks/use-window-dimensions'
import ScrollArrow from '../../components/scroll-arrow'

const commands = [
    "console.log('Hello there!\\nI am Rolud')",
    'std::cout << "Hello there!\\nI am Rolud" << std::endl;',
    'printf("Hello there!\\nI am Rolud");',
    'print "Hello there!\\nI am Rolud"',
    'PRINT "Hello there!\\nI am Rolud"',
    'PRINT *, "Hello there!\\nI am Rolud"',
    'DISPLAY "Hello there!\\nI am Rolud".',
    'System.out.println("Hello there!\\nI am Rolud");',
]

const HomePage = () => {
    const { width } = useWindowDimensions()

    console.log('width', width)

    const [showCommandPromp, setShowCommandPromp] = React.useState(true)

    const [titleProps, titleSpring] = useSpring(() => ({
        marginLeft: width < 900 ? -1000 : -(width * 2),
    }))

    const consoleCommand = Math.floor(Math.random() * commands.length)

    return (
        <div>
            <div className="container section-1">
                <div className="title-wrapper">
                    <animated.h1 className="title text-s1" style={titleProps}>
                        Hello there!
                        <br />I am Rolud
                    </animated.h1>
                    <div className={showCommandPromp ? null : 'scroll-arrow'} style={{ width: 50, height: 50 }}>
                        {!showCommandPromp ? <ScrollArrow /> : null}
                    </div>
                </div>
                {showCommandPromp ? (
                    <Typist
                        className="console"
                        onTypingDone={() => {
                            titleSpring.set({ marginLeft: 0 })
                            setTimeout(() => {
                                setShowCommandPromp(false)
                            }, 2000)
                        }}>
                        <p className="console">~$ {commands[consoleCommand]}</p>
                    </Typist>
                ) : null}
            </div>
            <div className="container section-2">
                <div className="title-wrapper">
                    <h1 className="title text-s2">in progress</h1>
                </div>
            </div>
        </div>
    )
}

export default HomePage
