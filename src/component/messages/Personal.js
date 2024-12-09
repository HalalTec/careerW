import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Personal = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No effort toward personal growth.',
            'Limited or no learning opportunities explored.',
            'Constant dissatisfaction with skills or knowledge.'
          ],
          reflectiveQuestions: [
            'Have I actively avoided personal growth opportunities?',
            'Do I feel completely stagnant?',
            'Have I set any goals for self-improvement?'
          ],
          aspiIndication: [
            'Minimal investment in personal development. Limited awareness of career growth needs.'
          ],
          futureQuestions: [
                'Have I identified any personal growth goals for my career yet?',
                'Do I regularly invest time or resources in improving my skills or knowledge?',
                'Do I feel unprepared for new responsibilities in my career?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely seeks to learn new things.',
                    'Feels inadequate about personal and professional growth.',
                    'Struggles to identify strengths or areas to improve.'
          ],
          reflectiveQuestions: [
            'When was the last time I tried something to improve myself?',
            'Do I feel discouraged about growing?',
            'Am I aware of my gaps but doing nothing about them?',
          ],
          aspiIndication: [
            'Very limited personal development effort, but beginning to recognize areas for growth.'
      ],
      futureQuestions: [
                            'Have I started considering how I can improve my professional skills?',
                            'Do I find myself overwhelmed by challenges due to lack of development?',
                            "Am I setting aside time or resources to work on personal growth, even if irregularly?"
      ]
        },  

        {
            score: 3,
            indication: [
                'Occasionally engages in growth activities but without consistency.',
                'Feels slightly capable but often overwhelmed.',
                'Has vague or unclear growth goals.'
            ],
            reflectiveQuestions: [
                'Do I take occasional steps toward self-improvement?',
                'Are my goals unclear or sporadic?',
                'Do I feel I could do more but lack motivation?'
            ],
            aspiIndication: [
                'Beginning to explore personal growth but still uncertain about specific areas to focus on.'
        ],
        futureQuestions: [
            "Have I started setting specific personal development goals, but struggle with consistency?",
            'Do I occasionally seek opportunities for learning but lack a clear plan for growth?',
            'Am I aware of gaps in my personal development but unsure how to address them?'
        ]
        },

        {
            score: 4,
            indication: [
                'Engages in some learning, but progress feels slow.',
                'Knows areas for improvement but hasn’t made a plan.',
                'Feels capable but lacks confidence.'
            ],
            reflectiveQuestions: [
                'Do I know where I need to grow but haven’t taken consistent steps?',
                'Are my efforts sporadic or unfocused?',
                'Am I confident I can improve but unsure how?'
            ],
            aspiIndication: [
                'Exploring personal development, with a focus on gaining foundational skills.'
            ],
            futureQuestions: [
                "Have I identified key areas of improvement in my career, but still struggle with prioritizing them?",
                'Am I taking some courses or workshops, though my growth feels slow?',
                'Do I feel uncertain about whether my current learning efforts align with my career goals?'
            ]
        },
        {
            score: 5,
            indication: [
                'Moderately involved in personal development.',
                'Participates in learning but not yet a habit.',
                'Some improvements, but results aren’t consistent.'
            ],
            reflectiveQuestions: [
                'Have I made some progress in growing my skills or knowledge?',
                'Do I regularly engage in learning, even if not consistently?',
                'Are my results noticeable but inconsistent?'
            ],
            aspiIndication: [
                'Consistently engaging in personal development activities but facing challenges in applying new skills.'                
            ],
            futureQuestions: [
                " Have I made steady progress in personal development but feel inconsistent in applying what I learn?",
                "Do I regularly seek feedback and try to improve, though I'm still working on consistency?",
                'Do I sometimes feel unsure if I’m developing the right skills to align with my career goals?'
            ]
        },
        {
            score: 6,
            indication: [
                'Consistently seeks self-improvement but without significant breakthroughs.',
                'Feels reasonably confident in personal growth efforts.',
                'Has set goals but doesn’t always achieve them.'
            ],
            reflectiveQuestions: [
                "Am I regularly pursuing self-improvement opportunities?",
                'Do I have goals but struggle to achieve them consistently?',
                'Do I feel I’m on the right path but need more momentum?'
            ],
            aspiIndication: [
                'Personal development is a key priority, with tangible improvements in skills and confidence.'
            ],
            futureQuestions: [
                ' Have I developed clear personal growth goals that align with my career aspirations?',
                'Am I consistently improving my skills and knowledge, though there is still room for growth?',
                "Do I actively seek opportunities for feedback and coaching to help me grow?"
            ]
        },
        {
            score: 7,
            indication: [
                'Actively engages in personal growth and learning.',
                'Sees noticeable improvements in some areas.',
                'Has clear goals and a regular growth routine.'
            ],
            reflectiveQuestions: [
                'Do I feel I’m making steady progress in personal development?',
                'Are my goals clear, and do I work toward them often?',
                'Am I confident in my ability to improve?'
            ],
            aspiIndication: [
                    'Proactively setting and working on development goals, applying new skills to advance in career.'
            ],
            futureQuestions: [
                'Am I setting specific and measurable personal development goals, and am I achieving them?',
                'Do I consistently apply my development efforts to enhance my work performance and growth?',
                'Am I seeking challenges that push me outside my comfort zone to accelerate growth?'
            ]
        }, {
            score: 8,
            indication: [
                'Demonstrates strong commitment to personal development.',
                'Achieves most personal growth goals.',
                'Feels highly capable and motivated to grow further.'
            ],
            reflectiveQuestions: [
                'Am I achieving most of my personal growth goals?',
                'Do I feel motivated and capable to keep improving?',
                'Is personal growth a key focus in my life?'
            ],
            aspiIndication: [
                'Focused on expanding skills in multiple areas, regularly applying them for impactful career advancement.'
            ],
            futureQuestions: [
                'Have I integrated personal development deeply into my career progression plan?',
                'Am I actively seeking growth opportunities, and do I see a direct impact on my career trajectory?',
                'Am I developing expertise in areas that are critical for my long-term career success?'
            ]
        },
        {
            score: 9,
            indication: [
                'Excels in personal growth activities.',
                'Consistently achieves self-improvement goals.',
                'Feels deeply fulfilled and confident in growth efforts.'
            ],
            reflectiveQuestions: [
                'Am I excelling in self-improvement and achieving set goals?',
                'Do I feel fulfilled in my personal development journey?',
                'Is growth deeply integrated into my lifestyle?'
            ],
            aspiIndication: [
                'Personal development is a clear driver of career success, with measurable impact and continued growth.'
            ],
            futureQuestions: [
                'Do I consistently apply new knowledge and skills in my daily work, leading to tangible career advancements?',
                'Am I an advocate for continuous learning and actively influence others to grow?',
                'Do I track my progress and adjust my development efforts to ensure they align with evolving career goals?'
            ]
        },
        {
            score: 10,
            indication: [
                'Thrives in personal development.',
                'Continuously sets and achieves challenging goals.',
                'Inspires others with their growth journey.'
            ],
            reflectiveQuestions: [
                'Do I feel I’m at the peak of personal growth?',
                'Am I consistently setting and achieving ambitious goals?',
                'Am I inspiring others with my personal development journey?'
            ],
            aspiIndication: [
                'Mastery in personal development, enabling sustained career success, leadership, and mentorship.'
            ],
            futureQuestions: [
                'Am I a recognized leader in my field, sharing my knowledge and expertise with others to promote growth?',
                'Do I continually reinvent myself, leading to exponential growth and career fulfillment?',
                'Have I achieved a state of personal development where my growth directly supports the broader goals of my organization or community?'
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



 
export default Personal;