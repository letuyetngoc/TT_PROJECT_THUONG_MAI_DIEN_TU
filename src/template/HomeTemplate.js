import React from 'react'
import { useEffect } from 'react'
import { Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

export default function HomeTemplate(props) {

    const { Component, ...restProps } = props
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        < Route {...restProps} render={(propsRout) => {
            return <>
                <Header />
                <Component {...propsRout} />
                {/* <Footer /> */}
            </>
        }} />
    )
}
