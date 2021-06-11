import React from 'react'
import './Footer.css';

const Footer=()=>{
    return(
        <div className="footer">
            <div className="information">
            </div>
            <footer className="new_footer_area bg_color">
                <div className="new_footer_top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility:"visible",animationDelay:0.6,animationName:"fadeInLeft"}}
                        // visibility: visible;
                        // animation-delay: 0.6s;
                        // animation-name: fadeInLeft;
                    >
                                    <h3 className="f-title f_600 t_color f_size_18">Stay in Touch</h3>
                                    <ul className="list-unstyled f_list">

                                        <li><b>Email</b></li>
                                        <li>YourHealth@.co.in</li>
                                        <li><b>Contact</b></li>
                                        <li><a>(+91) 7841093118</a></li>


                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{visibility:"visible",animationDelay:0.4,animationName:"fadeInLeft"}}
                        // visibility: visible;
                        // animation-delay: 0.4s;
                        // animation-name: fadeInLeft;
                    >
                                    <br/>
                                    <br/>
                                    <h3 className="f-title f_600 t_color f_size_18">Links</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="/">Home</a></li>
                                        <li>About us</li>
                                        <li>Near By Clinics</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{visibility:"visible",animationDelay:0.6,animationName:"fadeInLeft"}}
                        // visibility: visible;
                        // animation-delay: 0.6s;
                        // animation-name: fadeInLeft;
                    >
                                    <br/>
                                    <br/>
                                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                    <ul className="list-unstyled f_list">
                                        <li><a href="#">Documentation</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12">
                                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{visibility:"visible",animationDelay:0.8,animationName:"fadeInLeft"}}
                        // visibility: visible;
                        // animation-delay: 0.8s;
                        // animation-name: fadeInLeft;
                    >
                                    <br/>
                                    <br/>
                                    <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                    <div className="f_social_icon">
                                        <a href="https://www.facebook.com/Farmers-Portal-103835048094650/?modal=admin_todo_tour" className="fab fa-facebook"></a>
                                        <a href="https://twitter.com/PortalFarmer" className="fab fa-twitter"></a>

                                        <a href="https://www.instagram.com/farmersportal/" className="fab fa-instagram"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bg">
                        {/* <div className="footer_bg_one"></div> */}
                        <div className="footer_bg_two"></div>
                    </div>
                </div>
             
            </footer>
        </div>
    )
}

export default Footer;