import React from "react";
import "./Products.css";

const Products = () => {
  return (
    <div className="products-container">
      <h1 className="products-title">Our Products</h1>

      {/* MEN SECTION */}
      <h2 className="section-title">Men Collection</h2>
      <div className="products-grid">

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1520975911094-46f8f2d72c1f?auto=format&fit=crop&w=900&q=60" />
          <h4>Black Hoodie</h4>
          <p>$45</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=60" />
          <h4>White Tee</h4>
          <p>$25</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=60" />
          <h4>Black Joggers</h4>
          <p>$39</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=60" />
          <h4>Denim Jacket</h4>
          <p>$70</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1507680434567-5739c80be1ac?auto=format&fit=crop&w=900&q=60" />
          <h4>Casual Shirt</h4>
          <p>$30</p>
        </div>
      </div>

      {/* WOMEN SECTION */}
      <h2 className="section-title">Women Collection</h2>
      <div className="products-grid">

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=60" />
          <h4>Winter Coat</h4>
          <p>$79</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=900&q=60" />
          <h4>White Sneakers</h4>
          <p>$59</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1520970014086-2208d522b6f0?auto=format&fit=crop&w=900&q=60" />
          <h4>Brown Sweater</h4>
          <p>$42</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=60" />
          <h4>Long Coat</h4>
          <p>$88</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1541099648967-3252d74fb4dc?auto=format&fit=crop&w=900&q=60" />
          <h4>Women Hoodie</h4>
          <p>$39</p>
        </div>
      </div>

      {/* KIDS SECTION */}
      <h2 className="section-title">Kids Collection</h2>
      <div className="products-grid">

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?auto=format&fit=crop&w=900&q=60" />
          <h4>Kids Jacket</h4>
          <p>$29</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=900&q=60" />
          <h4>Kids Shoes</h4>
          <p>$25</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=60" />
          <h4>Kids Winter Wear</h4>
          <p>$35</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1541542684-4e39f808b1a3?auto=format&fit=crop&w=900&q=60" />
          <h4>Kids Hoodie</h4>
          <p>$20</p>
        </div>

        <div className="product-card">
          <img src="https://images.unsplash.com/photo-1551232864-3f89a4a1b6b3?auto=format&fit=crop&w=900&q=60" />
          <h4>Kids Tshirt</h4>
          <p>$18</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
