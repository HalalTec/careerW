import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Strength = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No awareness of personal strengths, values, or purpose.',
            'Feeling completely disconnected from work and life purpose.',
            'No motivation or clarity regarding career direction.'
          ],
          reflectiveQuestions: [
            'Do I know what my core strengths are?',
            'Am I aware of my values and how they influence my decisions?',
            'Does my work feel entirely misaligned with what matters most to me?'
          ],
          aspiIndication: [
            'Limited alignment between strengths, values, and purpose. Career feels disconnected or misaligned with personal beliefs and passions.'
          ],
          futureQuestions: [
                'Do I feel unfulfilled in my career or disconnected from my purpose?',
                'Are my strengths not being used or valued in my current role?',
                'Do my values feel in conflict with the work I do or the environment I’m in?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Minimal awareness of personal strengths or values.',
                    'Work occasionally feels meaningful, but often does not.',
                    'Low confidence in how current career aligns with long-term purpose.'
          ],
          reflectiveQuestions: [
            'Have I identified at least one strength or value I can rely on?',
            'Do I feel a sense of conflict between what I’m doing and what I deeply care about?',
            'Can I identify any areas where my strengths and purpose show up in my career?',
          ],
          aspiIndication: [
                'Some misalignment, but I am aware of areas for improvement. I am beginning to understand the importance of aligning strengths, values, and purpose.'
          ],
          futureQuestions: [
                                'Am I noticing dissatisfaction in my work or a sense of lack of purpose?',
                                'Have I identified where my strengths are not fully utilized?',
                                "Am I beginning to recognize the gaps between my personal values and my career?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Basic understanding of strengths and values but limited application.',
                'Work rarely aligns with core values or purpose.',
                'Frequently second-guessing career choices.'
            ],
            reflectiveQuestions: [
                'Can I articulate my key strengths, even if I’m unsure how to apply them?',
                'Does my job allow me to act in ways that align with my values at least occasionally?',
                'Do I feel a gap between who I am and what I do at work?'
            ],
            aspiIndication: [
                    'I am starting to see the connection between strengths, values, and purpose but have not yet taken significant action.'
            ],
            futureQuestions: [
                "Am I aware of areas where I am not fully aligned with my strengths, values, or purpose?",
                'Do I have some sense of clarity but still struggle to implement changes?',
                'Am I still unsure about how to take the next step toward alignment?'
            ]
        },

        {
            score: 4,
            indication: [
                'Aware of strengths and values but unsure how to align them with work.',
                'Some tasks align with strengths, but overall work feels disconnected.',
                'Uncertain about the broader impact or purpose of work.'
            ],
            reflectiveQuestions: [
                'Am I taking any actions to align my strengths, values, and purpose with my career?',
                'Do I feel moments of fulfillment, even if they are fleeting?',
                'Am I seeking clarity about how my work aligns with my bigger goals or values?'
            ],
            aspiIndication: [
                'I am beginning to align my strengths and values with my career, but it’s still a work in progress. I have identified areas for improvement.'
            ],
            futureQuestions: [
                "Have I made small adjustments to bring more alignment in my work?",
                'Do I feel that I am using some of my strengths in my current role?',
                'Have I identified clear values that I want my work to reflect, but struggle with full implementation?'
            ]
        },
        {
            score: 5,
            indication: [
                'Moderate understanding of strengths and values with occasional alignment in work.',
                'Some clarity on purpose, but inconsistent alignment in work activities.',
                'Growing awareness of what a purpose-driven career could look like.'
            ],
            reflectiveQuestions: [
                'Do I regularly feel engaged in tasks that utilize my core strengths?',
                'Do I feel connected to my work at least 50% of the time?',
                'Am I actively reflecting on how to integrate my values and strengths into my career?'
            ],
            aspiIndication: [
                'There is noticeable alignment, and I am taking steps to bring more congruence between my strengths, values, and career.'                
            ],
            futureQuestions: [
                "Have I started to act on my desire to align my values with my career?",
                'Do I use my strengths regularly in my work, but still feel there’s more to do for full alignment?',
                'Am I actively seeking opportunities that match my personal values, but not yet fully immersed in them?'
            ]
        },
        {
            score: 6,
            indication: [
                'Strengths and values moderately aligned with work, but gaps remain.',
                'Beginning to make career decisions based on values and purpose.',
                'Feelings of fulfillment arise occasionally but not consistently.'
            ],
            reflectiveQuestions: [
                "Are my strengths and values becoming more evident in how I approach work?",
                'Do I see progress in aligning my work with my purpose, even if it’s slow?',
                'Am I actively taking steps to improve alignment between my career and purpose?'
            ],
            aspiIndication: [
                'I am aligning my strengths, values, and purpose more consistently. I experience a growing sense of fulfillment and alignment.'
            ],
            futureQuestions: [
                'Do I feel increasingly fulfilled by my work as my strengths are more utilized?',
                "Am I making deliberate efforts to integrate my values into my career?",
                "Is there noticeable progress, but still room for growth to fully align all areas?"
            ]
        },
        {
            score: 7,
            indication: [
                'Clear understanding of strengths, values, and purpose, with increasing alignment in work.',
                'Regularly making purposeful career decisions.',
                'Work increasingly feels meaningful and fulfilling.'
            ],
            reflectiveQuestions: [
                'Do I often feel that my work aligns with my strengths and values?',
                'Do I feel that my career is heading in the right direction in terms of purpose and impact?',
                'Do I experience fulfillment in my work at least most of the time?'
            ],
            aspiIndication: [
                    'Strong alignment between strengths, values, and purpose. I am motivated and energized by the work I do, and I experience personal fulfillment.'
            ],
            futureQuestions: [
                'Am I seeing consistent fulfillment in my career because my strengths are being fully used?',
                'Have I successfully integrated my personal values into my daily work?',
                'Do I feel a strong sense of purpose and satisfaction in what I do?'
            ]
        }, {
            score: 8,
            indication: [
                'Strong alignment between strengths, values, and purpose, with only minor gaps.',
                'Career decisions consistently reflect alignment with purpose.',
                'Work feels impactful and personally rewarding most of the time.'
            ],
            reflectiveQuestions: [
                'Are my strengths, values, and purpose evident in almost all aspects of my work?',
                'Do I feel a deep sense of pride in the purpose and meaning my career brings?',
                'Am I confident that my career aligns well with my long-term purpose?'
            ],
            aspiIndication: [
                'My career is in deep alignment with my values, strengths, and purpose. I am achieving a high level of professional and personal satisfaction.'
            ],
            futureQuestions: [
                'Do I experience a deep sense of satisfaction and alignment with my career?',
                'Are my strengths and values consistently reflected in the work I do and the environment I’m in?',
                'Do I feel my career is a true reflection of who I am and what I believe in?'
            ]
        },
        {
            score: 9,
            indication: [
                'Almost complete alignment between strengths, values, and purpose in career.',
                'Career choices reflect full integration of personal purpose.',
                'High levels of fulfillment and motivation in career.'
            ],
            reflectiveQuestions: [
                'Does my work consistently energize and motivate me?',
                'Am I seen as someone who is deeply aligned with their purpose by others?',
                'Do I feel my work has meaningful impact and aligns with my true self?'
            ],
            aspiIndication: [
                'I am fully aligned with my strengths, values, and purpose. My career is a true extension of who I am, and I feel a profound sense of achievement and alignment.'
            ],
            futureQuestions: [
                'Do I feel that my work is a direct expression of my strengths and values?',
                'Do I experience a deep sense of meaning and fulfillment every day in my career?',
                'Do I inspire others through my work, demonstrating the alignment of my career with my purpose?'
            ]
        },
        {
            score: 10,
            indication: [
                'Perfect alignment between strengths, values, and purpose.',
                'Every career decision aligns fully with long-term purpose and core values.',
                'Career feels completely fulfilling, meaningful, and sustainable.'
            ],
            reflectiveQuestions: [
                'Do I wake up excited every day about the impact and fulfillment my career brings?',
                'Am I living my purpose through my career in the most authentic way possible?',
                'Is my career a reflection of the best version of myself and what I stand for?'
            ],
            aspiIndication: [
                'My career is a perfect embodiment of my strengths, values, and purpose. I am not only fully aligned but also consistently growing and evolving in harmony with these areas.'
            ],
            futureQuestions: [
                'Is my career a perfect embodiment of who I am, my values, and my purpose?',
                'Do I feel that my work not only reflects my strengths but continuously challenges me to grow in alignment with my core beliefs?',
                'Am I fully living my purpose and creating a lasting impact in my field or industry?'
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



 
export default Strength;