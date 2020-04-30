import React from 'react';
import Link from 'next/link'
import ReactGA from 'react-ga'

export const Navbar = () => {

    const clickHandler = () =>{
        ReactGA.event({
            category: 'docs_nav',
            label: 'docs_nav_login',
            action: `nav btn:login clicked`
        })
    }

    return(
        <div className='navbar'>
            <div className="logo">
                <Link href='/'>
                    <img
                        alt="workerB"
                        src={require('../img/logo-white.png')}
                    />
                </Link>
            </div>
            <div className="navitems">
                <div className="login" onClick={clickHandler()}>
                    <Link href='https://workerb.app/' prefetch={false}>
                        <a>login</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}