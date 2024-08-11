import React, { useEffect, useState } from 'react';
import './Sidebar.css';

function Sidebar() {
    const [showFilter, setShowFilter] = useState(true);
    const [categories, setCategories] = useState([]);
    const [idealFor, setIdealFor] = useState([]);
    const [occasions, setOccasions] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [fabrics, setFabrics] = useState([]);
    const [segments, setSegments] = useState([]);
    const [suitableFor, setSuitableFor] = useState([]);
    const [rawMaterials, setRawMaterials] = useState([]);
    const [patterns, setPatterns] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.error("Error fetching categories:", error));

        // Simulated fetches for other attributes
        setIdealFor(['Men', 'Women', 'Kids']);
        setOccasions(['Casual', 'Formal', 'Sports']);
        setWorkTypes(['Office', 'Outdoor', 'Craft']);
        setFabrics(['Cotton', 'Wool', 'Silk']);
        setSegments(['Luxury', 'Budget', 'Eco-friendly']);
        setSuitableFor(['Gifting', 'Personal']);
        setRawMaterials(['Leather', 'Plastic', 'Wood']);
        setPatterns(['Solid', 'Striped', 'Polka Dots']);
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    return (
        <aside className="sidebar">
            <div className="filter-toggle">
                <button onClick={toggleFilter}>
                    {showFilter ? 'Hide Filter' : 'Show Filter'}
                </button>
            </div>
            {showFilter && (
                <div className="filters">
                    <h2>3425 Items</h2>
                    <label>
                        <input type="checkbox" />
                        Customizable
                    </label>

                    <div className="filter-group">
                        <h3>Ideal For</h3>
                        <select>
                            <option>All</option>
                            {idealFor.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Occasion</h3>
                        <select>
                            <option>All</option>
                            {occasions.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Work</h3>
                        <select>
                            <option>All</option>
                            {workTypes.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Fabric</h3>
                        <select>
                            <option>All</option>
                            {fabrics.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Segment</h3>
                        <select>
                            <option>All</option>
                            {segments.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Suitable For</h3>
                        <select>
                            <option>All</option>
                            {suitableFor.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Raw Materials</h3>
                        <select>
                            <option>All</option>
                            {rawMaterials.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className="filter-group">
                        <h3>Pattern</h3>
                        <select>
                            <option>All</option>
                            {patterns.map((item, index) => (
                                <option key={index} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>
            )}
        </aside>
    );
}

export default Sidebar;
