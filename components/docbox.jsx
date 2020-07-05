import React, { useState, useEffect, useCallback } from 'react';
import Head from 'next/head';
import { Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/router'
import ReactGA from 'react-ga'
import { LogOnMount } from "@amplitude/react-amplitude";
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

                {/*track each doc page load*/}
                <LogOnMount eventType={`docs_view : ${router.pathname}`} />

                <Col lg={{ span: 9, offset: 1 }} md={9} xs={12} className='doc_content'>
                    <div className='md_content'>
                        {children}
                    </div>
                </Col>
                <Col className='slug_sidebar' lg={2} md={3}>
                    <SlugHelp />
                    <FeedbackBtn />
                </Col>

            </Row>
        </React.Fragment >
    );
};

export default DocBox;
