import React from 'react';

function Services() {
  const servicesList = [
    { title: 'Commercial Demolition', desc: 'Comprehensive teardowns and safe structural removals for large commercial properties and industrial sites.' },
    { title: 'Concrete Demolition', desc: 'Heavy-duty jackhammering, concrete cutting, and slab removal for driveways, foundations, and commercial bases.' },
    { title: 'Debris Removal', desc: 'Swift and efficient hauling of construction, organic, or mixed debris to keep your site clear and safe.' },
    { title: 'Demolition', desc: 'General demolition services tackling everything from small outbuildings to full property clear-outs.' },
    { title: 'Dumpster Rental', desc: 'Flexible roll-off dumpster rentals tailored to your project size and duration, ensuring easy waste management.' },
    { title: 'Earthquake Retrofitting', desc: 'Specialized foundation bolting and structural reinforcements to meet California seismic safety standards.' },
    { title: 'Excavation', desc: 'Precision earth-moving, trenching, and foundation digging using our advanced heavy equipment fleet.' },
    { title: 'Land Clearing', desc: 'Removing trees, brush, and heavy overgrowth to prepare raw land for successful future development.' },
    { title: 'Land Grading and Excavation', desc: 'Expert leveling, soil stabilization, and contouring for optimal drainage and building foundations.' },
    { title: 'Oil Tank Removal', desc: 'Safe, Hazmat-certified extraction and disposal of underground and above-ground heating oil tanks.' },
    { title: 'Scrap Metal Disposal', desc: 'Large-scale industrial recycling and hauling for construction and demolition metal waste.' },
    { title: 'Residential Demolition', desc: 'Careful, respectful teardowns of residential structures, handling neighborhood constraints delicately.' }
  ];

  return (
    <section className="services-page" style={{ 
      paddingTop: '10rem', 
      paddingBottom: '10rem', 
      background: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/assets/images/IMG_9971.jpg") no-repeat center center / cover',
      backgroundAttachment: 'fixed',
      minHeight: '100vh'
    }}>
      <div className="container" style={{ maxWidth: '1400px' }}>
        <div className="services-grid-main">
          {servicesList.map((service, index) => (
            <div key={index} className="service-card-new">
              <div className="service-card-accent"></div>
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
}

export default Services;
