'use client'
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import '../public/sass/pages/about.scss'; 

const About = () => {
    const aboutRef = useRef();
    const contentRef = useRef();
    const [animation, setAnimation] = useState(false)
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ref = useRef(null);
    const btn = useRef(null)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    function animate(entries) {
        const [entry] = entries;
        let timer
        if (entry.isIntersecting) {
            timer = setTimeout(() => {
                setAnimation(entry.isIntersecting)
            }, 1000)
        }
        if (!entry.isIntersecting) {
            clearTimeout(timer)
        }
    }


    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log('object')
            const attractorRect = btn.current.getBoundingClientRect();
            const centerX = attractorRect.left + attractorRect.width / 2;
            const centerY = attractorRect.top + attractorRect.height / 2;

            const speed = 0.4;

            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;

            let newX = deltaX * speed;
            let newY = deltaY * speed;

            setPosition({ x: newX, y: newY });
        };
        ref.current.addEventListener('mousemove', handleMouseMove);

        return () => {
            ref.current.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {

        const observer = new IntersectionObserver(animate, options)
        if (aboutRef.current) {
            observer.observe(aboutRef.current)
        }


        return () => {
            observer.unobserve(aboutRef.current)
        }

    }, [aboutRef, options])

    useEffect(() => {
        let scrollHeight = window.innerHeight * 4;
        let contentPosition = 0;

        function loop() {
            const scrollOffset = window.scrollY;
            const scrollPercent = scrollOffset / scrollHeight || 0;
            contentPosition += (scrollPercent - contentPosition) * 0.04;

            const transformString = `translateY(calc(-${contentPosition * 120}% + 40%))`;
            if (contentRef.current) {
                contentRef.current.style.transform = transformString;
            }

            requestAnimationFrame(loop);
        }

        loop(); // Start the animation loop

    }, []);

    return (
        <>
            <section className={`about ${animation ? 'animate' : ''}`} ref={aboutRef}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_about">
                                <div className="content_wrapper" ref={contentRef}>
                                    <p className="subtitle">about nside</p>
                                    <div className="title">
                                        <h3>We're innovating the way companies reinvent their office spaces for the remote workforce.</h3>
                                        <p className='author'>JESSICA POINT, CEO</p>
                                    </div>
                                    <div className="btn_wrapper" ref={ref} >
                                        <div className="circle_btn" style={{ left: position.x, top: position.y }} ref={btn} onClick={handleShow}>
                                            <FontAwesomeIcon icon={faPlay} />
                                        </div>
                                    </div>
                                </div>
                                <div className="background_wrapper">
                                    <div className="bg"></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Modal show={show} onHide={handleClose}>

                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>

            </Modal>
        </>
    )
}

export default About
