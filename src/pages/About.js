import React from 'react'
import {Helmet} from "react-helmet";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
                <meta name="description" content="This is about page meta data"/>
            </Helmet>
            <h1>Hello about</h1>
        </div>
    )
}

export default About
