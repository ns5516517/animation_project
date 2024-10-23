'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../public/sass/pages/banner.scss';

const Banner = () => {


    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [show, setShow] = useState(false)


    const ref = useRef(null);
    const btn = useRef(null)


    useEffect(() => {
        // const handleMouse = (e) => {
        //     const rect = ref.current.getBoundingClientRect();
        //     console.log(rect);
        //     // let x = (e.clientX - rect.left) / (-4);
        //     // let y = (e.clientY - rect.top) / (-4);
        //     let x = e.clientX - (rect.left - 10);
        //     let y = e.clientY - rect.top;

        //     btn.current.style.left = `${x}px`;
        //     btn.current.style.top = `${y}px`;
        //     btn.current.style.transform = `scale(1.1)`;
        // };

        // ref.current.addEventListener('pointermove', handleMouse);

        // return () => {
        //     ref.current.removeEventListener('pointermove', handleMouse);
        //     ref.current.addEventListener('mouseout', () => {
        //         btn.current.style.left = `50%`;
        //         btn.current.style.top = `50%`;
        //         btn.current.style.transform = `scale(1) translate(-50%, -50%)`;
        //     })
        // }
        setShow(true)

        const handleMouseMove = (e) => {
            console.log('object')
            const containerRect = ref.current.getBoundingClientRect();
            const attractorRect = btn.current.getBoundingClientRect();
            const centerX = attractorRect.left + attractorRect.width / 2;
            const centerY = attractorRect.top + attractorRect.height / 2;


            // Adjust the movement speed
            const speed = 0.5;

            // Calculate the direction to move the element
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            // Calculate new positions based on cursor movement
            let newX = deltaX * speed;
            let newY = deltaY * speed;



            console.log(newX, newY)

            setPosition({ x: newX, y: newY });
        };

        // Add mouse move listener
        ref.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            ref.current.removeEventListener('mousemove', handleMouseMove);
            setShow(false)
        };

    }, []);



    return (
        <>
            <section className="banner">
                <div className="hero">
                    <div className="overlay"></div>
                </div>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_banner">
                                <div className={`content ${show ? 'show' : ''}`}>
                                    <div className="subtitle">INSIDE innovation</div>
                                    <div className="title"><span>Interior design that matters.</span></div>
                                    <div className="call_btn">
                                        <Link href={''}>schedule a call</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="floating_area">
                    <div className="featured">
                        <div className="left_area">
                            <p>featured</p>
                        </div>
                        <div className="right_area">
                            <Link href={''}>
                                <div className="content">
                                    <p>austin, texas</p>
                                    <h5>metlife corporate space</h5>
                                </div>
                                <div className="icon">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="arrow_down" >
                        <div className="inner_box" ref={ref} >
                            <Link className="icon " href={'#scroll'} ref={btn} style={{ left: position.x, top: position.y }}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner
