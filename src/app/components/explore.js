'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../public/sass/pages/explore.scss';

const Explore = () => { 
    const [show, setShow] = useState(false);
    const parentRef = useRef(null)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    function animate(entries) {
        const [entry] = entries;
        setShow(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(animate, options)
        if (parentRef.current) {
            observer.observe(parentRef.current)
        }
        return () => {
            observer.unobserve(parentRef.current)
        }
    }, [])

    return (
        <>
            <section className="explore">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className={`parent_explore ${show ? 'show' : ''}`} ref={parentRef}>
                                <div className="inner_explore">
                                    <div className="explore_bg">
                                        <div className="bg"></div>
                                    </div>
                                    <div className="content">
                                        <div className="title">
                                            <p className={show ? 'show' : ''}>
                                                <span>Explore our work</span>
                                            </p>
                                            <h3 className={show ? 'show' : ''}>
                                                <span>See what we can do together.</span>
                                            </h3>
                                        </div>
                                        <div className={`btn_area ${show ? 'show' : ''}`}>
                                            <Link href={''}>view all projects</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className={`project_links ${show ? 'show' : ''}`}>
                                    <ul>
                                        <li>
                                            <Link href={''}>space planning</Link>
                                        </li>
                                        <li>
                                            <Link href={''}>custom Furniture </Link>
                                        </li>
                                        <li>
                                            <Link href={''}>Furniture layouts</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Explore
