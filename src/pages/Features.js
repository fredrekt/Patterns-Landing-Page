import React from 'react'
import { Helmet } from 'react-helmet'
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact'
import {
    Card,
    StyledBody,
    StyledAction
  } from "baseui/card";
import { Button } from "baseui/button";
// import rag from '../assets/images/Rangitikei.png'

const Features = () => {
    return (
        <div>
            <Helmet>
                <title>Features | Patterns</title>
                <meta name="description" content="This is the features section"/>
            </Helmet>
        <MDBContainer className="hero-section py-5">
            <MDBRow className="py-5">
                <MDBCol>
                    <h1 className="font-weight-bold display-3 pt-5">
                        Features
                    </h1>
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol lg="3" md="3" className="align-self-center">
                    {/* <h1 className="font-weight-bold display-3">
                        Features
                    </h1> */}
                    <Card>
                    <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                    </StyledBody>
                    <StyledAction>
                        <Button
                        overrides={{
                            BaseButton: { style: { width: "100%" } }
                        }}
                        >
                        Button Label
                        </Button>
                    </StyledAction>
                    </Card>
                </MDBCol>
                <MDBCol lg="3" md="3" className="align-self-center ">
                    <Card>
                    <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                    </StyledBody>
                    <StyledAction>
                        <Button
                        overrides={{
                            BaseButton: { style: { width: "100%" } }
                        }}
                        >
                        Button Label
                        </Button>
                    </StyledAction>
                    </Card>
                </MDBCol>
                <MDBCol lg="3" md="3" className="align-self-center ">
                    <Card>
                    <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                    </StyledBody>
                    <StyledAction>
                        <Button
                        overrides={{
                            BaseButton: { style: { width: "100%" } }
                        }}
                        >
                        Button Label
                        </Button>
                    </StyledAction>
                    </Card>
                </MDBCol>
                <MDBCol lg="3" md="3" className="align-self-center ">
                    <Card>
                    <StyledBody>
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                        Proin ut dui sed metus pharetra hend rerit vel non
                        mi. Nulla ornare faucibus ex, non facilisis nisl.
                    </StyledBody>
                    <StyledAction>
                        <Button
                        overrides={{
                            BaseButton: { style: { width: "100%" } }
                        }}
                        >
                        Button Label
                        </Button>
                    </StyledAction>
                    </Card>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
        </div>
    )
}

export default Features
