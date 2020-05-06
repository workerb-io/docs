import React, { useEffect } from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import SlugHelp from './slughelp';
import FeedbackBtn from './feedbackbtn';

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
                <Col className='slug_sidebar' lg={2} md={3} xs={0}>
                    <SlugHelp />
                    <FeedbackBtn />
                </Col>
            </Row>
        </React.Fragment >
    );
};

export default DocBox;
