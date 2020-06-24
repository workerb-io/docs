import React from 'react'
import ReactGA from 'react-ga'

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="row footer_main_area">
                <div className="footer_children footer_copyright">
                    <span>© 2020 workerB. All rights reserved.</span>
                </div>
                <div className="footer_children tnc">
                    <a href="https://workerb.io/terms_and_conditions.html">Terms &amp; Condition</a>
                    <a href="https://workerb.io/privacy_policy.html">Privacy Policy</a>
                </div>
                <div className="footer_children social_icons">
                    <a href="https://github.com/workerb-io/" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_github', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/github.svg')} alt='github' />
                    </a>
                    <a href="https://twitter.com/workerb_io" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_twitter', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/twitter.svg')} alt='twitter' />
                    </a>
                    <a href="https://medium.com/workerb" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_medium', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/medium.svg')} alt='medium' />
                    </a>
                    <a href="https://www.youtube.com/channel/UCguq9sXrm-B3eF7xqRAPnzA" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_youtube', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/youtube.svg')} alt='youtube' />
                    </a>
                    <a href="https://www.linkedin.com/company/workerb/" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_linkedin', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/linkedin.svg')} alt='linkedin' />
                    </a>
                    <a href="https://spectrum.chat/workerb" target="_blank" rel="noopener noreferrer"
                        onClick={ReactGA.event({ category: 'wbdocs_fl_spectrum', action: 'click', label: 'footer_link_click' })}>
                        <img src={require('../img/social/spectrum.svg')} alt='spectrum' />
                    </a>
                </div>
            </div>
        </footer >
    )
}