import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

function Contact() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const validateEmail = (val) => {
    setEmail(val);
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (val && !re.test(val)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || !email) {
      if (!email) setEmailError('Email address is required.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/mail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        e.target.reset();
        setEmail('');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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

            
            <form className="contact-form" onSubmit={handleSubmit}>
              {submitStatus === 'success' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: '#e6ffe6', border: '1px solid #00cc00', color: '#006600', borderRadius: '4px' }}>
                  Your message has been sent successfully! We will get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div style={{ padding: '1rem', marginBottom: '1.5rem', backgroundColor: '#ffe6e6', border: '1px solid #cc0000', color: '#cc0000', borderRadius: '4px' }}>
                  There was an error sending your message. Please try again later.
                </div>
              )}
              
              <div className="form-group form-row">
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" name="fullName" className="form-control" placeholder="John Doe" required />
                </div>
                <div>
                  <label htmlFor="emailAddress">Email Address</label>
                  <input 
                    type="email" 
                    id="emailAddress" 
                    name="emailAddress" 
                    className="form-control" 
                    placeholder="john@example.com" 
                    required 
                    value={email}
                    onChange={(e) => validateEmail(e.target.value)}
                    style={{ borderColor: emailError ? 'red' : undefined }}
                  />
                  {emailError && <span style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.2rem', display: 'block' }}>{emailError}</span>}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="serviceLocation">Service Location</label>
                <select id="serviceLocation" name="serviceLocation" className="form-control" required>
                  <option value="">Select a location...</option>
                  <option value="Mendocino County">Mendocino County</option>
                  <option value="Lake County">Lake County</option>
                  <option value="Napa County">Napa County</option>
                  <option value="Sonoma County">Sonoma County</option>
                  <option value="Marin County">Marin County</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="projectDetails">Project Details</label>
                <textarea id="projectDetails" name="projectDetails" className="form-control" placeholder="Describe the project scope..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.5rem' }} disabled={isSubmitting}>
                {isSubmitting ? 'SENDING...' : 'SEND'} <ArrowRight size={18} style={{ marginLeft: 8 }}/>
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
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
