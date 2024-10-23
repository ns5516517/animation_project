import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'
import '../public/sass/pages/sidebar.scss';

const Sidebar = () => {

    const sidebar = [
        { name: 'furniture', link: '/furniture' },
        { name: 'remote spaces', link: '/ remote_spaces' },
        { name: 'office tech', link: '/office_tech' },
        { name: 'floor plans', link: '/floor_plans' },
        { name: 'organization', link: '/organization' },
        { name: 'interior design', link: '/interior_design' }
    ];

    return (
        <>
            <div className="inner_sidebar">
                <div className="upper_sidebar">
                    <p>popular categories</p>
                </div>
                <div className="lower_sidebar">
                    <ul>
                        {
                            sidebar && sidebar.map((list, i) => {
                                return (
                                    <li key={i}>
                                        <Link href={list.link}>
                                            <div className="item">{list.name}</div>
                                            <span ><FontAwesomeIcon icon={faArrowRight} /></span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
