import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router'
import getConfig from 'next/config'
import PropTypes from 'prop-types';
import ReactGA from 'react-ga'
import { AmplitudeProvider, Amplitude } from "@amplitude/react-amplitude";
import { Row, Col, Container } from 'react-bootstrap';
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import SideNav from '../components/sidenav'
import { ga_anchor_binder } from '../utils/helper'
import '../styles/main.scss'

const { publicRuntimeConfig } = getConfig()
const { GA_ID, AMPLITUDE_KEY } = publicRuntimeConfig

ReactGA.initialize(GA_ID)

Router.events.on('routeChangeComplete', () => ga_anchor_binder())

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        ga_anchor_binder();
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    const toggle_hamburger = (e) => {
        e.currentTarget.classList.toggle('is_active')
        let sidenav = document.querySelector('.sidenav_container')
        let content = document.querySelector('.documentation_content')

        sidenav.classList.toggle('d-none')
        content.classList.toggle('d-none')
    }
    let amplitude = undefined
    if (typeof window !== 'undefined') {
        //resolve window not defined issue; ssr
        amplitude = require('amplitude-js/amplitude');
    }
    return (
        <AmplitudeProvider
            amplitudeInstance={amplitude ? amplitude.getInstance() : null}
            apiKey={AMPLITUDE_KEY}
        >
            <Amplitude
                eventProperties={inheritedProps => ({
                    ...inheritedProps,
                    source: "docs",
                })}
            >
                <Amplitude>
                    {
                        ({ logEvent }) =>
                            <React.Fragment>
                                <Head>
                                    <title>workerB | Docs</title>
                                    <meta
                                        name="viewport"
                                        content="minimum-scale=1, initial-scale=1, width=device-width"
                                    />
                                    <link rel="icon" href={require('../img/favicon.png')} sizes="32x32" />
                                </Head>
                                <Navbar hamburger_method={toggle_hamburger} />
                                <Container fluid onClick={() => logEvent('docs_click_containerfluid_div')}>
                                    <Row className='documentation_box'>
                                        <Col className='sidenav_container d-none d-md-block' md={3} lg={2}>
                                            <SideNav />
                                        </Col>
                                        <Col className='documentation_content' xs={12} md={9} lg={10}>
                                            <Component className='doc_container' {...pageProps} />
                                        </Col>
                                    </Row>
                                </Container>
                                <Footer />
                            </React.Fragment >
                    }
                </Amplitude>
            </Amplitude>
        </AmplitudeProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
    pageProps: PropTypes.object
}

export default MyApp;