'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import list_1 from '../public/images/banner_3.jpeg';
import Image from 'next/image';
import '../public/sass/pages/listing.scss';

const Listing = () => {
    const [listData, setListData] = useState([
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false },
        { src: list_1, location: 'Miami, Florida', type: 'Allstate Employee Lounge', date: '1.22.22', visible: false }
    ]);

    const listRef = useRef([]);

    const options = {
        roo: null,
        rootMargin: '0px',
        threshold: 0.5
    }

    function animate(enteries) {
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

    useEffect(() => {
        const observer = new IntersectionObserver(animate, options)
        if (listRef.current) {
            listRef.current.map((list) => {
                observer.observe(list)
            })

        }
        return () => {
            listRef.current.map((list) => {
                observer.unobserve(list)
            })
        }
    }, [])

    return (
        <>
            <section className="listing">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_listing">
                                <ul>
                                    {
                                        listData.map((list, i) => {
                                            return (
                                                <li key={i}
                                                    ref={(ele) => listRef.current[i] = ele}

                                                >
                                                    <div className={` inner_card ${list.visible ? 'show' : ''} `}>
                                                        <div className="image">
                                                            <Image src={list.src} alt='image' title='...' priority={false} />
                                                        </div>
                                                        <div className="content">
                                                            <div className="top">
                                                                <p>{list.location}</p>
                                                                <h3>{list.type}</h3>
                                                            </div>
                                                            <div className="bottom">
                                                                <div className="date">{list.date}</div>
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
                        </Col>
                    </Row> 
                </Container>
            </section>
        </>
    )
}

export default Listing
