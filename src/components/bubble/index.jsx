import { animated, useTrail } from '@react-spring/web'
import * as React from 'react'
import './styles.css'

const fast = { tension: 1200, friction: 40 }
const slow = { mass: 10, tension: 200, friction: 50 }
const trans = (x, y) => `translate3d(${x}px, ${y}px, 0) translate3d(-50%, -50%, 0)`

const Bubble = () => {
    const [trail, ref] = useTrail(5, () => ({ xy: [0, 0], config: (i) => (i === 0 ? fast : slow) }))

    return (
        <>
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
                <filter id="bubble">
                    <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="30" />
                    <feColorMatrix in="blur" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7" />
                </filter>
            </svg>
            <div
                className="hooks-main"
                onMouseMove={(e) => {
                    console.log(`xy ${e.xy}`)
                    console.log(`x ${e.x} y ${e.y}`)
                    console.log(`x ${e.clientX} y ${e.clientY}`)
                    ref.current[0].set({ xy: [e.clientX, e.clientY] })
                }}>
                {trail.map((props, index) => (
                    // eslint-disable-next-line react/prop-types
                    <animated.div key={index} style={{ transform: props.xy.to(trans) }} />
                ))}
            </div>
        </>
    )
}

export default Bubble
