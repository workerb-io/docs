import React from 'react'
import ReactGA from 'react-ga'
import { Amplitude } from "@amplitude/react-amplitude";

export const Footer = () => {
    return (
        <Amplitude>
            {
                ({ logEvent }) =>
                    <footer className='footer'>
                        <div className="row footer_main_area">
                            <div className="footer_children footer_copyright">
                                <span>© 2020 workerB. All rights reserved.</span>
                            </div>
                            <div className="footer_children tnc">
                                <a href="https://workerb.io/terms_and_conditions.html"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_term&cond', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_term&cond')
                                    }}>
                                    Terms &amp; Condition</a>
                                <a href="https://workerb.io/privacy_policy.html"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_privacypol', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_privacypol')
                                    }}>
                                    Privacy Policy</a>
                            </div>
                            <div className="footer_children social_icons">
                                <a href="https://github.com/workerb-io/" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_github', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_github')
                                    }}>
                                    <img src={require('../img/social/github.svg')} alt='github' />
                                </a>
                                <a href="https://www.linkedin.com/company/workerb/" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_linkedin', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_linkedin')
                                    }}>
                                    <img src={require('../img/social/linkedin.svg')} alt='linkedin' />
                                </a>
                                <a href="https://www.youtube.com/channel/UCguq9sXrm-B3eF7xqRAPnzA" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_youtube', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_youtube')
                                    }}>
                                    <img src={require('../img/social/youtube.svg')} alt='youtube' />
                                </a>
                                <a href="https://twitter.com/workerb_io" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_twitter', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_twitter')
                                    }}>
                                    <img src={require('../img/social/twitter.svg')} alt='twitter' />
                                </a>
                                <a href="https://medium.com/workerb" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_medium', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_medium')
                                    }}>
                                    <img src={require('../img/social/medium.svg')} alt='medium' />
                                </a>
                                <a href="https://spectrum.chat/workerb" target="_blank" rel="noopener noreferrer"
                                    onClick={() => {
                                        ReactGA.event({ category: 'docs_click_footer_spectrum', action: 'click', label: 'docs_footer_link_click' })
                                        logEvent('docs_click_footer_spectrum')
                                    }}>
                                    <img src={require('../img/social/forum.svg')} alt='spectrum' />
                                </a>
                            </div>
                        </div>
                    </footer >
            }
        </Amplitude>
    )
}