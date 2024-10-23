'use client'
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../public/sass/pages/service.scss';

const Service = () => {

    const [cards, setCards] = useState([
        {visible: false, title: 'Space Planning', desc: 'The customer is very important, the customer will be followed by the customer. Mauris accumsan urn eu quiver element.', btn_text: 'schedule a call' },
        {visible: false, title: 'Custom Furniture', desc: 'The customer is very important, the customer will be followed by the customer. Mauris accumsan urn eu quiver element.', btn_text: 'schedule a call' },
        {visible: false, title: 'Furniture Layouts', desc: 'The customer is very important, the customer will be followed by the customer. Mauris accumsan urn eu quiver element.', btn_text: 'schedule a call' }
    ]);

    const cntRef = useRef([]);
    const headingRef = useRef(null);
    const [showTop, setShowTop] = useState(false)

    const options = {
        root: null,
        rootMargin: '0px',
        threshold:  0.6
    }

    function animate(entries) {
        entries.forEach(entry => {
            const index = cntRef.current.indexOf(entry.target)
            if (index !== -1) {
                setCards((prev) => {
                    const newListData = [...prev]
                    newListData[index].visible = entry.isIntersecting
                    return newListData
                })
            }
       });
    }

    function animate_2(entries) {
        const [entry] = entries
        setShowTop(entry.isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(animate, options);
        const observer_top = new IntersectionObserver(animate_2, options);
        if (cntRef.current) {
            cntRef.current.map((list) => {
                observer.observe(list)
            })
        }
        if(headingRef.current){
            observer_top.observe(headingRef.current)
        }
        return () => {
            cntRef.current.map((list) => {
                observer.unobserve(list)
            })
            observer_top.unobserve(headingRef.current)
        }
    }, [cntRef, headingRef,options]);

    return (
        <>
            <section className="service">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_service">
                                <div className={`top ${showTop ? 'animate' : ''}`} ref={headingRef}>
                                    <div className="left">
                                        <p>services</p>
                                        <h3>We do it best.</h3>
                                    </div>
                                    <div className="right">
                                        <div className="all_btn">
                                            <Link href={''}>view all Services</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <ul className="card_wrapper" >
                                        {
                                            cards.map((card, i) => {
                                                return (
                                                    <li key={i} className={card.visible ? 'show' : ''} ref={(ele) => cntRef.current[i] = ele}>
                                                        <div className="inner_card">
                                                            <div className="icon"><FontAwesomeIcon icon={faMedium} /></div>
                                                            <div className="content">
                                                                <h3>{card.title}</h3>
                                                                <p>{card.desc}</p>
                                                            </div>
                                                            <div className="btn_area">
                                                                <Link href={''}>{card.btn_text}</Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                )
                                            })
                                        }
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

export default Service
