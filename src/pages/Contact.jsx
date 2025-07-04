import { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert("Please fill all fields.");
      return;
    }

    try {
      // Simulate form submission
      await axios.post('https://jsonplaceholder.typicode.com/posts', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      alert("Submission failed. Please try again.");
    }
  };

  return (
    <main className="contact-page">
      <h2>Contact Us</h2>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows="5" value={formData.message} onChange={handleChange}></textarea>
          <button type="submit">Send Message</button>
          {submitted && <p className="success">Message sent successfully!</p>}
        </form>

        <div className="contact-info">
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> contact@todaysdental.com</p>
          <p><strong>Address:</strong> 123 Smile Street, Hyderabad, India</p>

          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.527024957927!2d78.4867!3d17.385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjknMTIuMCJF!5e0!3m2!1sen!2sin!4v1629644535243!5m2!1sen!2sin"
            width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </main>
  );
}

export default Contact;
