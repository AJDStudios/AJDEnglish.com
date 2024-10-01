import React from 'react';
import '../styles/qualifications.css';

const Qualifications = () => {
  return (
    <div className="qualifications-page">
      <section className="qualifications-overview">
        <h1>My Qualifications</h1>
      </section>
      <section className="qualifications-list">
        <h2>Education & Certifications</h2>
        <ul>
          <li>TEFL (140 hour course) + 20 observed classroom hours</li>
          <li>TEFL Diploma (250 hour course) with research paper </li>
          <li>Certificate for teaching Business English (CTBE - 50 hours)</li>
          <li>Certificate for teaching young learners (TTYL - 50 hours)</li>
        </ul>
      </section>
      <section className="experience-section">
        <h2>Experience</h2>
        <ul>
          <li>15+ years of experience teaching English as a Second Language</li>
          <li>Taught in multiple countries, including Russia, Czechia France and the UK</li>
          <li>Experience teaching students of 30+ nationalities</li>
          <li>Specialist in exam preparation: IELTS, TOEFL, Cambridge Exams</li>
          <li>Extensive experience teaching medical, aviation and business English</li>
          <li>Youngest student was 3 years old, eldest was 95</li>
        </ul>
      </section>
      <section className="students-section">
        <h2>Nationalities Taught</h2>
        <div className='flags'>
            <span className="flag">🇫🇷</span>
            <span className="flag">🇪🇸</span>
            <span className="flag">🇩🇪</span>
            <span className="flag">🇮🇹</span>
            <span className="flag">🇵🇹</span>
            <span className="flag">🇨🇿</span>
            <span className="flag">🇸🇰</span>
            <span className="flag">🇵🇱</span>
            <span className="flag">🇦🇹</span>
            <span className="flag">🇷🇺</span>
            <span className="flag">🇺🇦</span>
            <span className="flag">🇧🇾</span>
            <span className="flag">🇹🇲</span>
            <span className="flag">🇰🇿</span>
            <span className="flag">🇦🇲</span>
            <span className="flag">🇷🇴</span>
            <span className="flag">🇸🇪</span>
            <span className="flag">🇨🇭</span>
            <span className="flag">🇸🇦</span>
            <span className="flag">🇦🇪</span>
            <span className="flag">🇰🇷</span>
            <span className="flag">🇨🇳</span>
            <span className="flag">🇯🇵</span>
            <span className="flag">🇴🇲</span>
            <span className="flag">🇲🇽</span>
            <span className="flag">🇭🇷</span>
            <span className="flag">🇷🇸</span>
            <span className="flag">🇲🇪</span>
            <span className="flag">🇱🇻</span>
            <span className="flag">🇪🇪</span>
        </div>
      </section>
    </div>
  );
};

export default Qualifications;
