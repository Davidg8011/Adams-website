import React from 'react';
import { Truck, Factory } from 'lucide-react';

function About() {
  return (
    <section className="about-section" style={{ 
      paddingTop: '12rem', 
      paddingBottom: '12rem', 
      background: '#f9f9f9'
    }}>
      <div className="container about-grid">
        <div style={{ position: 'relative' }}>
          {/* Top-Left Accent */}
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            left: '-20px', 
            width: '100px', 
            height: '100px', 
            borderLeft: '6px solid var(--color-primary)', 
            borderTop: '6px solid var(--color-primary)',
            zIndex: 3
          }}></div>
          
          <img 
            src="/assets/images/IMG_7336.jpg" 
            alt="Advanced Earthworks - Project Focus" 
            className="about-img" 
            style={{ 
              width: '100%', 
              height: 'auto',
              boxShadow: '0 40px 80px rgba(0,0,0,0.15)', 
              borderRadius: '2px',
              position: 'relative',
              zIndex: 2,
              display: 'block'
            }} 
          />

          {/* Bottom-Right Accent */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-20px', 
            right: '-20px', 
            width: '100px', 
            height: '100px', 
            borderRight: '6px solid var(--color-primary)', 
            borderBottom: '6px solid var(--color-primary)',
            zIndex: 3
          }}></div>
        </div>
        <div>
          <h2 className="section-title" style={{ 
            fontSize: '3.5rem', 
            color: 'var(--color-text-dark)', 
            marginBottom: '2.5rem', 
            lineHeight: 1.1,
            letterSpacing: '-1.5px',
            fontWeight: 800
          }}>
            A LOCAL, <span style={{ color: 'var(--color-primary)' }}>FAMILY OWNED</span> BUSINESS.
          </h2>
          <p style={{ 
            color: '#555', 
            marginBottom: '2rem', 
            fontSize: '1.4rem', 
            lineHeight: '1.7', 
            fontWeight: 400 
          }}>
            Advanced Earthworks is your source for hassle-free, dependable grading, demolition, and construction services in Sonoma, Mendocino, and Lake County. When you hire us for a project, you can rest assured that we'll approach the job with precision and care. 
          </p>
          <p style={{ 
            color: '#555', 
            fontSize: '1.4rem', 
            lineHeight: '1.7', 
            fontWeight: 400 
          }}>
            Have questions? We'll be happy to answer them and explain how the process works. We want you to feel comfortable for having chosen us, and we'll go out of our way to earn your trust. Contact us to schedule an estimate and learn more about our services.
          </p>


        </div>
      </div>
    </section>
  );
}

export default About;
