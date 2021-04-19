import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {

    const {pathname} = useLocation()

    useEffect(()=> {
        window.scrollTo(0,0)
    }, [ pathname ])

    return null
}

export default ScrollToTop

// import into index.js and add it right above where you are rendering App.js
//This makes it so it will scroll to the top after each route
