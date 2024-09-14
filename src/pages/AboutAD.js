import React from 'react';
import Teacher from '../helpers/teacher.webp'
import Man from '../helpers/man.webp'
import "../styles/AboutAD.css"

const AboutAD = () => {
  return (
    <>
      <div className="AboutAD">
        <div className="AboutTeacher">
          <h2>About The Teacher</h2>
          <img src={Teacher} alt="AD with three adult students at christmas, one is holding a toy monkey." className="teacher-image" />
          <p className="teacher text">
            <br></br>
            With over 15 years of experience teaching English, both in classrooms and online, I've had the privilege of working with a diverse range of students. 
            My career has taken me to private schools, summer programs, businesses, and even my own independent practice, giving me a wealth of experience across multiple teaching environments.
            <br></br>
            <br></br>
            I've worked in the UK, France, Czech Republic, and Russia, teaching students from the ages of 3 to 97. 
            I hold a TEFL, a TEFL Diploma, and certificates in teaching business English and young learners. 
            I've also conducted research on language acquisition and the effects of gaming in a foreign language. inspired somewhat my Stephen Krashen's methodologies.
            <br></br>
            <br></br>
            For me, success comes down to two things: my students learning while forgetting they're in a classroom and gaining the confidence to have real conversations without feeling nervous. 
            My focus is always on creating a relaxed, engaging atmosphere where students can thrive and build real-world communication skills, while working towards whatever their personal goals happen to be.
            <br></br>
          </p>
        </div>
        <div className="AboutMan">
          <h2>About The Man</h2>
          <img src={Man} alt="AD Standing in front of the Borodino Museum Panorama." className="man-image" />
          <p className="man text">
            <br></br>
            In my free time, I love creating. I spent two years working professionally in software development and continue to make games and software as passion projects. 
            Whether designing 2D and 3D characters, composing music, or creating game concepts, creativity fuels a lot of what I do.
            <br></br>
            <br></br>
            I have a general love for language. 
            While I would never call myself a polyglot, I've always managed to pick up enough language to live comfortably in the countries I've called home, including France, Czech Republic, and Russia. 
            I'm also a musician, playing guitar, vocals, bass, keyboard, and drums.
            <br></br>
            <br></br>
            When I'm not working on projects, you'll find me playing games, making and playing warhammer, reading either a book or comic, or learning for fun... yes fun. 
            I'm a nerd and proud of it.
            <br></br>
            <br></br>
            Though I used to play rugby, age has caught up with me, but my love for the sport remains strong. 
            Proudly Welsh, I'm fascinated by history, culture, and the stories that connect people across the world. 
            I live on the English-Welsh border with my wife and cat, both of whom are Russian.
            <br></br>
          </p>
        </div>
      </div>  
    </>
  );
};

export default AboutAD;