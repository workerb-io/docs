import getConfig from 'next/config'
import React from 'react'

import PlayIcon from './svg-components/PlayIcon'
import LibrariesIcon from './svg-components/LibrariesIcon'
import LoginIcon from './svg-components/LoginIcon'
import WorkerBFull from './svg-components/workerb'

const { publicRuntimeConfig } = getConfig()
const { FE_URL } = publicRuntimeConfig

export const Navbar = ({ hamburger_method }) => {
    return (
        <div className="navbar">
            <button className="menu_toggle" onClick={hamburger_method}>Menu</button>
            <div className="logo">
                <a href="https://workerb.io">
                    <WorkerBFull />
                </a>
            </div>

            <span className="buttons-group">
                <a className="login-group" href="https://play.workerb.io/" rel="noreferrer">
                    <span className="login-button">
                        <PlayIcon />
                    </span>
                    <span className="login-text">Playground</span>
                </a>
                <a className="login-group" href={FE_URL + "libraries"} rel="noreferrer">
                    <span className="login-button">
                        <LibrariesIcon />
                    </span>

                    <span className="login-text">Libraries</span>
                </a>

                <a className="login-group" href={FE_URL + "login"} rel="noreferrer">
                    <span className="login-button">
                        <LoginIcon />
                    </span>

                    <span className="login-text">Login</span>
                </a>
            </span>
            <span className='right_dropdown'>
                <img className='right_dropdown_trigger' src={require('../img/dropdown_options.svg')} />
                <div className='right_dropdown_content'>
                    <a href='https://play.workerb.io/'>Play</a>
                    <a href={FE_URL + "libraries"}>Libraries</a>
                    <a href={FE_URL + "login"}>Login</a>
                </div>
            </span>
        </div>
    )
}
