import React from 'react';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  return (
    <>
    <section className="contact" style={{ 
      paddingTop: '10rem',
      paddingBottom: '5rem',
      minHeight: 'calc(100vh - 80px)', 
      background: 'var(--color-gray-light)',
      display: 'flex',
      alignItems: 'center'
    }}>
        <div className="container contact-grid">
          <div>
            <h2 className="section-title" style={{ marginBottom: '1rem' }}>CONTACT OUR TEAM.</h2>

            
            <form className="contact-form">
              <div className="form-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" className="form-control" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="emailAddress">Email Address</label>
                  <input type="email" id="emailAddress" className="form-control" placeholder="john@example.com" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="serviceLocation">Service Location</label>
                <select id="serviceLocation" className="form-control">
                  <option>Select a location...</option>
                  <option>Healdsburg, CA</option>
                  <option>Hopland, CA</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectDetails">Project Details</label>
                <textarea id="projectDetails" className="form-control" placeholder="Describe the project scope..."></textarea>
              </div>
              <button type="button" className="btn btn-primary" style={{ width: '100%', padding: '1.5rem' }}>
                SEND <ArrowRight size={18} style={{ marginLeft: 8 }}/>
              </button>
            </form>
          </div>

          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ marginBottom: '2rem', flexShrink: 0 }}>AREAS COVERED</h3>
            
            <div className="info-box" style={{ 
              marginBottom: '0', 
              padding: '0', 
              background: 'transparent', 
              boxShadow: 'none',
              flex: 1,
              display: 'flex'
            }}>
              <div style={{ 
                position: 'relative', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)', 
                border: '1px solid #ddd',
                flex: 1,
                minHeight: '480px'
              }}>
                <img src="/assets/images/service_area_v4.png" alt="Service Area Map - 5 Counties" style={{ width: '100%', display: 'block', height: '100%', objectFit: 'cover' }} />
                
                {/* Headquarters Pin for Healdsburg - Sonoma County */}
                <div style={{ 
                  position: 'absolute', 
                  top: '52%', 
                  left: '42%', 
                  transform: 'translate(-50%, -100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 10
                }}>
                  <div style={{ 
                    background: 'var(--color-primary)', 
                    color: 'white', 
                    padding: '4px 10px', 
                    borderRadius: '4px', 
                    fontSize: '0.65rem', 
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
                    whiteSpace: 'nowrap'
                  }}>
                    HEADQUARTERS: HEALDSBURG
                  </div>
                  <MapPin size={24} color="var(--color-primary)" fill="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
