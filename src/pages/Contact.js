import React from 'react'
import { Helmet } from 'react-helmet'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import { Button } from 'shards-react'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
        <MDBContainer className="" fluid>
            <MDBRow className="hero-section">
                <MDBCol className="align-self-center px-5">
                    <h1 className="font-weight-bold display-3">Get in Touch</h1>
                    <p className="lead w-75">
                    Generate font combinations with deep learningGenerate font combinations with deep learning
                    </p>
                    <form action="" method="POST">
                        <Button className="mx-0 text-capitalize" squared theme="dark">
                            Send Message
                        </Button>
                    </form>
                </MDBCol>
                <MDBCol style={{ backgroundImage: `url(https://products.ls.graphics/paaatterns/images/024-p-1080.png)` }} className="pr-0"/>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default Contact
