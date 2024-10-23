import { faFacebookF, faInstagram, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../public/images/logo.png';
import '../public/sass/pages/footer.scss';

const Footer = () => {

    const footer_data = [
        {
            title: 'navigation',
            links: [
                { arrow_icon: <FontAwesomeIcon icon={faArrowRight} />, name: "Team", link: "/team" },
                { arrow_icon: <FontAwesomeIcon icon={faArrowRight} />, name: "Projects", link: "/projects" },
                { arrow_icon: <FontAwesomeIcon icon={faArrowRight} />, name: "Services", link: "/services" },
                { arrow_icon: <FontAwesomeIcon icon={faArrowRight} />, name: "News", link: "/news" },
                { arrow_icon: <FontAwesomeIcon icon={faArrowRight} />, name: "Contact", link: "/contact" },
            ]
        },
        {
            title: 'follow us',
            links: [
                { icon: <FontAwesomeIcon icon={faInstagram} />, name: "@nside", link: "https://instagram.com/nside" },
                { icon: <FontAwesomeIcon icon={faFacebookF} />, name: "@nside", link: "https://facebook.com/nside" },
                { icon: <FontAwesomeIcon icon={faLinkedinIn} />, name: "@nside", link: "https://linkedin.com/nside" },
                { icon: <FontAwesomeIcon icon={faYoutube} />, name: "@nside", link: "https://youtube.com/nside" },
            ]
        }
    ]

    return (
        <>
            <section className="footer">
                <Container>
                    <Row>
                        <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                            <div className="parent_footer">
                                <div className="inner_parent_footer">
                                    <Row>
                                        <Col xxl={4} xl={4} lg={4} md={12} sm={12} xs={12}>
                                            <div className="footer_title">
                                                <div className="image">
                                                    <Image src={logo} alt='image' title='...' priority={false} />
                                                </div>
                                                <div className="content">
                                                    <h4>about us</h4>
                                                    <p>
                                                        Mauris accumsan urna eu pharetra elementum. Suspendisse potenti.Vestibulum ut quam luctus, pharetra dui sed, rutrum felis. Vestibulum tellus ipsum, rhoncus sed suscipit a, eleifend in. Vestibulum ut quam luctus, pharetra dui sed, rutrum felis.
                                                    </p>
                                                </div>
                                            </div>
                                        </Col>
                                        {
                                            footer_data && footer_data.map((item, i) => {
                                                return (
                                                    <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={12} key={i}>
                                                        <div className={`links ${i === 1 ? 'follow' : ''}`}>
                                                            <p>{item.title}</p>
                                                            <ul>
                                                                {
                                                                    item.links && item.links.map((ele, index) => (
                                                                        <li key={index}>
                                                                            <Link href={ele.link}>
                                                                                {ele.icon && <span className='social'>{ele.icon}</span>}
                                                                                <div className="item">{ele.name}</div>
                                                                                {ele.arrow_icon && <span className='arrow'>{ele.arrow_icon}</span>}
                                                                            </Link>
                                                                        </li>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    </Col>
                                                )
                                            })
                                        }
                                    </Row>
                                </div>
                                <div className="footer_bottom_area">
                                    <p>&copy; NSIDE. All Rights Reserved</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Footer
