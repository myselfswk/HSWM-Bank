import React from 'react';
import './Testimonial.css';

const Testimonial = () => {
    const user_H = require('../../Images/Huzaifa.jpg');
    const user_D = require('../../Images/Daniyal.jpg');
    const user_O = require('../../Images/Osama.jpg');

    return (
        <>
            <section id="testimonials">
                <div className="container">
                    <h1 className='h1-H'>Testimonials</h1>
                    {/* className="text-center" align all the text to center */}
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img src={user_H} alt="Neflex Co-Founder" className="user" />
                                {/* aria-hidden="true" */}
                                <blockquote><i className="fa fa-quote-left"></i>The content and team work of the team "Digital Banking ChatBot" is outstanding and apprietiate-able
                                    there content design and development skills is amazing<i className="fa fa-quote-right"></i></blockquote>
                                <h3 className='h3-H'>M Huzaifa Nadir <span>Co-Founder At Neflex</span></h3>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img src={user_O} alt="CodiNauts Co-Founder" className="user" />
                                {/* aria-hidden="true" */}
                                <blockquote><i className="fa fa-quote-left"></i>The content and team work of the team "Digital Banking ChatBot" is outstanding and apprietiate-able
                                    there content design and development skills is amazing<i className="fa fa-quote-right"></i></blockquote>
                                <h3 className='h3-H'>Osama Alam <span>Co-Founder At KhanSolutions</span></h3>
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className="profile">
                                <img src={user_D} alt="CodiNauts Team Member" className="user" />
                                {/* aria-hidden="true" */}
                                <blockquote><i className="fa fa-quote-left"></i>The content and team work of the team "Digital Banking ChatBot" is outstanding and apprietiate-able
                                    there content design and development skills is amazing<i className="fa fa-quote-right"></i></blockquote>
                                <h3 className='h3-H'>Daniyal Kaleem <span>Co-Founder At DKTech</span></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonial;