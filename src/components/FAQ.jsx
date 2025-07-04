import { useState } from 'react';

const faqs = [
  {
    question: "What are your working hours?",
    answer: "We are open from 9 AM to 7 PM, Monday to Saturday.",
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Yes, but we recommend booking an appointment to avoid waiting.",
  },
  {
    question: "Are emergency dental services available?",
    answer: "Yes, we provide emergency dental care. Please call us immediately.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, index) => (
        <div key={index} className="faq-item">
          <h4 onClick={() => toggleFAQ(index)} className="faq-question">
            {item.question}
          </h4>
          {activeIndex === index && (
            <p className="faq-answer">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
}

export default FAQ;
