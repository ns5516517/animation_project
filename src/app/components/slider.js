'use client'
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import image from '../public/images/slide.jpeg';
import '../public/sass/pages/slider.scss';


const Slider = () => {

    const [index, setIndex] = useState(0)

    const slides = [
        {
            src: image, name: 'Samantha Vohnhale', location: 'San Francisco, California', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.'
        },
        {
            src: image, name: 'Samantha Vohnhale', location: 'San Francisco, California', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.'
        },
        {
            src: image, name: 'Samantha Vohnhale', location: 'San Francisco, California', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.'
        },
        {
            src: image, name: 'Samantha Vohnhale', location: 'San Francisco, California', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.'
        },
        {
            src: image, name: 'Samantha Vohnhale', location: 'San Francisco, California', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.'
        },
    ];

    function getActiveIndex(swiper) {
        setIndex(swiper.activeIndex)
        console.log(swiper)
    }

    return (
        <>
            <section className="slider">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_slider">
                                <Swiper
                                    navigation={{
                                        nextEl: '.next',
                                        prevEl: '.prev'
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                    // loop={true}
                                    spaceBetween={20}
                                    onSlideChange={getActiveIndex}
                                >
                                    <div className="slider_area">
                                        {
                                            slides.map((slide, i) => {
                                                return (
                                                    <SwiperSlide key={i} className={index === i ? 'in' : 'out'}>
                                                        <div className="slide">
                                                            <Row>
                                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                                    <div className="image">
                                                                        <Image src={slide.src} alt='image' title='...' priority={false} />
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12}>
                                                                    <div className="center">
                                                                        <div className="person_name"><span>{slide.name}</span></div>
                                                                        <div className="location"><span>{slide.location}</span></div>
                                                                    </div>
                                                                </Col>
                                                                <Col xxl={4} xl={4} lg={4} md={6} sm={12} xs={12}>
                                                                    <div className="content">
                                                                        <p><span>{slide.desc}</span></p>
                                                                        <p><span>{slide.desc}</span></p>
                                                                    </div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="next btn-primary">Next</div>
                                    <div className="prev btn-primary">Previous</div>

                                </Swiper>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Slider
