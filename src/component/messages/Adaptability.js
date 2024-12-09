import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Adaptability = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No awareness of industry trends or changes.',
            'Resistant to new ideas and changes in the workplace.',
            'Lack of skills for future roles or technologies.'
          ],
          reflectiveQuestions: [
            'How often do you feel overwhelmed by changes in your industry?',
            'Are you open to learning new skills or adapting to new roles?',
            'What fears do you have about future changes in your career?'
          ],
          aspiIndication: [
            'Has limited awareness of future trends in the industry.',
            'Lacks flexibility in current role and shows resistance to change.',
            'Struggles with basic adaptability in unexpected situations.'
          ],
          futureQuestions: [
                'How often do you consider future industry trends and developments in your career planning?',
                'How comfortable are you with change in your career? Do you avoid stepping outside of your comfort zone?',
                'Can you identify situations where you felt unprepared or resistant to adapt?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Minimal efforts to adapt to changes; mostly reactive.',
                    'Limited engagement with professional development opportunities.',
                    'Few discussions about future career paths or trends.'
          ],
          reflectiveQuestions: [
            'What specific challenges do you face when trying to adapt to change?',
            'How often do you seek out resources for skill development?',
            'Do you have a plan for addressing future career challenges?',
          ],
          aspiIndication: [
                'Recognizes the importance of future-readiness but hasn’t yet made significant changes to align with it.',
                'Faces difficulty in adjusting to new opportunities or roles.',
                'Shows a basic understanding of adaptability but lacks a clear strategy for developing it.'
          ],
          futureQuestions: [
                                "Do you sometimes think about your career's future, but feel unsure about how to take action?",
                                'How often do you face challenges when new opportunities arise, and how do you respond to them?',
                                "Do you have a clear plan for becoming more adaptable in your career? If not, what is stopping you from developing one?"
          ]
        },  

        {
            score: 3,
            indication: [
                ' Some awareness of necessary skills but no clear action plan.',
                'Occasional participation in training or workshops.',
                'Limited flexibility in adapting to new situations.'
            ],
            reflectiveQuestions: [
                'How do you currently assess your adaptability in the workplace?',
                'What steps have you taken to prepare for future changes?',
                'How comfortable are you with stepping outside your comfort zone?'
            ],
            aspiIndication: [
                    'Recognizes a few key trends that could impact their career in the future.',
                    'Can manage simple changes but feels overwhelmed by more complex changes.',
                    'Demonstrates some openness to learning new skills but has not yet prioritized continuous learning.'
            ],
            futureQuestions: [
                "What future trends do you think could impact your career, and how prepared do you feel to respond to them?",
                'When change happens in your work environment, how do you react? Do you feel equipped to handle both small and large shifts?',
                'Are you actively learning new skills that could help you adapt to future changes? How often do you seek out new learning opportunities?'
            ]
        },

        {
            score: 4,
            indication: [
                ' Basic understanding of industry trends; some proactive measures taken.',
                'Engages in training, though inconsistently.',
                'Some flexibility in adapting to new processes or roles.'
            ],
            reflectiveQuestions: [
                'How regularly do you update your skills based on industry needs?',
                'What recent changes have you successfully navigated?',
                'How do you respond when faced with unexpected challenges?'
            ],
            aspiIndication: [
                'Understands how adaptability affects long-term career success.',
                'Open to feedback on adaptability but not yet consistently acting on it.',
                'Making progress in developing future-readiness through small, targeted actions.'
            ],
            futureQuestions: [
                "How often do you consider how adaptable you are to ensure long-term career growth?",
                'Have you sought feedback on how you can improve your adaptability? If yes, how have you implemented it so far?',
                'What actions have you taken to make yourself more adaptable to the changing landscape in your career?'
            ]
        },
        {
            score: 5,
            indication: [
                'Awareness of key trends and some planning for future skills.',
                'Participation in relevant training programs is moderate.',
                'Generally open to change but may struggle with implementation.'
            ],
            reflectiveQuestions: [
                'How do you prioritize your professional development activities?',
                'What feedback have you received about your adaptability from peers or supervisors?',
                'How often do you reflect on your adaptability skills and areas for improvement?'
            ],
            aspiIndication: [
                'Actively researching industry trends and considering them in career development.',
                'Willing to take on new responsibilities or projects that require adaptability.',
                'Open to feedback and using it to improve career flexibility.'                
            ],
            futureQuestions: [
                "How frequently do you research trends or developments that may affect your industry or career? How does this research influence your career decisions?",
                'How comfortable are you with taking on projects or tasks that require learning new skills or adapting to different roles?',
                'How often do you seek and apply feedback in order to become more adaptable in your role or industry?'

            ]
        },
        {
            score: 6,
            indication: [
                'Active engagement with professional development and adaptability training.',
                'Clear understanding of required skills for future roles.',
                'Regularly seeks feedback on adaptability from others.'
            ],
            reflectiveQuestions: [
                "How aligned are your current skills with future job market demands?",
                'In what ways do you encourage others to embrace change?',
                'How do you measure your success in adapting to new situations?'
            ],
            aspiIndication: [
                'Developing a proactive approach to preparing for future shifts in the industry or market.',
                'Engaging in continuous learning to stay current with industry needs.',
                'Demonstrates flexibility and has started successfully adapting to moderately complex changes.'
            ],
            futureQuestions: [
                'In what ways are you proactively preparing for potential shifts in your industry?',
                "What is your current approach to continuous learning? How do you ensure your skills remain relevant?",
                'How often have you adapted successfully to changes in your career? How confident are you in handling these changes going forward?'

            ]
        },
        {
            score: 7,
            indication: [
                'Strong commitment to continuous learning and skill enhancement.',
                'Proactively identifies and prepares for emerging trends.',
                'Flexible approach to changing roles and responsibilities within the organization.'
            ],
            reflectiveQuestions: [
                ' What strategies do you use to stay ahead of industry changes?',
                'How effectively do you share knowledge about adaptability with colleagues?',
                'What recent successes have you had in adapting to significant changes?'
            ],
            aspiIndication: [
                    'Has a clear strategy for staying adaptable and future-ready.',
                    'Frequently seeks out new opportunities that push personal and professional growth.',
                    'Balances current career needs with future-readiness by taking calculated risks.'
            ],
            futureQuestions: [
                'Do you have a concrete strategy or plan for staying adaptable in the face of future career changes? How often do you revisit and adjust this plan?',
                'How often do you take on new opportunities that stretch your skills or require you to adapt to new challenges?',
                'How do you balance your current job requirements with preparing for future changes in your career?'

            ]
        }, {
            score: 8,
            indication: [
                ' Culture of adaptability is promoted within the organization.',
                'Regularly mentors others on adapting to change and future readiness.',
                'Actively participates in strategic planning for future developments.'
            ],
            reflectiveQuestions: [
                'How does your organization support employees in becoming more adaptable?',
                'What impact has your adaptability had on team performance?',
                'How do you celebrate adaptability successes within your team or organization?'
            ],
            aspiIndication: [
                'Consistently monitors and adapts to key industry trends that could affect their career.',
                'Developing an adaptive mindset, responding to challenges with confidence and resilience.',
                'Regularly seeks opportunities for professional development that align with future industry needs.'
            ],
            futureQuestions: [
                'How consistently do you monitor industry trends, and how do you incorporate these insights into your career planning and decision-making?',
                'How resilient do you feel in the face of challenges? How have you shown adaptability and flexibility in your career over the last few months or years?',
                'How actively do you seek out development opportunities that are in line with future career demands and your long-term career goals?',


            ]
        },
        {
            score: 9,
            indication: [
                ' Recognized as a leader in adaptability and innovation within the industry.',
                'Comprehensive plans are in place for continuous skill development across teams.',
                'Actively engages with external networks for insights into future trends.'
            ],
            reflectiveQuestions: [
                'How does your leadership influence the adaptability culture within your organization?',
                'What role does external feedback play in shaping your adaptability strategies?',
                'How prepared is your organization for potential disruptions in the industry?'
            ],
            aspiIndication: [

                'Demonstrates advanced adaptability skills by leading teams through change and guiding others in future-readiness.',
                'Is an early adopter of new industry trends, continuously learning, and applying new knowledge.',
                'Regularly mentors others on adaptability and future-readiness.'
            ],
            futureQuestions: [
                'How often do you lead teams or others through change in your career? What steps do you take to ensure others feel equipped to adapt as well?',
                'Are you one of the early adopters of new industry trends or practices? How often do you apply what you learn to stay ahead of the curve?',
                'How often do you mentor others, sharing strategies and knowledge to help them develop adaptability in their careers?'
            ]
        },
        {
            score: 10,
            indication: [
                'A proactive culture that embraces change and innovation at all levels.',
                'Comprehensive frameworks exist for ongoing learning and adaptation across the organization.',
                'Leadership is consistently focused on preparing teams for future challenges and opportunities.'
            ],
            reflectiveQuestions: [
                'What legacy do you wish to create regarding adaptability within your organization?',
                'How does your organization influence industry standards through its approach to change management?',
                'In what ways can you further enhance the culture of adaptability and readiness for the future?'
            ],
            aspiIndication: [
                'Highly adaptable and future-ready, with a mindset that embraces change and prepares for disruptions.',
                'Fully prepared for future challenges and opportunities, with a deep understanding of future trends and developments.',
                'Constantly evolving, leading change initiatives, and guiding others towards future-readiness.'
            ],
            futureQuestions: [
                'How do you embrace and prepare for disruptions in your industry or role? How comfortable are you with taking bold steps in response to anticipated changes?',
                'How well do you anticipate and plan for the future challenges and opportunities in your field? Do you have systems in place to ensure you remain ahead of them?',
                'How actively do you lead change initiatives in your field or organization? How do you ensure others are aligned with the future direction and are prepared for what’s next?'
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



 
export default Adaptability;