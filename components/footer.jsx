import React from 'react'

export const Footer = () => (
    <footer className='footer'>
        <div className="row footer_main_area">
            <div className="footer_children footer_copyright">
                <span>© 2019 workerB. All rights reserved.</span>
            </div>
            <div className="footer_children tnc">
                <a href="/terms_and_conditions.html">Terms &amp; Condition</a>
                <a href="/privacy_policy.html">Privacy Policy</a>
            </div>
            <div className="footer_children social_icons">
                <a href="https://github.com/workerb-io/" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/github.svg')} alt='github' />
                </a>
                <a href="https://twitter.com/workerb_io" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/twitter.svg')} alt='twitter' />
                </a>
                <a href="https://medium.com/workerb" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/medium.svg')} alt='medium' />
                </a>
                <a href="https://www.youtube.com/channel/UCguq9sXrm-B3eF7xqRAPnzA" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/youtube.svg')} alt='youtube' />
                </a>
                <a href="https://www.linkedin.com/company/workerb/" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/linkedin.svg')} alt='linkedin' />
                </a>
                <a href="https://spectrum.chat/workerb" rel="noopener noreferrer" target="_blank">
                    <img src={require('../img/social/spectrum.svg')} alt='spectrum' />
                </a>
            </div>
        </div>
    </footer>
)