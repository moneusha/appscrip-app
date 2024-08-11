import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import "./ProductGrid.css";

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("recommended");
  const [likedProducts, setLikedProducts] = useState(new Set());

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const toggleLike = (productId) => {
    setLikedProducts((prevLikedProducts) => {
      const updatedLikes = new Set(prevLikedProducts);
      if (updatedLikes.has(productId)) {
        updatedLikes.delete(productId);
      } else {
        updatedLikes.add(productId);
      }
      return updatedLikes;
    });
  };

  return (
    <div className="product-container">
      <div className="sort-options">
        <label htmlFor="sort-select">Recommended</label>
        <select id="sort-select" value={sortOption} onChange={handleSortChange}>
          <option value="recommended">Recommended</option>
          <option value="newest">Newest First</option>
          <option value="popular">Popular</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="price-low-high">Price: Low to High</option>
        </select>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            {product.category && <span className="badge">{product.category}</span>}
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>${product.price.toFixed(2)}</p>
            <p>{product.description.substring(0, 60)}...</p>
            <button
              className={`like-button ${likedProducts.has(product.id) ? 'liked' : ''}`}
              onClick={() => toggleLike(product.id)}
              aria-label="like-button"
            >
              <i className="fa fa-heart"></i> {/* Using FontAwesome for the heart icon */}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
