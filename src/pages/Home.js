import React from 'react'
import {Helmet} from "react-helmet";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'shards-react'
import inn from '../assets/images/Inn.png'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="This is home meta data"/>
            </Helmet>
        <MDBContainer className="" fluid>
            <MDBRow className="hero-section">
                <MDBCol className="align-self-center px-5">
                    <h1 className="font-weight-bold display-3">Landing Page</h1>
                    <p className="lead w-75">
                    Generate font combinations with deep learningGenerate font combinations with deep learning
                    </p>
                    <Button className="mx-0 text-capitalize" squared theme="dark">
                        Get Started
                    </Button>
                </MDBCol>
                <MDBCol style={{ backgroundImage: `url(${inn})`, backgroundSize: `cover` }} className="pr-0"/>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default Home
