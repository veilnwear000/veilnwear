import React from "react";
import "./About.css";
import aboutBg from '../images/about-bg.jpg';


const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
    <section
  className="about-hero"
  style={{ backgroundImage: `url(${aboutBg})` }}
>
  <div className="overlay"></div>
  <div className="hero-content">
    <h1 className="fade-in">ABOUT VEILNWEAR</h1>
    <p className="fade-in delay-1">Monochrome • Minimal • Modern Streetwear</p>
  </div>
</section>

      {/* Section 1 - Who We Are */}
      <section className="section fade-in delay-2">
        <div className="text">
          <h2>Who We Are</h2>
          <p>
            Veilnwear is a monochrome-focused streetwear brand inspired by
            minimalism, architecture, and modern urban culture.  
            Our goal is to blend comfort with premium design — clothing that
            feels luxurious yet effortless.
            <br /><br />
            We don’t follow trends.  
            We build timeless styles that remain relevant — season after season.
          </p>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1554568218-0f1715e72254?auto=format&fit=crop&w=900&q=80" 
          alt="Streetwear"
          className="image"
        />
      </section>

      {/* Section 2 - Mission */}
      <section className="section reverse fade-in delay-3">
        <img 
          src="https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?auto=format&fit=crop&w=900&q=80" 
          alt="Minimal clothing"
          className="image"
        />

        <div className="text">
          <h2>Our Mission</h2>
          <p>
            We aim to redefine modern fashion through simplicity.  
            Every collection is crafted around:
            <br /><br />
            ● Clean monochrome palettes  
            ● Oversized silhouettes  
            ● High-quality breathable fabrics  
            ● Designs rooted in street culture  
            <br /><br />
            Minimalism isn’t empty — it’s intentional.
          </p>
        </div>
      </section>

      {/* Section 3 - Craftsmanship */}
      <section className="section fade-in delay-4">
        <div className="text">
          <h2>Craftsmanship</h2>
          <p>
            Veilnwear works with small-batch ethical manufacturers who specialize 
            in precision stitching, premium cotton blends, and sustainable dyeing.
            <br /><br />
            Each hoodie, tee, or trouser passes through:
            <br />
            ✔ 4-point quality inspection  
            ✔ Zero-defect stitching checks  
            ✔ Comfort, stretch & durability tests  
            <br /><br />
            Because premium isn’t a word — it’s a standard.
          </p>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80" 
          alt="Factory"
          className="image"
        />
      </section>

      {/* Section 4 - Sustainability */}
      <section className="section reverse fade-in delay-5">
        <img 
          src="https://images.unsplash.com/photo-1591348278863-2f2f9d12e8e7?auto=format&fit=crop&w=900&q=80" 
          alt="Sustainable"
          className="image"
        />

        <div className="text">
          <h2>Our Sustainability Approach</h2>
          <p>
            Our pieces are crafted with low-impact fabrics and recycled packaging 
            to reduce environmental waste.  
            We believe in slow fashion — not fast dumping.
            <br /><br />
            When you wear Veilnwear,  
            you choose quality over quantity.
          </p>
        </div>
      </section>

      {/* Section 5 - Why Choose Us */}
      <section className="values-section fade-in delay-6">
        <h2>Why Choose Veilnwear?</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Premium Fabrics</h3>
            <p>Soft, heavyweight, breathable materials crafted to last years.</p>
          </div>

          <div className="value-card">
            <h3>Minimal Design</h3>
            <p>Timeless silhouettes that pair with anything, anytime.</p>
          </div>

          <div className="value-card">
            <h3>Ethical Manufacturing</h3>
            <p>Small-batch production with fair wages and sustainable workflow.</p>
          </div>

          <div className="value-card">
            <h3>Monochrome Aesthetic</h3>
            <p>A curated black & white style that defines modern luxury.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="about-footer">
        © 2025 Veilnwear — Crafted With Minimalism
      </footer>

    </div>
  );
};

export default About;
