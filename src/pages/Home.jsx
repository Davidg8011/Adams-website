import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `url('/assets/images/IMG_0909.jpg')` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">

          <h1 className="hero-title">OVER 20 YEARS <br/>OF EXCELLENCE.</h1>
          <p className="hero-desc">
            Advanced Earthworks has been offering demolition, excavation and other services for more than 20 years. 
            We take pride in our high-quality work, and our teams are all fully licensed and insured.
          </p>

        </div>
      </section>

      <section className="values">
        <div className="container values-grid">
          <div className="values-header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>YOUR PROJECT<br/>MATTERS.</h2>
            <p style={{ color: '#666', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '500px' }}>
              Advanced Earthworks is your source for hassle-free, dependable grading and construction services in the greater NorCal area. When you hire us for a project, you can rest assured that we'll approach the job with precision and care. Have questions? We'll be happy to answer them and explain how the process works. We want you to feel comfortable for having chosen us, and we'll go out of our way to earn your trust. Contact us to schedule an estimate and learn more about our services.
            </p>
          </div>

          <div className="values-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Review 1 */}
            <div className="value-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#FFB800', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.25rem', color: '#333', fontSize: '1.1rem', lineHeight: '1.5' }}>
                "Hire Advanced Earthworks. Period. Professional, kind, courteous and extremely good at what they do. Will hire them again without a second thought."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#111', margin: 0, fontWeight: '800' }}>Sid G.</h3>
                <span style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginTop: '0.2rem' }}>3/30/2026</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="value-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#FFB800', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.25rem', color: '#333', fontSize: '1.1rem', lineHeight: '1.5' }}>
                "Adam and his crew did an outstanding job. Professional and completed the project before scheduled date. I would hire them again if needed."
              </p>
              <div style={{ marginTop: 'auto' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#111', margin: 0, fontWeight: '800' }}>Kari M.</h3>
                <span style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginTop: '0.2rem' }}>6/14/2023</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="value-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#FFB800', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.25rem', color: '#333', fontSize: '1.1rem', lineHeight: '1.5' }}>
                "Friendly, professional company, great employees. After the Demo, you would never know there was a house, garage and barn on site"
              </p>
              <div style={{ marginTop: 'auto' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#111', margin: 0, fontWeight: '800' }}>Dolores W.</h3>
                <span style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginTop: '0.2rem' }}>12/12/2016</span>
              </div>
            </div>

            {/* Review 4 */}
            <div className="value-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ color: '#FFB800', marginBottom: '0.75rem', fontSize: '1.2rem', letterSpacing: '2px' }}>★★★★★</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.25rem', color: '#333', fontSize: '1.1rem', lineHeight: '1.5' }}>
                "On time, within estimate, cleaned the site after demolition as though they were cleaning their own spotless home"
              </p>
              <div style={{ marginTop: 'auto' }}>
                <h3 style={{ fontSize: '1.2rem', color: '#111', margin: 0, fontWeight: '800' }}>MiMi T.</h3>
                <span style={{ fontSize: '0.85rem', color: '#666', display: 'block', marginTop: '0.2rem' }}>7/29/2016</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        background: 'var(--color-dark)', 
        color: 'white', 
        padding: '6rem 2rem',
        borderTop: '1px solid rgba(255,255,255,0.1)' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '3.5rem', 
              marginBottom: '1.5rem', 
              color: 'white',
              lineHeight: 1,
              letterSpacing: '-2px',
              textTransform: 'uppercase'
            }}>OUR COMMITMENT TO QUALITY</h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {[
              'Prompt Project Completion',
              'High Quality Work',
              'Licensed & Insured',
              'Hazmat Certified',
              'Reasonable Rates',
              'Reliable Customer Service'
            ].map((title, i) => (
              <div key={i} style={{ 
                borderLeft: '4px solid var(--color-primary)', 
                background: 'rgba(255,255,255,0.03)',
                padding: '2rem 1.75rem',
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
                display: 'flex',
                alignItems: 'center'
              }}>
                <h3 style={{ fontSize: '1.2rem', color: 'white', margin: 0 }}>{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
