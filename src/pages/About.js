import React from 'react'
import {Helmet} from "react-helmet";
import { Button } from 'shards-react'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import mataura from '../assets/images/Mataura.png';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About | Patterns</title>
                <meta name="description" content="This is about page meta data"/>
            </Helmet>
        <MDBContainer className="">
            <MDBRow className="hero-section">
                <MDBCol lg="8" md="8" className="align-self-center">
                    <h1 className="font-weight-bold display-3">About Company</h1>
                    <p className="lead w-75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut 
                    convallis et purus ut imperdiet. 
                    Cras finibus suscipit consectetur. Nulla ac pellentesque ipsum. 
                    Praesent faucibus ipsum sit amet risus feugiat, ut ornare neque 
                    rutrum. Ut aliquam erat non sollicitudin blandit. Ut fringilla 
                    auctor sapien eget vestibulum. Nunc egestas, ante vel vulputate 
                    pharetra, turpis magna ultricies ex, vel facilisis nunc mauris 
                    eu massa. Suspendisse sit amet elit ut mauris feugiat congue 
                    sed sit amet leo. Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit. Ut Cras finibus suscipit consectetur
                    convallis et purus ut imperdiet. 
                    </p>
                    <div className="d-flex">
                        <Button className="mx-0 text-capitalize" squared theme="dark">
                            Get on Android
                        </Button>
                        <Button className="mx-0 mx-4 text-capitalize" squared outline theme="dark">
                            Get on IOS
                        </Button>
                    </div>
                </MDBCol>
                <MDBCol style={{ backgroundImage: `url(${mataura})`, backgroundSize: `cover` }} className="pr-0"/>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default About
