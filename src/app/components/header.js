'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Accordion, Button, Col, Container, Form, Row } from 'react-bootstrap';
import Link from 'next/link.js';
import Banner from './banner.js';
import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../public/sass/pages/header.scss';


const Header = () => {

    const nav_links = [
        { name: 'SERVICES', link: '/services' },
        { name: 'PROJECTS', link: '/projects' },
        { name: 'CONTACT', link: '/contact' },
    ];

    const drop_data = [
        {
            title: 'our team', btn_text: 'about us', list: [
                { name: 'jessica point', desig: 'CEO' },
                { name: 'ryan baser', desig: 'COO' },
                { name: 'carrie vath', desig: 'CMO' }
            ]
        },
        {
            title: 'Project Categories', btn_text: 'view all', list: [
                { name: 'jessica point' },
                { name: 'ryan baser' },
                { name: 'carrie vath' }
            ]
        },
        {
            title: 'News Categories', btn_text: 'view all', list: [
                { name: 'jessica point' },
                { name: 'ryan baser' },
                { name: 'carrie vath' }
            ]
        }
    ];

    const [toggle, setToggle] = useState(false);
    const ref = useRef(null);
    const navRef = useRef([]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            let scroller = window.scrollY
            console.log(scroll)
            ref.current.style.height = `calc(${scroller}% / 2)`
            navRef.current.map((val) => {
                if(scroller > 0) {
                    val.style.color = 'black'
                    console.log(val)
                }
                else{
                    val.style.color = 'white'
                }
            })
        })
        return () => {
            window.addEventListener('scroll', () => {
                let scroller = window.scrollY
                ref.current.style.height = `calc(${scroller}% / 2)`
            })
        }
    }, [])

    return (
        <>
            <section className={`header ${toggle ? 'change' : ''}`}>
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_header" >
                                <div className="bg_scroll" ref={ref}></div>
                                <div className="left">
                                    <div className="inner_left">
                                        <div className="logo">
                                            NSIDE.
                                        </div>
                                    </div>
                                    <div className="inner_right">
                                        <div className={`menu_bar ${toggle ? 'toggle' : ''}`} onClick={() => setToggle(!toggle)}>
                                            <div className={`bar ${toggle ? 'one' : ''}`}></div>
                                            <div className={`bar ${toggle ? 'center' : ''}`}></div>
                                            <div className={`bar ${toggle ? 'two' : ''}`}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                    <ul>
                                        {
                                            nav_links.map((ele, i) => (
                                                <li ref={(nav_item) => navRef.current[i] = nav_item}  key={i}><Link href={ele.link}>{ele.name}</Link></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className={`main_drop ${toggle ? 'show' : ''}`}>
                    <div className={`inner_drop  ${toggle ? 'show' : ''}`}>
                        <div className="top">
                            <div className="left">
                                <Form className='form'>
                                    <Form.Group className='form-group'>
                                        <Form.Control type='text' placeholder='Search projects...' />
                                    </Form.Group>
                                    <Button type='button' className='btn-primary'>Search</Button>
                                </Form>
                            </div>
                            <div className="right">
                                <ul>
                                    <li>
                                        <Link href={''}><FontAwesomeIcon icon={faInstagram} /></Link>
                                    </li>
                                    <li>
                                        <Link href={''}><FontAwesomeIcon icon={faFacebookF} /></Link>
                                    </li>
                                    <li>
                                        <Link href={''}><FontAwesomeIcon icon={faLinkedinIn} /></Link>
                                    </li>
                                    <li>
                                        <Link href={''}><FontAwesomeIcon icon={faYoutube} /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="bottom">
                            <Row>
                                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <div className="inner_bottom">
                                        <Row>
                                            {
                                                drop_data.map((item, i) => {
                                                    return (<Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} key={i} className='d-none d-lg-block'>
                                                        <div className={`list ${i == 2 ? 'last' : ''}`}>
                                                            <div className="upper">
                                                                <div className="left">
                                                                    <p>{item.title}</p>
                                                                </div>
                                                                <div className="right">
                                                                    <Link href={''}>{item.btn_text}</Link>
                                                                </div>
                                                            </div>
                                                            <div className="lower">
                                                                <ul>
                                                                    {
                                                                        item.list.map((ele, index) => (
                                                                            <li key={index}>
                                                                                <Link href={''}>
                                                                                    <div className="left_side">{ele.name}</div>
                                                                                    <div className="right_side">
                                                                                        <p className={!ele.desig ? 'icon' : ''}>{ele.desig ? ele.desig : <FontAwesomeIcon icon={faArrowRight} />}</p>
                                                                                    </div>
                                                                                </Link>
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    )

                                                })
                                            }
                                            <Accordion className='d-lg-none d-block'>
                                                {
                                                    drop_data.map((item, i) => {
                                                        return (<Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12} key={i}>
                                                            <Accordion.Item eventKey={i}>
                                                                <Accordion.Header className='upper'>
                                                                    <p>{item.title}</p>
                                                                </Accordion.Header>
                                                                <Accordion.Body className='lower'>
                                                                    <ul>
                                                                        {
                                                                            item.list.map((ele, index) => (
                                                                                <li key={index}>
                                                                                    <Link href={''}>
                                                                                        <div className="left_side">{ele.name}</div>
                                                                                        <div className="right_side">
                                                                                            <p className={!ele.desig ? 'icon' : ''}>{ele.desig ? ele.desig : <FontAwesomeIcon icon={faArrowRight} />}</p>
                                                                                        </div>
                                                                                    </Link>
                                                                                </li>
                                                                            ))
                                                                        }
                                                                        <li >
                                                                            <Link href={''}>
                                                                                <div className="left_side">
                                                                                    {item.btn_text}
                                                                                </div>
                                                                                <span className='right_side'><FontAwesomeIcon icon={faArrowRight} /></span>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                        </Col>
                                                        )
                                                    })}
                                            </Accordion>
                                            <ul className='small_screen d-lg-none d-flex'>
                                                {
                                                    nav_links.map((ele, i) => (
                                                        <li key={i}><Link href={ele.link}>{ele.name}</Link></li>
                                                    ))
                                                }
                                            </ul>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                    </div>
                </div>
            </section >
            <Banner />
        </>
    )
}

export default Header
