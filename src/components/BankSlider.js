import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

function BankSlider() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '500px' }}
                    className="d-block"
                    src={require('./Images/ATMDeditCard.jpg')}
                    alt="First slide"
                />
                    {/* <Carousel.Caption>
                        <h3>ATM Debit Card</h3>
                        <p>
                            ATMs or Automated Teller Machines are mostly used to withdraw cash.
                        </p>
                    </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '500px' }}
                    className="d-block"
                    src={require('./Images/Umrah-Package.PNG')}
                    alt="Second slide"
                />

                {/* <Carousel.Caption>
                    <h3>Umrah Packages</h3>
                    <p>Book your Umrah packages with Umrah Companions</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{ width: '100%', height: '500px' }}
                    className="d-block"
                    src={require('./Images/eduLoan.png')}
                    alt="Third slide"
                />

                {/* <Carousel.Caption>
                    <h3>Educational Loan</h3>
                    <p>
                        financial assistance is provided by way of Interest Free Loans to the meritorious students
                    </p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default BankSlider;