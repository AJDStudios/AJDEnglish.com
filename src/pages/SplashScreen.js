import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SplashScreen.css';
import Scrumptious from '../helpers/scrumptious.webp';
import Bold from '../helpers/bold.webp';
import Smashed from '../helpers/smashedit.webp';
import Sharp from '../helpers/sharp.webp';
import Witty from '../helpers/witty.webp';

const SplashScreen = () => {
  const [revealState, setRevealState] = useState({
    bold: -1,
    scrumptious: -1,
    smashed: -1,
    sharp: -1,
    witty: -1
  });

  const navigate = useNavigate();

  const handleRevealClick = (word) => {
    setRevealState((prevState) => ({
      ...prevState,
      [word]: prevState[word] < 4 ? prevState[word] + 1 : -1 // Reset to -1 on the last step
    }));
  };

  const renderContent = (word, imgSrc, wordDescription, wordDefinition, tip) => {
    const steps = [
      <p>Do you know the word "{word}"?</p>,
      <>
        <img src={imgSrc} alt={wordDescription} />
        <p>{wordDescription}</p>
      </>,
      <p>Nice job, now you know!</p>,
      <p>{`${wordDescription} = ${wordDefinition}`}</p>,
      <p className="tip">{tip}</p>
    ];

    const stepIndex = revealState[word];

    return (
      <>
        {stepIndex >= 0 && steps[stepIndex]} {/* Display steps after the first click */}
        <button onClick={() => handleRevealClick(word)} className="click-here-btn">
          {stepIndex < 0
            ? 'Click here'
            : stepIndex < steps.length - 1
            ? 'Click here'
            : 'Reset'}
        </button>
      </>
    );
  };

  return (
    <div className="landing-page" data-testid="splash-screen">
      <h1>What's Your Main Language Challenge?</h1>
      <p>Pick one of the options below.</p>
      <div className="word-grid">
        <div className="word-section">
          <h2>Speaking Confidently</h2>
          <div className="interactive-word">
            {renderContent(
              'bold',
              Bold,
              'A Bold Person',
              'a confident person',
              'Confidence comes with time and practice. Confidence in language often comes when you stop focusing on perfection and embrace natural conversation.'
            )}
          </div>
        </div>

        <div className="word-section">
          <h2>Not being able to say what's in my head</h2>
          <div className="interactive-word">
            {renderContent(
              'scrumptious',
              Scrumptious,
              'A Scrumptious Cake',
              'a tasty cake',
              'Learning a few synonyms can give you more control over your speech, helping you express yourself more clearly and confidently.'
            )}
          </div>
        </div>

        <div className="word-section">
          <h2>Preparing for an Exam</h2>
          <div className="interactive-word">
            {renderContent(
              'smashed',
              Smashed,
              'Smashed It',
              'did very well on a test',
              'Exam prep can trip up even fluent speakers. Understanding the exam structure and practicing common mistakes can help avoid pitfalls.'
            )}
          </div>
        </div>

        <div className="word-section">
          <h2>Long Pauses</h2>
          <div className="interactive-word">
            {renderContent(
              'sharp',
              Sharp,
              'A Sharp Person',
              'a smart and quick-thinking person',
              'English is full of words with multiple meanings, like "sharp." Context and practice can help unlock the power of homophones and make your speech smoother.'
            )}
          </div>
        </div>

        <div className="word-section">
          <h2>Sounding Foolish</h2>
          <div className="interactive-word">
            {renderContent(
              'witty',
              Witty,
              'A Witty Person',
              'a quick, funny person',
              'The best way to stop feeling foolish? Embrace it. Learning to laugh at yourself can turn mistakes into moments of growth and confidence in language learning.'
            )}
          </div>
        </div>
      </div>      
      <div className="cta-section">
        <button 
          className="cta-button" 
          onClick={() => navigate('/services')}
          >
            Develop these skills</button>
      </div>
    </div>
  );
};

export default SplashScreen;
