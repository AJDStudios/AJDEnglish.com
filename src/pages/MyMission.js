import React from 'react';
import '../styles/MyMission.css';

const Mission = () => {
  return (
    <div className="mission-page">
      <h2>AD's Mission</h2>
      <div className="mission-section">  
        <h3>🌍 Help All Communicate with Fewer Barriers</h3>
        <p>Anyone can communicate in whatever target language they want, it just takes a clear goal and understanding how YOU learn.</p>
      </div>
      <div className="mission-section">  
        <h3>🛠️ Build Better Learning Tools</h3>
        <p>Games and learning aides are limited and repetitive, as well as unambitious. Learning using a non-learning tool works because it's fun. Marrying learning tool with actually fun is the goal</p>
      </div>  
      <div className="mission-section">  
        <h3>💡 Make Language Learning Exciting</h3>
        <p>Changing the mindset that learning a language is difficult or boring. Feeling like you're in a class is both a failure of teaching and not effective.</p>
      </div>
      <div className="mission-section">  
        <h3>📚 Teachers as One of Many Tools</h3>
        <p>Intuitively, most people know you can't learn a language sitting for two hours with a tool. My job is to enhance your learning, not magically give you my knowledge</p>
      </div>
      <div className="mission-section">  
        <h3>🏠 Empower Students to Help Themselves</h3>
        <p>"Homework" often feels like a negative word, and when a teacher sets a seemingly useless task... it is. However, it is a good word for what actually works. Choosing yourself to improve a skill at home</p>
      </div>
    </div>
  );
};

export default Mission;
