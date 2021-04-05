import './styles.css'
import * as React from 'react'
import { useSpring, animated } from 'react-spring'
import Typist from 'react-typist'

const commands = [
    "console.log('Hello there\\nI am Rolud')",
    'std::cout << "Hello there\\nI am Rolud" << std::endl;',
    'printf("Hello there\\nI am Rolud");',
    'print "Hello there\\nI am Rolud"',
    'PRINT "Hello there\\nI am Rolud"',
    'PRINT *, "Hello there\\nI am Rolud"',
    'DISPLAY "Hello there\\nI am Rolud".',
    'System.out.println("Hello there\\nI am Rolud");',
]
const HomePage = () => {
    const [titleProps, titleSpring] = useSpring(() => ({
        marginLeft: -1000,
    }))

    const consoleCommand = Math.floor(Math.random() * commands.length)

    return (
        <div className="container">
            <div className="title">
                <animated.h1 style={titleProps}>
                    Hello there!
                    <br />I am Rolud
                </animated.h1>
            </div>
            <Typist
                onTypingDone={() => {
                    titleSpring.set({ marginLeft: 0 })
                }}>
                <p className="console">~$ {commands[consoleCommand]}</p>
            </Typist>
        </div>
    )
}

export default HomePage
