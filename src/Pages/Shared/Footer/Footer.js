import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Footer.css'


const Footer = () => {
    const date = new Date()
    const currentDate = date.getFullYear()
    return (
        <div className=' w-100'>
            <footer className='text-center mt-5 p-3 text-white'>
                <div>
                    <h3>UNITREAT</h3>
                    <p>Your Mental Health</p>
                    <small className='me-2'>copyright</small>
                    <FontAwesomeIcon className='me-2' icon={faCopyright}></FontAwesomeIcon>
                    <p className='d-inline'>{currentDate} UNITREAT. All Rights Reserved</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;