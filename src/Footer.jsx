import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <>
<footer id="dk-footer" className="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <p className="footer-info-text">
                           Site which provides you information about various events,fest etc and updates you about the upcomming ones.
                        </p>
                        <div className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#Upcomming">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Upcomming">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#Upcomming">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                    <i className="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                <div className="contact-info">
                                    <h3>Acropolis Institute </h3>
                                    <p>Bypass Road, Manglia Square, Manglia,Indore, Madhya Pradesh-453771, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                <div className="contact-info">
                                    <h3>95 711 9 5353</h3>
                                    <p>Contact Us</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="Useful">
                                <div className="section-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#Upcomming">About us</a>
                                    </li>
                                    <li>
                                        <a href="#Upcomming">Live events</a>
                                    </li>
                                    <li>
                                        <a href="#Upcomming">Upcomming Evetns</a>
                                    </li>
                                    <li>
                                        <a href="#Upcomming">Previous Events</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2020, All Rights Reserved</span>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <ul>
                                <li>
                                    <a href="#Upcomming">Home</a>
                                </li>
                                <li>
                                    <a href="#Upcomming">Terms</a>
                                </li>
                                <li>
                                    <a href="#Upcomming">Privacy Policy</a>
                                </li>
                                <li>
                                   <a href="#Upcomming">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</footer>

    </>
  );
};

export default Footer;
