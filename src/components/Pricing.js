import React from 'react';
import { Button } from './Button';
import './Pricing.css';

import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div className='pricing__section'>
                <div className='pricing__wrapper'>
                    <h1 className='pricing__heading'>Pricing</h1>
                    <div className='pricing__container'>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <FaFire />
                                </div>
                                <h3>Silver Debit Card</h3>
                                <h4>1400 pkr</h4>
                                <p>per Year</p>
                                <ul className='pricing__container-features'>
                                    <li>100 Transactions</li>
                                    <li>2% Cash Back</li>
                                    <li>200,000 Limit</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Order Card
                                </Button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <BsXDiamondFill />
                                </div>
                                <h3>Diamond Debit Card</h3>
                                <h4>1800 pkr</h4>
                                <p>per Year</p>
                                <ul className='pricing__container-features'>
                                    <li>1000 Transactions</li>
                                    <li>3.5% Cash Back</li>
                                    <li>800,000 Limit</li>
                                </ul>
                                <button className='btn-diamond'>Order Card</button>
                            </div>
                        </Link>
                        <Link to='/sign-up' className='pricing__container-card'>
                            <div className='pricing__container-cardInfo'>
                                <div className='icon'>
                                    <GiCrystalize />
                                </div>
                                <h3>Platinum Debit Card</h3>
                                <h4>2800 pkr</h4>
                                <p>per Year</p>
                                <ul className='pricing__container-features'>
                                    <li>Unlimited Transactions</li>
                                    <li>5% Cash Back</li>
                                    <li>Unlimited Spending</li>
                                </ul>
                                <Button buttonSize='btn--wide' buttonColor='primary'>
                                    Order Card
                                </Button>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}
export default Pricing;