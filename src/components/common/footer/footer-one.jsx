import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FooterOne extends Component {
    render() {
        const { adClass="", logo="assets/images/logo.png", border = true, width="105", height="25" } = this.props;
        return (
            <footer className={ `footer ${adClass}` }>
                { this.props.children}
                <div className={ `footer-middle ${border?'':'border-0' }` }>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                <div className="widget widget-about">
                                    <img src={ process.env.PUBLIC_URL + '/' + logo } className="footer-logo" alt="Footer Logo" width={ width} height={ height}/>
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. </p>
                                    <div className="social-icons">
                                        <a href="https://www.facebook.com/" rel="noopener noreferrer" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></a>
                                        <a href="https://twitter.com/" rel="noopener noreferrer" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></a>
                                        <a href="https://instagram.com/" rel="noopener noreferrer" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></a>
                                        <a href="https://youtube.com/" rel="noopener noreferrer" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></a>
                                        <a href="https://pinterest.com/" rel="noopener noreferrer" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Useful Links</h4>

                                    <ul className="widget-list">
                                        <li><Link to={ `${process.env.PUBLIC_URL}/about` }>About Molla</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>How to shop on Molla</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQ</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact us</Link></li>
                                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Log in</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="widget-list">
                                        <li><Link to="#">Payment Methods</Link></li>
                                        <li><Link to="#">Money-back guarantee!</Link></li>
                                        <li><Link to="#">Returns</Link></li>
                                        <li><Link to="#">Shipping</Link></li>
                                        <li><Link to="#">Terms and conditions</Link></li>
                                        <li><Link to="#">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-6 col-lg-3">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>

                                    <ul className="widget-list">
                                        <li><Link to="#">Sign In</Link></li>
                                        <li><Link  to={ `${process.env.PUBLIC_URL}/shop/cart` }>View Cart</Link></li>
                                        <li><Link  to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>My Wishlist</Link></li>
                                        <li><Link to="#">Track My Order</Link></li>
                                        <li><Link to="#">Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © { (new Date()).getFullYear() } Molla Store. All Rights Reserved.</p>
                        <figure className="footer-payments">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/payments.png` } alt="Payment methods" width="272" height="20" />
                        </figure>
                    </div>
                </div>
            </footer>
        );
    }
}

export default FooterOne;