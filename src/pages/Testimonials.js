import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/Testimonials.css';
import Awesome from '../helpers/awesome.webp';
import Student from '../helpers/student1.webp';
import Student2 from '../helpers/student2.webp';
import Student3 from '../helpers/student3.webp';
import Student4 from '../helpers/student4.webp';
import Student5 from '../helpers/student5.webp';
import Student6 from '../helpers/student6.webp';
import Student7 from '../helpers/student7.webp';
import Student8 from '../helpers/student8.webp';
import Student9 from '../helpers/student9.webp';
import Student10 from '../helpers/student10.webp';
import T1 from '../helpers/testimonial1.webp';
import T2 from '../helpers/testimonial2.webp';
import T3 from '../helpers/testimonial3.webp';
import T4 from '../helpers/testimonial4.webp';
import T5 from '../helpers/testimonial5.webp';
import T6 from '../helpers/testimonial6.webp';
import T7 from '../helpers/testimonial7.webp';
import T8 from '../helpers/testimonial8.webp';
import T9 from '../helpers/testimonial9.webp';
import T10 from '../helpers/testimonial10.webp';
import Misc1 from '../helpers/misc1.webp';
import Misc2 from'../helpers/misc2.webp';
import Misc3 from '../helpers/misc3.webp';
import Misc4 from'../helpers/misc4.webp';
import Misc5 from'../helpers/misc5.webp';
import Misc6 from '../helpers/misc6.webp';
import Misc7 from '../helpers/misc7.webp';
import Misc8 from '../helpers/misc8.webp';
import Misc9 from '../helpers/misc9.webp';
import Misc10 from'../helpers/misc10.webp';

const Testimonials = () => {
  return (
    <>
    <section className="testimonials-page">
      <h1>
        My Students Are Awesome
      </h1>
      <div>
        <img src={Awesome} alt="AD in a classroom throwing paper into the air" className="awesome" />
        <p>No matter how many years I do this, students continue to inspire and humble me. 
          I decided against a dry "reviews" page and instead opted to showcase some moments with students, gifts they've generously given talent they've displayed and a couple of silly ones too.
          This page has plenty of scope for more moments even though I've moved primarily to an online approach</p>
      </div>
      <div className="testimonial-section">
        <h2>Gratitude from My Students</h2>
            <p>From handwritten notes to thoughtful gifts, my students have shown their appreciation in many ways.</p>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay interval={4000} stopOnHover className='carousel'>
              <div>
                <img src={T1} alt="A Happy teacher's day card, hand made by a student" />
              </div>
              <div>
                <img src={T2} alt="AD holding up a piece of paper with commentary from various students" />
              </div>
              <div>
                <img src={T3} alt="Another piece of paper, this time in Russian, still with comments form students" />
              </div>
              <div>
                <img src={T4} alt="Some open cards with comments from students" />
              </div>
              <div>
                <img src={T5} alt="A cup with depicting a group of AD's Students" />
              </div>
              <div>
                <img src={T6} alt="A hand made card with a drawing of AD and the text that reads it takes a big heart to shape little minds" />
              </div>
              <div>
                <img src={T7} alt="A cup with the words The Best teacher on it" />
              </div>
              <div>
                <img src={T8} alt="AD holding a rugby ball signed by students" />
              </div>  
              <div>
                <img src={T9} alt="Another hand made card saying Happy new year" />
              </div>  
              <div>
                <img src={T10} alt="miscellaneous gifts from studnets" />
              </div>  
            </Carousel>
          </div>  

          <div className="testimonial-section">
            <h2>In Class and Beyond</h2>
            <p>Just some images of students, in class and out.</p>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay interval={4000} stopOnHover className='carousel'>
              <div>
                <img src={Student} alt="AD standing with two students, one is hiding behind him the other is taking a selfie with half her face showing" />
              </div>
              <div>
                <img src={Student2} alt="Students continuing to work during a blackout" />
              </div>
              <div>
                <img src={Student3} alt="AD with some students goofing around" />
              </div>
              <div>
                <img src={Student4} alt="AD with some younger students" />
              </div>
              <div>
                <img src={Student5} alt="AD with a teenage class of students" />
              </div>
              <div>
                <img src={Student6} alt="AD with some older teenagers, one is dressed as santa" />
              </div>
              <div>
                <img src={Student7} alt="Teen students at their desk in class" />
              </div>
              <div>
                <img src={Student8} alt="A group of older teens outside during an excursion" />
              </div>
              <div>
                <img src={Student9} alt="AD with a student holidng a certificate - their name has been blurred" />
              </div>
              <div>
                <img src={Student10} alt="AD and a student pose for a selfie" />
              </div>                        
            </Carousel>
          </div>

          <div className="testimonial-section">
            <h2>Fun in the Classroom</h2>
            <p>Just because it's a lesson, doesn't mean it has to feel like one. There's always some room for fun, and talent.</p>
            <Carousel showThumbs={false} showStatus={false} infiniteLoop useKeyboardArrows autoPlay interval={4000} stopOnHover className='carousel'>
            <div>
              <img src={Misc1} alt="AD standing in a class, his arms covered in writing from students" />
            </div>
            <div>
              <img src={Misc2} alt="A student drawing of the welsh flag" />
            </div>
            <div>
              <img src={Misc3} alt="Another student drawing of the welsh flag" />
            </div>
            <div>
              <img src={Misc4} alt="A hand made origami flower that's pinned to AD's classroom wall" />
            </div>
            <div>
              <img src={Misc5} alt="An excellent drawing of the Welsh dragon on a piece of paper" />
            </div>  
            <div>
              <img src={Misc6} alt="A student dressed in a scream mask posing in class" />
            </div>
            <div>
              <img src={Misc7} alt="A handmade halloween mask" />
            </div>
            <div>
              <img src={Misc8} alt="A drawing on the board of two characters talking, titled the 6 word story, the first character says I'm lonely, the second says now you're not." />
            </div>
            <div>
              <img src={Misc9} alt="A drawing of AD on the board with the speech bubble I will teach you" />
            </div>
            <div>
              <img src={Misc10} alt="A drawing of the welsh dragon on the white board" />
            </div>
            </Carousel>
          </div>
      </section>
      </>  
    );
};

export default Testimonials;
