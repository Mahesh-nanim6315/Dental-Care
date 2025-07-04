import { useState } from 'react';

const services = [
  {
    title: 'Teeth Cleaning',
    description: 'Routine dental cleaning for healthy gums and teeth.',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent replacement for missing teeth.',
  },
  {
    title: 'Braces & Aligners',
    description: 'Orthodontic treatments for straightening teeth.',
  },
  {
    title: 'Root Canal Therapy',
    description: 'Treatment for infected or decayed tooth pulp.',
  },
  {
    title: 'Tooth Extraction',
    description: 'Removal of severely damaged or decayed teeth.',
  },
  {
    title: 'Teeth Whitening',
    description: 'Cosmetic procedure to whiten and brighten teeth.',
  },
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <main className="services-page">
      <h2>Our Services</h2>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3 onClick={() => toggleAccordion(index)} className="accordion-header">
              {service.title}
            </h3>
            {activeIndex === index && (
              <p className="service-description">{service.description}</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default Services;
