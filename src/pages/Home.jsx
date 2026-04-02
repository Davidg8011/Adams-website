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
            Advanced Earthworks has been offering excavation and other services for more than 20 years. 
            We take pride in our high-quality work, and our teams are all fully licensed and insured.
          </p>

        </div>
      </section>

      <section className="values">
        <div className="container values-grid">
          <div className="values-header" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2>YOUR PROJECT<br/>MATTERS.</h2>
            <p style={{ color: '#666', marginTop: '1rem', fontSize: '1.1rem', maxWidth: '500px' }}>
              Advanced Earthworks is your source for hassle-free, dependable grading and construction services in Healdsburg, CA. When you hire us for a project, you can rest assured that we'll approach the job with precision and care. Have questions? We'll be happy to answer them and explain how the process works. We want you to feel comfortable for having chosen us, and we'll go out of our way to earn your trust. Contact us to schedule an estimate and learn more about our services.
            </p>
          </div>

          <div className="values-cards" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="value-card" style={{ padding: '3rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#333', fontSize: '1.25rem', lineHeight: '1.6' }}>
                "{`Adam and his crew far exceeded my expectations! They were absolute professionals, hardworking and thorough. Made sure I got everything done I needed to put my property up for sale looking good! Thanks again!`}"
              </p>
              <h3 style={{ fontSize: '1.6rem', color: '#111', margin: 0, fontWeight: '800' }}>Susan Palavos</h3>
              <span style={{ fontSize: '1rem', color: '#666', display: 'block', marginTop: '0.4rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Sonoma County, CA</span>
            </div>
            <div className="value-card" style={{ padding: '3rem', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p style={{ fontStyle: 'italic', marginBottom: '2rem', color: '#333', fontSize: '1.25rem', lineHeight: '1.6' }}>
                "{`I have known Adam for years and can happily recommend him and Advanced Earthworks as a team that delivers the highest quality services with honesty and integrity.`}"
              </p>
              <h3 style={{ fontSize: '1.6rem', color: '#111', margin: 0, fontWeight: '800' }}>Erin Prieskorn</h3>
              <span style={{ fontSize: '1rem', color: '#666', display: 'block', marginTop: '0.4rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Santa Rosa, CA</span>
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
