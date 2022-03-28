import * as React from 'react'

const getWindowDimesions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return {
        width,
        height,
    }
}

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimesions())

    React.useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimesions())
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}

export default useWindowDimensions
