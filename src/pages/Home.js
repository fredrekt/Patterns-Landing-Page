import React from 'react'
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="This is home meta data"/>
            </Helmet>
            <h1>Hello Home</h1>
        </div>
    )
}

export default Home
