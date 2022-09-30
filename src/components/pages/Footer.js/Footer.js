import React, { useState } from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';

import { MdFingerprint } from 'react-icons/md';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/testimonial'>Testimonials</Link>
                        <Link to='/career'>Careers</Link>
                        <a href='https://www.investorsbank.com/' target={'_blank'} rel='noreferrer'>Investors</a>
                        <Link to='/termofservices'>Terms of Service</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/contactus'>Contact</Link>
                        <Link to='//1link.net.pk/members/' target={'_blank'}>Support</Link>
                        <Link to='//www.lawinsider.com/dictionary/destination-account' target={'_blank'}>Destinations</Link>
                        <Link to='/faq'>FAQ</Link>
                    </div>
                </div>
                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='https://drive.google.com/drive/u/1/folders/1Al_lVpstPWidAwK19iL4x7HyvrN6wV8N'>Submit Video</Link>
                        <Link to='//nflpy.pk/ambassador/'>Ambassadors</Link>
                        <Link to='//en.wikipedia.org/wiki/List_of_banks_in_Pakistan' target={'_blank'}>Agency</Link>
                        <Link to='//www.instagram.com/sadapay/?hl=en'>Influencer</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <a href='https://www.instagram.com/hwsmbank/' target='_blank' rel='noreferrer'>Instagram</a>
                        <a href='https://www.facebook.com/HWSM-Bank-106241515588925' target='_blank' rel='noreferrer'>Facebook</a>
                        <a href='https://twitter.com/hwsmbank' target='_blank' rel='noreferrer'>Twitter</a>
                        <a href='https://www.youtube.com/channel/UC5MPJEEFoID_aIeZMAG_93g' target='_blank' rel='noreferrer'>Youtube</a>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo' target={'_blank'}>
                            <MdFingerprint className='navbar-icon' />
                            HWSM Bank
                        </Link>
                    </div>
                    <small className='website-rights'>HWSM Bank © 2022</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link'
                            to='//www.facebook.com/HWSM-Bank-106241515588925'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.instagram.com/hwsmbank/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to={
                                '//www.youtube.com/channel/UC5MPJEEFoID_aIeZMAG_93g'
                            }
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <FaYoutube />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//twitter.com/hwsmbank'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            className='social-icon-link'
                            to='//www.linkedin.com/in/hwsm-bank-838b52251/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;