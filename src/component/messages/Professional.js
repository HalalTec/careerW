import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Professional = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Skills are rarely used or are irrelevant to current role.',
            'Regularly feel overwhelmed by tasks that require specific expertise.',
            'No opportunities for skill development or learning.'
          ],
          reflectiveQuestions: [
            'Do you feel completely unprepared or under-skilled in your job?',
            'Are you struggling to keep up with basic professional demands because of skill gaps?',
            'Do you feel like your skills are stagnating or irrelevant in your current career path?'
          ],
          aspiIndication: [
            'Limited or no professional skills in my field.'
          ],
          futureQuestions: [
                'Do I feel unprepared or inexperienced in my career?',
                'Are there key skills that I lack which are essential to my career success?',
                'Am I facing significant challenges in applying my skills?',
                'Am I struggling to meet the basic expectations in my current role?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Skills are rarely applied and require significant improvement',
                        'Infrequent opportunities to learn or advance expertise.',
                        'Limited feedback on performance or growth in skill areas.'
          ],
          reflectiveQuestions: [
            'Are you often unsure how to apply your expertise in practical situations?',
            'Do you often feel like you are falling behind in your professional development?',
            'How often do you seek feedback, and when received, how actionable is it for your skills?',
          ],
          aspiIndication: [
                'Basic understanding of my profession with room for significant improvement.'
          ],
          futureQuestions: [
                                'Do I understand the fundamentals of my career, but lack in-depth expertise?',
                                'Am I only able to apply basic skills with guidance?',
                                'Are there clear gaps in my knowledge that limit my ability to perform effectively?',
                                "Do I need more exposure and practice to build confidence in my skills?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Knowledge gaps are noticeable but manageable with some effort.',
                'Occasionally able to apply learned skills, but struggle with consistency.',
                'Seeking more professional development but have limited resources.'
            ],
            reflectiveQuestions: [
                'Are you actively looking for opportunities to develop your skills but encounter obstacles to access them?',
                'Do you find that your skills are not always aligned with the expectations of your role?',
                'Are you able to complete tasks but often need extra time or support to do so?'
            ],
            aspiIndication: [
                    'Some foundational skills and abilities, but still lacking consistency and depth.'
            ],
            futureQuestions: [
                "Do I have a basic level of proficiency, but struggle to apply my skills consistently?",
                'Are there frequent moments of doubt about my abilities in my current job?',
                'Do I feel like my skills are underdeveloped, despite some knowledge?',
                'Am I often seeking help from others for tasks that should be within my capabilities?'
            ]
        },

        {
            score: 4,
            indication: [
                'Can apply some skills with confidence, but there’s room for growth.',
                'Learning and development are on your radar but have yet to make a big impact.',
                'There is some focus on growth, but personal development is inconsistent.'
            ],
            reflectiveQuestions: [
                'Do you occasionally feel confident in your abilities but also recognize areas for improvement?',
                'Are you taking proactive steps to learn but haven’t yet seen measurable progress in your career?',
                'Do you set goals for skills development, and how often do you follow through with them?'
            ],
            aspiIndication: [
                'Adequate skills, but significant improvement needed for greater impact.'
            ],
            futureQuestions: [
                "Do I perform at a competent level but recognize that there is much more to learn?",
                'Can I complete my tasks without external help but know I could do better with more experience?',
                'Are there areas where I still feel unsure or inefficient in applying my skills?',
                'Am I missing the advanced skills needed for higher-level tasks or leadership roles?'
            ]
        },
        {
            score: 5,
            indication: [
                'Competent in most areas but lack deep expertise in key areas.',
                'Skills are adequate for current role, but you feel stagnant in learning.',
                'Starting to seek new challenges and skill-building opportunities.'
            ],
            reflectiveQuestions: [
                'Are you generally able to meet job expectations but know that you could be better in certain areas?',
                'Do you often feel like you’re just getting by without truly advancing or excelling?',
                'Have you reached a plateau where you feel the need for more opportunities to grow but aren’t sure how to find them?'
            ],
            aspiIndication: [
                'Good proficiency, able to handle most tasks independently and with some specialization.'                
            ],
            futureQuestions: [
                "Can I complete the majority of tasks with confidence, but still encounter challenges in advanced situations?",
                'Do I feel competent in my role but want to deepen my expertise for career advancement?',
                'Are there areas where I have a solid understanding but lack the mastery required to be truly competitive?',
                'Do I consistently seek opportunities to refine my skills?'
            ]
        },
        {
            score: 6,
            indication: [
                'Skills are applied frequently, but there’s still room for mastery.',
                'Training and development are occasionally undertaken.',
                'There’s a desire to go deeper in certain areas, but distractions arise.'
            ],
            reflectiveQuestions: [
                "Are you able to perform your tasks well but sometimes feel you could execute them more efficiently or expertly?",
                'Do you participate in learning opportunities, but they don’t feel like they’re giving you the edge you need?',
                'Are you focused on certain professional skills but find other responsibilities hinder your progress?'
            ],
            aspiIndication: [
                'Solid proficiency with some advanced skills and expertise in my field.'
            ],
            futureQuestions: [
                'Can I perform most tasks without difficulty and contribute meaningfully to projects?',
                'Do I have some specialized skills that set me apart from others in my field?',
                'Have I started to gain recognition for my expertise, but still feel there’s more to learn?',
                "Am I working on becoming an expert in specific areas within my career?"
            ]
        },
        {
            score: 7,
            indication: [
                'Can perform tasks well, with expertise in several areas.',
                'Regularly seek out opportunities to build on professional skills.',
                'Feedback is generally positive, though there are occasional setbacks.'
            ],
            reflectiveQuestions: [
                'Do you often feel confident in your role, but there are still areas you’d like to develop further?',
                'Do you actively pursue skill development and growth in a way that feels rewarding but still incomplete?',
                'When receiving feedback, do you feel that you’re generally on the right track but could improve in specific areas?'
            ],
            aspiIndication: [
                    'Strong expertise and a reliable resource for others, with significant potential for growth.'
            ],
            futureQuestions: [
                'Do others frequently seek my advice or expertise in my field?',
                'Am I recognized as an expert in certain areas of my profession?',
                'Do I still have the capacity to expand my knowledge and grow further in my role?',
                'Am I often trusted with challenging or complex tasks that require my advanced skills?'
            ]
        }, {
            score: 8,
            indication: [
                'Proficient and recognized for expertise in most areas of your work.',
                'Strong interest in learning and improving, continuously advancing skills.',
                'Skills are well integrated into work, making you a strong contributor.'
            ],
            reflectiveQuestions: [
                'Do you feel recognized and valued for your expertise in your field, with occasional room for fine-tuning?',
                'Are you consistently taking the initiative to learn and improve your skills in areas critical to your success?',
                'Do you feel that your expertise is an asset, and you are able to leverage it effectively for your career growth?'
            ],
            aspiIndication: [
                'Advanced expertise with leadership influence in my professional field.'
            ],
            futureQuestions: [
                'Do I lead projects, teams, or initiatives that require a high level of specialized skills?',
                'Am I seen as a go-to authority within my field, with others looking to me for guidance?',
                'Do I actively contribute to shaping trends or innovations in my industry?',
                'Am I applying my advanced skills in ways that positively impact my team or organization?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly skilled with mastery in many aspects of your role.',
                'Continually growing and excelling in professional development.',
                'Able to teach or lead others due to high level of expertise.'
            ],
            reflectiveQuestions: [
                'Are you often seen as an expert in your field, with skills that contribute significantly to your success?',
                'Do you take on leadership roles or mentor others in areas where you have deep expertise?',
                'Are you regularly sought after for advice, and do you enjoy teaching or guiding others in your professional area?'
            ],
            aspiIndication: [
                'Mastery of skills, consistently innovative and influencing the industry at a high level.'
            ],
            futureQuestions: [
                'Do I possess a deep and broad mastery of my field, often setting new standards?',
                'Have I contributed original ideas, methods, or systems that have been adopted in my profession?',
                'Do I inspire others through my expertise and leadership in my career?',
                'Am I considered one of the top professionals in my field, influencing its direction?'
            ]
        },
        {
            score: 10,
            indication: [
                'Recognized expert with a broad, deep, and cutting-edge skill set.',
                'Constantly innovating and pushing the boundaries of your field.',
                'Skills are fully integrated and aligned with both personal and professional goals.'
            ],
            reflectiveQuestions: [
                'Do you feel that your professional skills are at the peak of their potential, allowing you to take on leadership roles or advanced challenges?',
                'Are you continually innovating in your field, ensuring that you stay ahead of industry trends and developments?',
                'Do you feel that your professional skills not only serve your career but are aligned with your highest aspirations?'
            ],
            aspiIndication: [
                'A recognized global leader in my profession, consistently creating breakthroughs and advancing the industry.'
            ],
            futureQuestions: [
                'Do I hold a position of influence, shaping the future of my industry on a global scale?',
                'Have I achieved significant, groundbreaking accomplishments that impact my field or industry?',
                'Am I widely respected for my contributions, with a reputation that extends beyond my organization or region?',
                'Do I continually innovate and push the boundaries of what is possible in my profession?'
            ]
        },
        {
            score: 10,
            indication: 'Exceptional spiritual connection, profound inner peace, complete alignment with purpose, deeply fulfilling spiritual practices, strong sense of transcendence.',
            reflectiveQuestions: [
                'Do you feel a profound, unbreakable connection to your spirituality and purpose?',
                'Are you consistently at peace, with a deep sense of fulfillment and clarity?',
                'Does your spirituality define and elevate your daily life?'


            ]
        }

      ];

      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      };
      

      
      if (quest < 1) {
        return ( 
            <>
                       <div className="message" >
                    <div className="card"> 
                    <div className="confirm">
                    <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
                    <button onClick={close} style={{color:"red"}} className="close">X</button>
                    </div>  
                    <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
                    <h3>Indicators for level {currentIndex+1}:</h3>
                    <p style={{fontSize:"15px"}}> {categories[currentIndex].indication} </p>
                    <h3> Reflective Questions:</h3>
                    <ul style={{textAlign:"left"}}>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[0]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[1]}</li>
                    <li style={{listStyle:"disc"}}> {categories[currentIndex].reflectiveQuestions[2]}</li>
                    </ul>
                    <div className="ref-button">
                    <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
                    
                    <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
                    </div>
                    </div>
                </div>
                </>
        )
      }else {
        return (<> 
        
            {/* future */}
                  <div className="message" >
               <div className="card"> 
               <div className="confirm">
               <h2> Confirm Your Selection of: {categories[currentIndex].score} </h2>
               <button onClick={close} style={{color:"red"}} className="close">X</button>
               </div>
               <h5 style={{color:"red"}}>Go through the description below and confirm your selection, or use the page controls to make changes</h5>
               <h3>Aspirational Indicators {currentIndex+1}:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].aspiIndication.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>
               <h3> Reflective Questions:</h3>
               <ul style={{textAlign:"left"}}>
               {categories[currentIndex].futureQuestions.map((indication, index) => (
                   <li key={index} style={{ listStyle: "disc" }}>
                   {indication}
                   </li>
               ))}
               </ul>                
               <div className="ref-button">
               <button onClick={prevSlide} className=" prev" style={{marginTop:"0px"}}><img src={back}  /></button> <button  id="myButton" onClick={submit} >{currentIndex+1}</button>
               
               <label htmlFor="myButton" className="select"> Confirm {currentIndex+1}</label> <button onClick={nextSlide} className=" prev" style={{marginTop:"0px"}}><img src={next} /></button>
               </div>
               </div>
           </div>
           </>
           
       
    );
     }
   

          
}



 
export default Professional;