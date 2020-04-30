import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row, Col, Container } from 'react-bootstrap';
import { Navbar } from '../components/navbar'
import SideNav from '../components/sidenav'
import PropTypes from 'prop-types';
import '../styles/main.scss'

import ReactGA from 'react-ga'
ReactGA.initialize('UA-149497396-1')

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <React.Fragment>
            <Head>
                <title>workerB | Docs</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link rel="icon" href={require('../img/favicon.png')} sizes="32x32" />
            </Head>
            <Navbar />
            <Container fluid>
                <Row className='documentation_box'>
                    <Col className='sidenav_container' md={2} xs={4}>
                        <SideNav />
                    </Col>
                    <Col md={10} xs={8}>
                        <Component className='doc_container' {...pageProps} />
                    </Col>
                </Row>
            </Container>
        </React.Fragment >
    );
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    pageProps: PropTypes.object
}

export default MyApp;