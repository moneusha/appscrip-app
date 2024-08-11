import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='page'>
            <div className="header">
                <div className='header-top'>
                    <div className="">
                        <img src="https://i.pinimg.com/736x/7c/d7/81/7cd781a7a29b266d6efa30b01cd3a238.jpg" alt="Logo" className="logo" />
                    </div>
                    <div className="center">
                        <h1>LOGO</h1>
                    </div>
                    <div className="">
                        <i className="fas fa-search icons"></i>
                        <i className="fas fa-heart icons"></i>
                        <i className="fas fa-user icons"></i>
                        <i className="fas fa-shopping-bag icons"></i>
                        <div className="dropdown">
                            <button className="dropbtn">ENG</button>
                            <div className="dropdown-content">
                                <a href="#">ENG</a>
                                <a href="#">TEL</a>
                                <a href="#">HINDI</a>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <a className="navbar-brand " href="#">
                        <img/></a>
                    <button className="navbar-toggler bg-light" id="toggler-button" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto ">
                            <a className="nav-link active" href="#">SHOP<span class="sr-only">(current)</span></a>
                            <a className=" nav-link" href="#">SKILLS</a>
                            <a className="nav-link" href="#">STORIES</a>
                            <a className="nav-link" href="#">ABOUT</a>
                            <a className="nav-link" href="#">Trending CONTACT US</a>
                        </div>
                    </div>
                </nav>
            </div>
            
            <div className='bottom-header'>
                <h1 className='heading-pro'>DISCOVER OUR PRODUCTS</h1>
                <p>Shopping is one of my favorite activities. I love to browse through stores and find new things to buy. I also enjoy finding good deals on items. One of my favorite shopping trips is when I go to a mall and find several stores that have sales. I can spend hours looking for the best deals.</p>
            </div>
        </div>
        
        
    );
}

export default Header;
