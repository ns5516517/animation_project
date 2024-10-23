'use client'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import person from '../public/images/person.jpeg';
import Image from 'next/image';
import '../public/sass/pages/team.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Team = () => {
    const [showTop, setShowTop] = useState(false);
    const headingRef = useRef(null);
    const listRef = useRef([]);

    const [listData, setListData] = useState([
        {
            src: person, desig: 'ceo', name: 'Jessica Point', link: [
                { icon: <FontAwesomeIcon icon={faFacebookF} />, src_link: 'www.facebook.com' },
                { icon: <FontAwesomeIcon icon={faInstagram} />, src_link: 'www.instagram.com' },
                { icon: <FontAwesomeIcon icon={faLinkedinIn} />, src_link: 'www.LinkedIn.com' },
                { icon: <FontAwesomeIcon icon={faYoutube} />, src_link: 'www.Youtube.com' },
            ], visible: false
        },
        {
            src: person, desig: 'ceo', name: 'Jessica Point', link: [
                { icon: <FontAwesomeIcon icon={faFacebookF} />, src_link: 'www.facebook.com' },
                { icon: <FontAwesomeIcon icon={faInstagram} />, src_link: 'www.instagram.com' },
                { icon: <FontAwesomeIcon icon={faLinkedinIn} />, src_link: 'www.LinkedIn.com' },
                { icon: <FontAwesomeIcon icon={faYoutube} />, src_link: 'www.Youtube.com' },
            ], visible: false
        },
        {
            src: person, desig: 'ceo', name: 'Jessica Point', link: [
                { icon: <FontAwesomeIcon icon={faFacebookF} />, src_link: 'www.facebook.com' },
                { icon: <FontAwesomeIcon icon={faInstagram} />, src_link: 'www.instagram.com' },
                { icon: <FontAwesomeIcon icon={faLinkedinIn} />, src_link: 'www.LinkedIn.com' },
                { icon: <FontAwesomeIcon icon={faYoutube} />, src_link: 'www.Youtube.com' },
            ], visible: false
        }
    ]);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    function animate_list(enteries) {
        enteries.forEach(entry => {
            const index = listRef.current.indexOf(entry.target)
            if (index !== -1) {
                setListData((prev) => {
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
        const observer_top = new IntersectionObserver(animate_2, options);
        const observer = new IntersectionObserver(animate_list, options)

        if (headingRef.current) {
            observer_top.observe(headingRef.current)
        }
        if (listRef.current) {
            listRef.current.map((list) => {
                observer.observe(list)
            })
        }
        return () => {
            observer_top.unobserve(headingRef.current)
            listRef.current.map((list) => {
                observer.unobserve(list)
            })
        }

    }, [headingRef, options]);


    return (
        <>
            <section className="team">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_team">
                                <div className={`upper ${showTop ? 'animate' : ''}`} ref={headingRef}>
                                    <div className="left">
                                        <p>Our team</p>
                                        <h3>Behind the design.</h3>
                                    </div>
                                    <div className="right">
                                        <div className="all_btn">
                                            <Link href={''}>learn about nside</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom">
                                    <ul className='card_wrapper'>
                                        {
                                            listData.map((list, i) => {
                                                return (
                                                    <li key={i} className='card_item'
                                                        ref={(ele) => listRef.current[i] = ele}

                                                    >
                                                        <div className={` inner_card ${list.visible ? 'show' : ''} `}>
                                                            <div className="image">
                                                                <Image src={list.src} alt='image' title='...' priority={false} />
                                                            </div>
                                                            <div className="content">
                                                                <div className="top">
                                                                    <h3>{list.name}</h3>
                                                                    <p>{list.desig}</p>
                                                                </div>
                                                                <div className="down">
                                                                    <ul className='social'>
                                                                        {
                                                                            list.link.map((ele, ind) => {
                                                                                return (
                                                                                    <li className='links' key={ind}>
                                                                                        <Link href={ele.src_link}>{ele.icon}</Link>
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="view">view</div>
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

export default Team
