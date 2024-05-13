import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Define the faqData array with FAQ items
  const faqData = [
    {
      question: 'Question 1:  How does Sahayaks technology help individuals with disabilities?',
      answer: 'Answer 1: Sahayaks technology provides innovative hardware and software solutions designed to enhance accessibility and empower individuals with disabilities. From communication aids to assistive devices, our products are tailored to meet diverse needs and improve quality of life.'
    },
    {
      question: 'Question 2: Is Sahayaks technology suitable for all types of disabilities?',
      answer: 'Answer 2: Yes, Sahayaks technology is designed to be inclusive and adaptable. Whether someone has physical, sensory, or cognitive challenges, our solutions can be customized to suit their unique requirements. We believe in creating tools that enable individuals to thrive regardless of their abilities.'
    },
    {
        question: 'Question 3: How can I get access to Sahayaks products and services?',
        answer: 'Answer 3: Getting access to Sahayaks products and services is easy! You can explore our range of offerings on our website and reach out to us through email or phone to discuss your specific needs. Our team is dedicated to providing personalized support and guidance to help you find the right solutions.'
      },
      {
        question: 'Question 4: What support does Sahayak offer to organizations and educational institutions?',
        answer: 'Answer 4: Sahayak is committed to fostering inclusivity in organizations and educational institutions. We offer consultancy services, training programs, and tailored solutions to help businesses and schools create accessible environments and support individuals with disabilities. Contact us to learn more about how we can collaborate to promote inclusivity in your community.'
      },
    // Add more FAQ items as needed
  ];

  return (
    <div className="container px-5 py-24 mx-auto">
      <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Frequently Asked Questions</h2>
      <div className="accordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              id={`accordion-button-${index}`}
              aria-expanded={activeIndex === index ? 'true' : 'false'}
              onClick={() => toggleAccordion(index)}
            >
              <span className="accordion-title">{item.question}</span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div
              className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
              aria-hidden={activeIndex !== index}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
