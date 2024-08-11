import React from 'react';
import './App.css'; // Create and style this file
import Footer from './components/Footer';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import Sidebar from './components/Sidebar';


function App() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-content">
                <Sidebar />
                <ProductGrid />
              
            </div>
            <Footer/>
        </div>
    );
}

export default App;
