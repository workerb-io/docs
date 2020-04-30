import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import SlugHelp from './slughelp';

const DocBox = ({ title, children }) => {
    const router = useRouter();

    useEffect(() => {
        let page = `/docs${router.pathname}`
        ReactGA.set({ page });
        ReactGA.pageview(page);
    }, []);

    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <Row>
                <Col lg={{ span: 9, offset: 1 }} md={9} xs={12} className='doc_content'>
                    <div className='md_content'>
                        {children}
                    </div>
                </Col>
                <Col lg={2} md={3} xs={0}>
                    <SlugHelp />
                </Col>
            </Row>
        </React.Fragment >
    );
};

export default DocBox;
