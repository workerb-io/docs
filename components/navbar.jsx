import getConfig from 'next/config'
import React from 'react'
import ReactGA from 'react-ga'
import { Amplitude } from "@amplitude/react-amplitude";

import PlayIcon from './svg-components/PlayIcon'
import PackagesIcon from './svg-components/PackagesIcon'
import LoginIcon from './svg-components/LoginIcon'
import WorkerBFull from './svg-components/workerb'

const { publicRuntimeConfig } = getConfig()
const { FE_URL } = publicRuntimeConfig

export const Navbar = ({ hamburger_method }) => {

    return (
        <Amplitude>
            {
                ({ logEvent }) =>
                    <div className="navbar">
                        <button className="menu_toggle" onClick={hamburger_method}>Menu</button>
                        <div className="logo">
                            <a href="https://workerb.io" onClick={() => {
                                ReactGA.event({ category: 'docs_click_header_www', action: 'click', label: 'docs_header_link_click' })
                                logEvent('docs_click_header_www')
                            }}>
                                <WorkerBFull />
                            </a>
                        </div>

                        <span className="buttons-group">
                            <a className="login-group" href="https://play.workerb.io/" rel="noreferrer" onClick={() => {
                                ReactGA.event({ category: 'docs_click_header_play', action: 'click', label: 'docs_header_link_click' })
                                logEvent('docs_click_header_play')
                            }}>
                                <span className="login-button">
                                    <PlayIcon />
                                </span>
                                <span className="login-text">Playground</span>
                            </a>
                            <a className="login-group" href={FE_URL + "packages"} rel="noreferrer" onClick={() => {
                                ReactGA.event({ category: 'docs_click_header_packages', action: 'click', label: 'docs_header_link_click' })
                                logEvent('docs_click_header_packages')
                            }}>
                                <span className="login-button">
                                    <PackagesIcon />
                                </span>

                                <span className="login-text">Packages</span>
                            </a>

                            <a className="login-group" href={FE_URL + "login"} rel="noreferrer" onClick={() => {
                                ReactGA.event({ category: 'docs_click_header_login', action: 'click', label: 'docs_header_link_click' })
                                logEvent('docs_click_header_login')
                            }}>
                                <span className="login-button">
                                    <LoginIcon />
                                </span>

                                <span className="login-text">Login</span>
                            </a>
                        </span>
                        <span className='right_dropdown'>
                            <img className='right_dropdown_trigger' src={require('../img/dropdown_options.svg')} />
                            <div className='right_dropdown_content'>
                                <a href='https://play.workerb.io/' onClick={() => {
                                    logEvent('mob_docs_click_header_playground')
                                    ReactGA.event({ category: 'mob_docs_click_header_playground', action: 'click', label: 'docs_header_link_click' })
                                }}>
                                    <span className="login-icon">
                                        <PlayIcon />
                                    </span>
                                    <span className="login-text">Play</span>
                                </a>
                                <a href={FE_URL + "packages"} onClick={() => {
                                    ReactGA.event({ category: 'mob_docs_click_header_packages', action: 'click', label: 'docs_header_link_click' })
                                    logEvent('mob_docs_click_header_packages')
                                }}>
                                    <span className="login-icon">
                                        <PackagesIcon />
                                    </span>
                                    <span className="login-text">Packages</span>
                                </a>
                                <a href={FE_URL + "login"} onClick={() => {
                                    ReactGA.event({ category: 'mob_docs_click_header_login', action: 'click', label: 'docs_header_link_click' })
                                    logEvent('mob_docs_click_header_login')
                                }}>
                                    <span className="login-icon">
                                        <LoginIcon />
                                    </span>
                                    <span className="login-text">Login</span>
                                </a>
                            </div>
                        </span>
                    </div>
            }
        </Amplitude >
    )
}
