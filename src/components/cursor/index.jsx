import * as React from 'react'

const Cursor = () => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [hidden, setHidden] = React.useState(false)
    const [click, setClick] = React.useState(false)

    React.useEffect(() => {
        const mouseMove = (event) => {
            setPosition({ x: event.clientX, y: event.clientY })
        }

        const mouseEnter = () => {
            setHidden(false)
        }

        const mouseLeave = () => {
            setHidden(true)
        }

        const mouseUp = () => {
            setClick(false)
        }

        const mouseDown = () => {
            setClick(true)
        }

        document.addEventListener('mousemove', mouseMove, { passive: false })
        document.addEventListener('mouseenter', mouseEnter)
        document.addEventListener('mouseleave', mouseLeave)
        document.addEventListener('mouseup', mouseUp)
        document.addEventListener('mousedown', mouseDown)

        return () => {
            document.removeEventListener('mousemove', mouseMove)
            document.removeEventListener('mouseenter', mouseEnter)
            document.removeEventListener('mouseleave', mouseLeave)
            document.removeEventListener('mouseup', mouseUp)
            document.removeEventListener('mousedown', mouseDown)
        }
    }, [])

    return (
        <>
            <div
                className={'cursor ' + (hidden ? 'cursor--hidden' : ' ') + (click ? 'cursor--clicked' : ' ')}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
            <div
                className={'cursor--dot ' + (hidden ? 'cursor--dot--hidden' : ' ')}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </>
    )
}

export default Cursor
