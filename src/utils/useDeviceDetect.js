import { useState, useEffect } from 'react'

const verifyDevice = (width) => {
    return {
        isMobile: width <= 767,
        isTablet: width > 767 && width <= 1024,
        isMobileOrTablet: width <= 1024,
        isTabletOrDesktop: width > 767,
        isDesktop: width > 1024,
        windowWidth: width,
        windowHeight: window.innerHeight,
    }
}

export default function useDeviceDetect() {
    const initialState = verifyDevice(innerWidth)
    const [device, setDevice] = useState(initialState)

    useEffect(() => {
        const listenResize = () => {
            const { innerWidth } = window
            const device = verifyDevice(innerWidth)
            setDevice(device)
        }

        window.addEventListener('resize', listenResize)
        return () => window.removeEventListener('resize', listenResize)
    }, [])

    return device
}
