'use client'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import '../public/sass/pages/news.scss';

const Newsletter = () => {
    return (
        <>
            <section className="news">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_news">
                                <div className="background_news">
                                    <div className="bg"></div>
                                </div>
                                <Row className='align-items-center'>
                                    <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                        <div className="left_news">
                                            <div className="content">
                                                <p>newsletter</p>
                                                <h3>Everything interior design in your inbox.</h3>
                                            </div>
                                            <ul className='checks'>
                                                {
                                                    [...Array(3)].map((_, i) => (
                                                        <li key={i}>
                                                            <div className="icon">
                                                                <FontAwesomeIcon icon={faCheck} />
                                                            </div>
                                                            <p>Odio error vel autem et ut earum</p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </Col>
                                    <Col xxl={8} xl={8} lg={8} md={12} sm={12} xs={12}>
                                        <div className="right_news">
                                            <Form className="form">
                                                <p>Frequency</p>
                                                <Row>
                                                    <Col xxl={6} xl={6} lg={5} md={6} sm={5} xs={12}>
                                                        <div className="left_form">
                                                            <div className="checks_area">
                                                                {['weekly', 'bi-weekly', 'monthly'].map((ele, i) => (
                                                                    <Form.Check
                                                                        key={i}
                                                                        type={'radio'}
                                                                        id={`check_${i}`}
                                                                        name='radio'
                                                                        label={ele}
                                                                    />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xxl={6} xl={6} lg={7} md={6} sm={7} xs={12}>
                                                        <div className="right_form">
                                                            <Form.Group className='form-group' controlId='name'>
                                                                <Form.Label>name</Form.Label>
                                                                <div className="inputs">
                                                                    <Form.Control type='text' placeholder='First Name' />
                                                                    <Form.Control type='text' placeholder='Last Name' />
                                                                </div>
                                                            </Form.Group>
                                                            <Form.Group className='form-group' controlId='email'>
                                                                <Form.Label>email address</Form.Label>
                                                                <Form.Control type='email' placeholder='Your Email' />
                                                            </Form.Group>
                                                            <Button type='submit' className='btn-primary'>Subscribe</Button>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Newsletter
