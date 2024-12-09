import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Career = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'Career feels stagnant or going backwards.',
            'No measurable achievements or impact in my role.',
            'No support or opportunities for growth within the company.'
          ],
          reflectiveQuestions: [
            'Do I feel like my career has been at a standstill for a long time?',
            'Am I lacking any significant achievements that I can point to in my work?',
            'Do I feel unsupported or unchallenged in my role?'
          ],
          aspiIndication: [
            'Minimal progress in career growth.',
            'No noticeable corporate impact.',
            'Very limited recognition or performance in your role.',
            'Work is not aligned with personal goals.'
          ],
          futureQuestions: [
                'Do you feel your contributions in your role are not acknowledged or recognized?',
                'Are you struggling to make any substantial career progress?',
                'Do you feel disconnected from your organization’s goals and values?',
                'Are you actively seeking opportunities for growth or merely getting by in your role?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely receive feedback or recognition for efforts.',
                    'Progress feels slow or non-existent.',
                    'Limited to no opportunities for professional development.'
          ],
          reflectiveQuestions: [
            'Do I get very little feedback or acknowledgment for my contributions?',
            'Does it feel like my career is moving very slowly, or not moving at all?',
            'Am I stuck in a position with no opportunities to learn or grow?',
          ],
          aspiIndication: [
                'Some effort towards career growth but limited results.',
                'Little or no impact on the organization.',
                'Rarely receives feedback on performance.',
                'Struggling with skills or experience gaps.'
          ],
          futureQuestions: [
                                'Are you aware of the gaps in your skills or experience but feel unsure about how to close them?',
                                'Do you seldom receive any feedback or recognition for your work?',
                                'Are you feeling stagnant in your role with little momentum for change?',
                                "Are you unsure if you’re moving in the right direction in your career?"
          ]
        },  

        {
            score: 3,
            indication: [
                "Occasionally receive feedback, but it's not constructive.",
                'Small achievements, but lack of noticeable impact.',
                'Little to no mentorship or guidance in the workplace.'
            ],
            reflectiveQuestions: [
                "Do I sometimes receive feedback, but it's mostly unclear or not helpful?",
                'Have I had some small wins, but my overall impact still feels insignificant?',
                'Do I have very little mentorship or guidance to help me move forward in my career?'
            ],
            aspiIndication: [
                    'Some small achievements in career growth.',
                    'Minor contributions to corporate success.',
                    'Occasional feedback, but limited career development.',
                    'Impact is largely unnoticed or undervalued.'
            ],
            futureQuestions: [
                "Do you occasionally receive positive feedback but feel it doesn’t translate into growth opportunities?",
            'Are you making small contributions to your organization’s success but struggling to make a noticeable impact?',
            'Do you have some sense of direction but are not sure how to accelerate your growth?',
            'Do you feel like you are playing it safe in your career rather than stepping up?'
            ]
        },

        {
            score: 4,
            indication: [
                "Some positive feedback, but lacks consistent recognition",
                "Limited opportunities to take on new responsibilities or projects.",
                "Starting to notice small growth, but unclear if it's sustainable."
            ],
            reflectiveQuestions: [
                "Do I receive some positive feedback, but it's not regular or impactful?",
                'Am I able to take on new tasks or projects, but not frequently or with much challenge?',
                'Do I see signs of growth, but wonder if it will continue or if it’s just temporary?'
            ],
            aspiIndication: [
                'Achieved some small milestones in career progression.',
                'Contributing to team or department success.',
                'Regular feedback, but no clear path to advancement.',
                'Noticeable efforts, but results are still modest.'
            ],
            futureQuestions: [
                "Are you making steady progress, but feel uncertain about your next career move?",
                'Do you contribute positively to your team but feel your work lacks long-term impact?',
                'Is feedback coming regularly, but it’s unclear how to turn it into development opportunities?',
                'Are you actively seeking feedback, yet unclear about how to leverage it for career growth?'
            ]
        },
        {
            score: 5,
            indication: [
                'Achievements in line with job expectations, but not beyond.',
                'Some impact felt within my team or department.',
                'Growing network, but not yet influential in the company or industry.'
            ],
            reflectiveQuestions: [
                "Have I met my job's requirements, but haven't gone above and beyond?",
                'Do I feel that my work makes an impact, but it’s limited to my team or immediate circle?',
                'Is my network growing, but I’m not yet seen as influential or a key figure in my company or industry?'
            ],
            aspiIndication: [
                'Clear progress in career development.',
                'Playing a role in organizational performance.',
                'Gaining recognition for work, but there are still areas for growth.',
                'Early stages of developing a strong impact in your field.'                
            ],
            futureQuestions: [
                "Have you achieved some notable milestones in your career and feel on the right track?",
                "Are you starting to make a significant contribution to your organization’s goals, but there's more to be done?",
            'Are you recognized for your contributions, but feel you need to build more influence?',
            'Do you have a clear idea of how to scale your impact but need more resources or opportunities?'
            ]
        },
        {
            score: 6,
            indication: [
                'Feedback is consistent and usually helpful.',
                'Taking on more responsibilities, starting to lead smaller initiatives.',
                'Building relationships with key stakeholders, but still limited.'
            ],
            reflectiveQuestions: [
                "Do I receive more regular feedback that helps me improve my performance?",
                'Am I leading smaller projects or initiatives that are helping me develop leadership skills?',
                "Am I starting to build relationships with key people, but haven't yet reached a wider or influential group?"
            ],
            aspiIndication: [
                'Steady career progression.',
                'Contributing meaningfully to corporate objectives.',
                'Regular recognition and responsibility increase.',
                'Developing leadership skills and corporate influence.'
            ],
            futureQuestions: [
                'Are you making steady progress in your career with visible results in your organization?',
                'Do you contribute regularly to your company’s success and feel your role is increasingly important?',
                'Are you being entrusted with greater responsibilities and leadership opportunities?',
                'Are you positioned as a key player in your department or organization, but want to enhance your impact?'
            ]
        },
        {
            score: 7,
            indication: [
                ' Regularly recognized for contributions and impact.',
                'Increasing responsibilities and autonomy in my role.',
                'Influence starting to grow outside my immediate team.'
            ],
            reflectiveQuestions: [
                'Do I regularly receive recognition from my team, peers, or leadership for my contributions?',
                'Am I getting more responsibilities and the freedom to manage them on my own?',
                'Am I beginning to have an influence beyond my team or department?'
            ],
            aspiIndication: [
                    'Achieving significant career milestones.',
                    'Recognized for substantial contributions to corporate performance.',
                    'Growing leadership role and increasing impact on the organization.',
                    'Solid foundation for long-term success and growth.'
            ],
            futureQuestions: [
                'Have you achieved several career milestones, positioning yourself as a leader or expert in your field?',
                'Are you consistently recognized for your contributions to the success of your team or company?',
                'Are you taking on a growing leadership role with increasing influence in decision-making?',
                'Do you see clear opportunities for further career growth but want to refine your approach for greater impact?'
            ]
        }, {
            score: 8,
            indication: [
                'Strong alignment between personal goals and organizational impact.',
                'Actively mentoring others and helping others grow.',
                'Have a growing reputation within the company and industry.'
            ],
            reflectiveQuestions: [
                'Do I see a strong alignment between my personal career goals and the broader organizational goals?',
                'Am I mentoring others or helping develop their careers, creating a cycle of growth?',
                'Is my reputation growing both within my company and in the broader industry, leading to greater opportunities?'
            ],
            aspiIndication: [
                'Well-established and recognized in the career field.',
                'Significant contributions to the organization’s strategic goals.',
                'Strong leadership impact, driving corporate success.',
                'Growing reputation as an expert or influencer.'
            ],
            futureQuestions: [
                'Have you established yourself as a leader in your field, recognized for your expertise and influence?',
                'Are you consistently driving impactful results and aligning your work with long-term organizational goals?',
                'Do you take a leadership role in shaping strategies or decisions within your organization?',
                'Are you starting to be seen as a thought leader in your industry or organization?'
            ]
        },
        {
            score: 9,
            indication: [
                'Demonstrating exceptional leadership or impact in key organizational areas.',
                    'Trusted advisor or go-to expert in my field.',
                    'Consistently exceeding performance expectations and goals.'
            ],
            reflectiveQuestions: [
                'Do I demonstrate leadership in major areas of my organization, having a clear impact on its success?',
                'Am I considered a trusted advisor or expert by my colleagues and leaders?',
                'Do I regularly exceed expectations, setting new benchmarks for performance?'
            ],
            aspiIndication: [
                'Career is thriving, with a strong track record of growth and impact.',
                'High level of influence within the organization.',
                'Driving major corporate initiatives and change.',
                'Leading teams or departments with measurable success.'
            ],
            futureQuestions: [
                'Are you thriving in your career with significant impact and recognition at every level?',
                'Are you driving major initiatives within your organization and shaping its future direction?',
                'Do you lead teams or departments with a focus on achieving high performance and innovation?',
                'Are you seen as a transformational leader in your field, with substantial influence over your organization’s trajectory?'
            ]
        },
        {
            score: 10,
            indication: [
                'Highly influential, driving major strategic decisions within the organization.',
                'Frequently recognized for exceptional contributions, even beyond work.',
                'Fully aligned with personal values and purpose, creating deep impact.'
            ],
            reflectiveQuestions: [
                'Am I a key player in strategic decisions, shaping the future of my organization or industry?',
                'Am I consistently recognized not just within my company, but also externally, for my contributions?',
                'Do I feel that my career is deeply aligned with my personal values, and am I making a significant impact?'
            ],
            aspiIndication: [
                'Career at its peak with exceptional growth and influence.',
                'Leading corporate strategy and innovation.',
                'Recognized as a thought leader and changemaker.',
                'Leaving a lasting legacy through personal and corporate achievements.'
            ],
            futureQuestions: [
                'Have you reached the pinnacle of your career, consistently achieving outstanding results and impact?',
                'Are you actively leading and innovating within your organization, shaping its future direction?',
                'Do you inspire and influence others, with your career and work leaving a legacy?',
                'Are you seen as a leading figure in your industry, with lasting contributions that shape the future?'
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



 
export default Career;