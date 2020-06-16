import getConfig from 'next/config'
import React from 'react'

import PlayIcon from './svg-components/PlayIcon'
import LibrariesIcon from './svg-components/LibrariesIcon'
import LoginIcon from './svg-components/LoginIcon'
import WorkerBFull from './svg-components/workerb'

const { publicRuntimeConfig } = getConfig()
const { FE_URL, AMPLITUDE_KEY } = publicRuntimeConfig
import {
    AmplitudeProvider,
    Amplitude,
    LogOnMount
} from "@amplitude/react-amplitude";

export const Navbar = ({ hamburger_method }) => {
    let amplitude = undefined
    if (typeof window !== 'undefined') {
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
                <LogOnMount eventType="docs_view" />
                <Amplitude>
                    {({ logEvent }) =>
                        <div className="navbar">
                            <button className="menu_toggle" onClick={hamburger_method}>Menu</button>
                            <div className="logo">
                                <a href="https://workerb.io" onClick={() => logEvent('docs_click_header_www')}>
                                    <WorkerBFull />
                                </a>
                            </div>

                            <span className="buttons-group">
                                <a className="login-group" href="https://play.workerb.io/" rel="noreferrer" onClick={() => logEvent('docs_click_header_play')}>
                                    <span className="login-button">
                                        <PlayIcon />
                                    </span>
                                    <span className="login-text">Playground</span>
                                </a>
                                <a className="login-group" href={FE_URL + "libraries"} rel="noreferrer" onClick={() => logEvent('docs_click_header_libraries')}>
                                    <span className="login-button">
                                        <LibrariesIcon />
                                    </span>

                                    <span className="login-text">Libraries</span>
                                </a>

                                <a className="login-group" href={FE_URL + "login"} rel="noreferrer" onClick={() => logEvent('docs_click_header_login')}>
                                    <span className="login-button">
                                        <LoginIcon />
                                    </span>

                                    <span className="login-text">Login</span>
                                </a>
                            </span>
                            <span className='right_dropdown'>
                                <img className='right_dropdown_trigger' src={require('../img/dropdown_options.svg')} />
                                <div className='right_dropdown_content'>
                                    <a href='https://play.workerb.io/' onClick={() => logEvent('docs_click_header_playground')}>Play</a>
                                    <a href={FE_URL + "libraries"} onClick={() => logEvent('docs_click_header_libraries')}>Libraries</a>
                                    <a href={FE_URL + "login"} onClick={() => logEvent('docs_click_header_login')}>Login</a>
                                </div>
                            </span>
                        </div>
                    }
                </Amplitude>
            </Amplitude>
        </AmplitudeProvider>
    )
}
