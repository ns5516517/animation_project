import Image from 'next/image'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../public/images/img.svg';
import  '../public/sass/pages/client.scss';

const Client = () => {
    return (
        <>
            <section className="client" id='scroll'>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_client">
                                <div className="subtitle">
                                    <p>corporate clients</p>
                                    <div className="horizontal_line"></div>
                                </div>
                                <div className="image_wrapper">
                                    <div className="img">
                                        <Image src={img} alt='image' title='...' priority={false} />
                                    </div>
                                    <div className="img">
                                        <Image src={img} alt='image' title='...' priority={false} />
                                    </div>
                                    <div className="img">
                                        <Image src={img} alt='image' title='...' priority={false} />
                                    </div>
                                    <div className="img">
                                        <Image src={img} alt='image' title='...' priority={false} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Client
