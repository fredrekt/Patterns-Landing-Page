import React from 'react'
import { Helmet } from 'react-helmet';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'shards-react';
import { Input } from "baseui/input";
import { Textarea } from "baseui/textarea";
import tairi from '../assets/images/Taieri.png'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
        <MDBContainer className="">
            <MDBRow className="hero-section">
                <MDBCol md="8" lg="8" className="align-self-center ">
                    <h1 className="font-weight-bold display-3">Get in Touch</h1>
                    <p className="lead w-75">
                    Generate font combinations with deep learningGenerate font combinations with deep learning
                    </p>
                    <form action="" method="POST">
                        <div className="py-3 w-responsive">
                            <Input
                                placeholder="Your Name"
                                clearOnEscape
                            />
                        </div>
                        <div className="py-3 w-responsive">
                            <Input
                                placeholder="Your Email"
                                clearOnEscape
                            />
                        </div>
                        <div className="py-3 w-responsive">
                            <Input
                                placeholder="Your Subject"
                                clearOnEscape
                            />
                        </div>
                        <div className="py-3 w-responsive">
                            <Textarea
                                placeholder="Your Message"
                                clearOnEscape
                            />
                        </div>
                        <div className="py-3">
                            <Button className="mx-0 text-capitalize" squared theme="dark">
                                Send Message
                            </Button>
                        </div>
                    </form>
                </MDBCol>
                <MDBCol style={{ backgroundImage: `url(${tairi})`, backgroundSize: `cover` }} className="pr-0"/>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default Contact
