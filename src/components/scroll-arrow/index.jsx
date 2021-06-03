import { animated, useSpring } from 'react-spring'
import * as React from 'react'
import SvgArrow from './components/svg-arrow'

const ScrollArrow = () => {
    const arrowStyles = useSpring({
        from: { y: 0 },
        to: [{ y: 30 }, { y: 0 }],
        loop: true,
        config: {
            mass: 10,
            friction: 50,
        },
    })

    return (
        <animated.div style={arrowStyles}>
            <SvgArrow />
        </animated.div>
    )
}

export default ScrollArrow
