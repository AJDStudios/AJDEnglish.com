import React from 'react';
import '../styles/Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {

  const navigate = useNavigate();

  const handleBookingClick = () => {
    window.open('https://calendly.com/ajdstudios', '_blank');
  };

  return (
    <div className="services-page">
      <section className="lesson-overview">
        <h1>Lesson Overview</h1>
        <p>All lessons are 90 minutes and take place online via your preferred platform. Whether you want to improve your communication skills, prepare for an important exam, or focus on industry-specific language, I offer personalized lessons tailored to your needs.</p>
      </section>

      <section className="services-list">
        <h2>Available Services</h2>
        <div className="service-item">
          <h3>Standard Communication Lesson</h3>
          <p>Price: £50 per lesson | £240 for 5 lessons | £450 for 10 lessons</p>
          <p>Aimed at improving your fluency, accuracy, and confidence in everyday English. These lessons focus on natural conversation, vocabulary expansion, and personalized feedback.</p>
          <button className="book-btn" onClick={handleBookingClick}>Book Now</button>
        </div>

        <div className="service-item">
          <h3>Exam Preparation</h3>
          <p>Price: £60 per lesson + cost of books (if applicable) | £280 for 5 lessons | £500 for 10 lessons</p>
          <p>Tailored exam preparation for IELTS, TOEFL, Cambridge Exams, and more. Includes mock exams, feedback, and tips for maximizing your score.</p>
          <button className="book-btn" onClick={handleBookingClick}>Book Now</button>
        </div>

        <div className="service-item">
          <h3>Specialist Lessons (Medical, Business, Aviation, etc.)</h3>
          <p>Price: Available on request</p>
          <p>Industry-specific lessons designed to help professionals use English effectively in their careers. Contact for more information on pricing and availability.</p>
          <button className="info-btn" onClick={() => navigate('/contact')} > Request More Information</button>
        </div>
      </section>

      <section className="minors">
        <h2>Lessons for Minors</h2>
        <div className="minor-item">
          <h3>Minors (Under 13)</h3>
          <p>Price: £40 per 45-minute session | £180 for 5 lessons | £360 for 10 lessons</p>
          <p>Shorter, engaging lessons for younger learners. Perfect for keeping focus and maximizing results.</p>
          <button className="book-btn" onClick={handleBookingClick}>Book Now</button>
        </div>

        <div className="minor-item">
          <h3>Teenagers (13-17)</h3>
          <p>Price: Standard pricing applies, but with tailored materials for younger learners.</p>
          <button className="book-btn" onClick={handleBookingClick}>Book Now</button>
        </div>
      </section>

      <section className="how-lessons-work">
        <h2>How Lessons Work</h2>
        <p>Each lesson begins with a quick warm-up exercise to get you comfortable. From there, we focus on building your skills using real-world examples and conversational practice tailored to your goals.</p>
      </section>

      <section className="cta-section">
        <p>Not seeing what you need?         
          <button 
            className="cta-button" 
            onClick={() => navigate('/contact')}
          >
          Contact</button> for custom solutions.
        </p>
      </section>
    </div>
  );
};

export default Services;
