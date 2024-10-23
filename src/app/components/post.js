'use client'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link';
import Sidebar from './sidebar';
import post_1 from '../public/images/post_image.jpeg';
import Image from 'next/image';
import '../public/sass/pages/post.scss';

const Post = () => {

    const [cardData, setCardData] = useState([
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false },
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false },
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false },
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false },
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false },
        { src: post_1, title: '5 principle of effective web design', desc: 'lorem ipsum dollar sit ammet consectetur adipising elit', type: 'Floor Plans', date: '4.5.21', visible: false }
    ]);

    const headingRef = useRef(null);
    const [showTop, setShowTop] = useState(false);
    const listRef = useRef([]);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    }

    function animate_2(entries) {
        const [entry] = entries
        setShowTop(entry.isIntersecting)
    }

    function animate(enteries) {
        enteries.forEach(entry => {
            const index = listRef.current.indexOf(entry.target)
            if (index !== -1) {
                setCardData((prev) => {
                    const newListData = [...prev]
                    newListData[index].visible = entry.isIntersecting
                    return newListData
                })
            }
        });
    }

    useEffect(() => {
        const observer_top = new IntersectionObserver(animate_2, options);
        const observer = new IntersectionObserver(animate, options);

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

    }, [headingRef, options, listRef]);




    return (
        <>
            <section className="post">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_post">
                                <div className="sidebar">
                                    <Sidebar />
                                </div>
                                <div className="right_side_content">
                                    <div className={`upper_post ${showTop ? 'animate' : ''}`} ref={headingRef}>
                                        <div className="left">
                                            <p>Recent Posts</p>
                                            <h3>What's new?</h3>
                                        </div>
                                        <div className="right">
                                            <div className="all_btn">
                                                <Link href={''}>view all posts</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lower_post">
                                        <ul className="post_wrapper">
                                            {
                                                cardData && cardData.map((card, i) => {
                                                    return (
                                                        <li key={i} ref={(ele) => listRef.current[i] = ele}>
                                                            <div className={`card_item ${card.visible ? 'show' : ''}`}>
                                                                <div className="card_top">
                                                                    <div className="image">
                                                                        <Image src={card.src} alt='card' title='...' priority={false} />
                                                                    </div>
                                                                    <div className="read">read</div>
                                                                </div>
                                                                <div className="card_bottom">
                                                                    <div className="top_content">
                                                                        <h3>{card.title}</h3>
                                                                        <p>{card.desc}</p>
                                                                    </div>
                                                                    <div className="bottom_content">
                                                                        <div className="left same">{card.type}</div>
                                                                        <div className="date same">{card.date}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
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

export default Post
