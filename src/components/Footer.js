import React from 'react';
import Logo from '../images/Logo.png';

const Footer = () => {
    return (
        <footer>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <h3 className="mb-3">ABOUT</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ultimam quantum</p>
                        <img src={Logo} alt="Hiking Life Logo" height="65" style={{ width: '140px' }} />
                    </div>
                    {['ABOUT', 'ABOUT', 'ABOUT'].map((title, index) => (
                        <div key={index} className="col-md-2 col-6 mb-4 mt-5">
                            <h3 className="mb-3">{title}</h3>
                            <ul className="list-unstyled">
                                <li>Team</li>
                                <li>Join us</li>
                                <li>Ethic</li>
                                <li>Goals</li>
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-info py-2 mt-5">
            </div>
        </footer>
    );
};

export default Footer;
