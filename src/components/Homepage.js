import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-container">

      {/* VIDEO HERO SECTION */}
      <section className="video-section">
        <video
          className="hero-video"
          src="/videos/myvideo.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>

        <div className="video-overlay"></div>

        <div className="video-text">
          <h1>Discover Your Style</h1>
          <p>Modern • Minimal • Streetwear</p>
          <Link to="/shop" className="video-btn">Explore Now</Link>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="category-section">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1520975911094-46f8f2d72c1f?auto=format&fit=crop&w=1000&q=80" />
            <Link to="/shop" className="cat-title">Men</Link>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1000&q=80" />
            <Link to="/shop" className="cat-title">Women</Link>
          </div>

          <div className="category-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80" />
            <Link to="/shop" className="cat-title">Kids</Link>
          </div>
        </div>
      </section>

      {/* TRENDING SECTION */}
      <section className="trending-section">
        <h2>Trending Now</h2>

        <div className="trending-grid">
          <div className="trend-card">
            <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=1000&q=80" />
            <h4>Premium Black Hoodie</h4>
            <p>$69</p>
          </div>

          <div className="trend-card">
            <img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1000&q=80" />
            <h4>Minimal Oversized Tee</h4>
            <p>$29</p>
          </div>

          <div className="trend-card">
            <img src="https://images.unsplash.com/photo-1592878904946-b2b8d1b04eba?auto=format&fit=crop&w=1000&q=80" />
            <h4>Streetwear Jacket</h4>
            <p>$89</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION - BRAND STATEMENT */}
      <section className="brand-section">
        <h2>Monochrome. Minimal. Made for You.</h2>
        <p>
          Veilnwear blends modern streetwear with clean minimal design.
          Every piece is crafted to enhance your personality without shouting for attention.
        </p>
      </section>

      {/* NEW SECTION - NEW ARRIVALS */}
      <section className="new-arrivals">
        <h2>New Arrivals</h2>

        <div className="arrival-grid">

          <div className="arrival-card">
            <img src="https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=1000&q=80" />
            <h4>Winter Minimal Jacket</h4>
            <p>$119</p>
          </div>

          <div className="arrival-card">
            <img src="https://images.unsplash.com/photo-1536520002442-39764a41eae1?auto=format&fit=crop&w=1000&q=80" />
            <h4>Monochrome Hoodie</h4>
            <p>$79</p>
          </div>

          <div className="arrival-card">
            <img src="https://images.unsplash.com/photo-1600185365483-26d7c59a056c?auto=format&fit=crop&w=1000&q=80" />
            <h4>Everyday Minimal Tee</h4>
            <p>$39</p>
          </div>

          <div className="arrival-card">
            <img src="https://images.unsplash.com/photo-1516571137133-1be29e37143a?auto=format&fit=crop&w=1000&q=80" />
            <h4>Minimal Sweatpants</h4>
            <p>$59</p>
          </div>

        </div>
      </section>

      {/* NEW SECTION - BRAND VISUAL */}
      <section className="wide-image-section">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=90"
          className="wide-image"
        />
        <div className="wide-text">
          Minimalism isn't a trend. It's a lifestyle.
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2025 Veilnwear — Dress Beyonds Limits
      </footer>
    </div>
  );
};

export default Homepage;
