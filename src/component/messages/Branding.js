import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Branding = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No clear personal brand established.',
            'Minimal or no professional relationships.',
            'Lack of engagement in networking opportunities.'
          ],
          reflectiveQuestions: [
            'How do you believe others perceive you in your professional environment?',
            'What steps have you taken to build your personal brand?',
            'How often do you attend networking events or engage with peers?'
          ],
          aspiIndication: [
            'No upskilling or certifications have been pursued.'
          ],
          futureQuestions: [
                'Have you actively avoided taking any steps toward developing new skills or certifications?',
                'Do you feel uncertain about the value of upskilling in your job search?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Some awareness of personal branding but no strategic approach.',
                    'Limited connections with industry professionals.',
                    'Rarely participates in professional groups or forums.'
          ],
          reflectiveQuestions: [
            'What challenges prevent you from developing a personal brand?',
            'How do you currently connect with colleagues and industry peers?',
            'Have you received any feedback on how you present yourself professionally?',
          ],
          aspiIndication: [
                'Limited awareness of necessary skills or certifications.'
          ],
          futureQuestions: [
                                'Have you started exploring the skills and certifications relevant to your desired job but haven’t taken any significant actions yet?',
                                "Do you recognize the need for upskilling but haven't yet committed to a clear learning path?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Basic understanding of personal branding concepts.',
                'A few professional contacts, but relationships are superficial.',
                'Infrequent participation in networking activities.'
            ],
            reflectiveQuestions: [
                'What aspects of your professional identity do you feel are unclear to others?',
                'How do you nurture existing professional relationships?',
                'Are you aware of the importance of a strong online presence?'
            ],
            aspiIndication: [
                    'You are in the early stages of identifying skills needed but have not yet taken steps to acquire them.'
            ],
            futureQuestions: [
                "Have you researched some certifications or courses but haven't committed to starting them?",
                'Do you have a general understanding of what skills are in demand but haven’t yet outlined a plan to acquire them?'
            ]
        },

        {
            score: 4,
            indication: [
                'Some efforts made to establish a personal brand, but inconsistent.',
                'A growing network, though connections lack depth.',
                'Occasional attendance at networking events.'
            ],
            reflectiveQuestions: [
                'How often do you reflect on your personal values and how they align with your brand?',
                'What steps have you taken to deepen your professional relationships?',
                'How do you communicate your skills and expertise to others?'
            ],
            aspiIndication: [
                'Have identified some skills needed, but only a few certifications or courses are in progress.'
            ],
            futureQuestions: [
                "Have you enrolled in a course or signed up for a certification but haven't completed any modules?",
                'Are you unsure about which skills to prioritize but know a few that could be relevant?'
            ]
        },
        {
            score: 5,
            indication: [
                ' Clearer understanding of personal branding; some strategies in place.',
                'Moderate network of professional contacts; some meaningful connections exist.',
                'Regular participation in industry-related events or groups.'
            ],
            reflectiveQuestions: [
                'How well does your personal brand align with your career goals?',
                'What strategies do you employ to maintain and grow your network?',
                'How consistent is your messaging across different platforms (online and offline)?'
            ],
            aspiIndication: [
                'Active in learning and gaining certifications but still in early stages of competency.'                
            ],
            futureQuestions: [
                "Have you completed a few modules or certifications but feel you're not yet fully competent in the required skills?",
                'Are you actively working towards upskilling but feel you have room for improvement in your mastery of the subject matter?'
            ]
        },
        {
            score: 6,
            indication: [
                'Established personal brand with defined goals and values.',
                'Stronger network with several meaningful professional relationships.',
                'Active participation in relevant industry associations or events.'
            ],
            reflectiveQuestions: [
                "How effectively do you leverage your network for career advancement?",
                'What feedback have you received about your personal brand from peers or mentors?',
                'How often do you engage with your audience through social media or other platforms?'
            ],
            aspiIndication: [
                'Some certifications or upskilling are completed, and you are gaining confidence in applying these skills.'
            ],
            futureQuestions: [
                'Have you completed a certification that is relevant to your job search but feel you need more practical experience?',
                "Are you starting to see how the skills you've learned can help you in your job search, but you still feel you need to build on them further?"
            ]
        },
        {
            score: 7,
            indication: [
                'Personal brand actively promoted through various channels.',
                'A robust network that includes mentors and industry leaders.',
                'Regularly shares insights and engages in thought leadership activities.'
            ],
            reflectiveQuestions: [
                'In what ways does your personal brand differentiate you from others in your field?',
                'How do you cultivate relationships that lead to mentorship opportunities?',
                'What impact has your personal brand had on your career progression so far?'
            ],
            aspiIndication: [
                    'Significant progress in upskilling and certifications; you have some proficiency in key areas.'
            ],
            futureQuestions: [
                'Have you completed multiple certifications or courses and now feel capable of applying those skills in the workplace?',
                'Do you have a clear idea of which additional skills are required and have already begun to work toward those?'
            ]
        }, {
            score: 8,
            indication: [
                'Personal brand is well-recognized within the industry; seen as a thought leader.',
                'Deep and diverse professional relationships that foster collaboration.',
                'Consistent engagement in speaking, writing, or contributing to industry discussions.'
            ],
            reflectiveQuestions: [
                'How do you measure the effectiveness of your personal branding efforts?',
                'What role does authenticity play in how you present yourself professionally?',
                'How do you adapt your personal brand as your career evolves?'
            ],
            aspiIndication: [
                'Well-versed in required certifications and can confidently demonstrate your skills in the job market.'
            ],
            futureQuestions: [
                ' Have you completed most, if not all, of the necessary certifications and feel prepared to discuss your skills in interviews?',
                'Are you actively applying these skills in a practical setting, such as in personal projects or freelance work?'
            ]
        },
        {
            score: 9,
            indication: [
                'Strong influence within the industry; actively sought after for insights and advice.',
                'Extensive network that actively collaborates on projects and initiatives.',
                'Regularly mentors others and contributes to their professional growth.'
            ],
            reflectiveQuestions: [
                'What legacy do you wish to leave through your personal brand and relationships?',
                'How does your personal branding strategy evolve with changing market trends?',
                'In what ways can you further enhance the value of your professional relationships?'
            ],
            aspiIndication: [
                'Highly proficient in the skills required for the job market; certifications are up to date and aligned with industry standards.'
            ],
            futureQuestions: [
                'Have you achieved a high level of mastery in the key certifications and skills needed for your job search, and do you feel prepared for advanced roles?',
                'Are you confident that the skills you possess will significantly increase your chances of landing a job'
            ]
        },
        {
            score: 10,
            indication: [
                'Personal brand is synonymous with excellence; recognized as a leader and innovator.',
                'Exceptional network that includes key influencers and decision-makers across industries.',
                'Actively shapes industry standards through contributions and collaborations.'
            ],
            reflectiveQuestions: [
                'How do you envision the future impact of your personal brand on both yourself and others?',
                "What innovative approaches are you exploring to further enhance your brand's reach and influence?",
                'How can you leverage technology to strengthen your professional relationships globally?'
            ],
            aspiIndication: [
                'Expert-level proficiency in relevant skills; certifications are fully aligned with long-term career goals.'
            ],
            futureQuestions: [
                'Are you recognized by peers or employers as an expert in the relevant skills and certifications for your desired job?',
                'Can you confidently take on roles that require advanced expertise in the field, and have you consistently kept your certifications up to date?'
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



 
export default Branding;