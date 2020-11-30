import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {

    return (
        <div className='header'>
            <div className='title'>
                <Link className='' to='/basic-portfolio-template#top'>
                    <h1 className='title-h1'>Portfolio</h1>
                </Link>
            </div>
            <div className='navigation'>
                <ul>
                    <Link to="basic-portfolio-template#top">
                        <li>Works</li>
                    </Link>
                    <Link to='/about#top'>
                        <li>About</li>
                    </Link>
                    <a href="#connect">
                        <li>Get in Touch</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Header