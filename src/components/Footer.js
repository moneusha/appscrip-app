import React from 'react';
import './Footer.css'; // Make sure to create and style this file

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="newsletter">
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <form>
                        <input type="email" placeholder="Enter your e-mail" />
                        <button type="submit">SUBSCRIBE</button>
                    </form>
                </div>
                <div className="contact-info">
                    <h3>CONTACT US</h3>
                    <p>+44 221 133 5360</p>
                    <p><a href="mailto:customercare@mettamuse.com">customercare@mettamuse.com</a></p>
                    <div className="currency">
                        <h3>CURRENCY</h3>
                        <p>USD</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-section">
                    <h4>mettā muse</h4>
                    <ul>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#stories">Stories</a></li>
                        <li><a href="#artisans">Artisans</a></li>
                        <li><a href="#boutiques">Boutiques</a></li>
                        <li><a href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li><a href="#shipping">Orders & Shipping</a></li>
                        <li><a href="#login">Join/Login as a Seller</a></li>
                        <li><a href="#payment">Payment & Pricing</a></li>
                        <li><a href="#returns">Return & Refunds</a></li>
                        <li><a href="#faqs">FAQs</a></li>
                        <li><a href="#privacy">Privacy Policy</a></li>
                        <li><a href="#terms">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>FOLLOW US</h4>
                    <div className="social-icons">
                        <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
                        <a href="#instagram"><i className="fab fa-instagram"></i></a>
                    </div>
                    <div className="payment-methods">
                        <h4>mettā muse ACCEPTS</h4>
                        <img src="payment-icons.png" alt="Payment Methods" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>© 2023 mettamuse. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
