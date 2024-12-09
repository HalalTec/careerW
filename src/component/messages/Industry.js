import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Industry = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No participation in industry events or organizations.',
            'Lack of awareness of industry trends and developments.',
            'No networking connections within the industry.'
          ],
          reflectiveQuestions: [
            'How often do you engage with industry news or updates?',
            'Do you have any professional contacts outside your immediate workplace?',
            'What barriers prevent you from participating in industry activities?'
          ],
          aspiIndication: [
            'Minimal involvement in the industry, not yet recognized or contributing to discussions.'
          ],
          futureQuestions: [
                'Do I have little to no presence in industry-related conversations or activities?',
                'Is my role limited to internal responsibilities, with minimal visibility outside my organization?',
                'Am I lacking a clear strategy for expanding my involvement in the industry?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Rarely attends industry events; minimal engagement.',
                    'Limited knowledge of key industry players and influencers.',
                    'Few connections with peers in the field.'
          ],
          reflectiveQuestions: [
            'What motivates you to attend or not attend industry events?',
            'How do you currently stay informed about your industry?',
            'Are there specific groups or organizations you would like to join?',
          ],
          aspiIndication: [
                'Occasional engagement with industry events or discussions, but minimal recognition or influence.'
          ],
          futureQuestions: [
                                'Do I attend industry events or webinars, but rarely contribute or engage deeply?',
                                'Am I an outsider in most professional discussions within my industry?',
                                "Do I struggle to network or find meaningful industry connections?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Occasionally participates in local industry events or webinars.',
                'Some knowledge of industry trends but not consistently updated.',
                'A few contacts in the industry, but relationships are weak.'
            ],
            reflectiveQuestions: [
                'How do you prioritize your involvement in industry-related activities?',
                'What steps have you taken to expand your network within the industry?',
                'How often do you seek out opportunities for professional development?'
            ],
            aspiIndication: [
                    'Some involvement in industry events or professional groups, but not yet a visible or influential presence.'
            ],
            futureQuestions: [
                "Do I participate in a few industry events, but mainly as an attendee rather than a contributor?",
                'Am I aware of the key players and influencers in my industry but struggle to build relationships with them?',
                'Do I feel disconnected from industry leaders, even though I am familiar with their work?'
            ]
        },

        {
            score: 4,
            indication: [
                'Attends some industry events; participation is sporadic.',
                'Basic understanding of major trends and challenges in the field.',
                'Engages with a small network of professionals.'
            ],
            reflectiveQuestions: [
                'What types of events do you find most beneficial for your career?',
                'How do you leverage your current network for career growth?',
                'Are there specific topics or areas where you wish to deepen your knowledge?'
            ],
            aspiIndication: [
                'Occasional contributions to industry discussions, limited presence at events, and some networking.'
            ],
            futureQuestions: [
                "Do I occasionally share insights or opinions in industry forums, but they are not widely recognized?",
                'Am I actively networking, though not consistently or strategically?',
                "Do I feel I am starting to get noticed in my industry but haven't yet gained a solid foothold?"
            ]
        },
        {
            score: 5,
            indication: [
                'Regularly attends key industry conferences or workshops.',
                'Moderate understanding of current trends and issues affecting the industry.',
                'Maintains a growing network of professional contacts.'
            ],
            reflectiveQuestions: [
                ' How do you measure the value of your participation in industry events?',
                'What feedback have you received from peers regarding your contributions?',
                'How often do you share insights or learnings from events with your team?'
            ],
            aspiIndication: [
                'Moderate involvement in industry activities, with some recognition for contributions or expertise.'                
            ],
            futureQuestions: [
                "Am I a regular participant in industry events or webinars, and occasionally invited to speak?",
                'Do I have some visibility among peers and industry influencers, but not yet as a thought leader?',
                'Do I feel I am beginning to be seen as an emerging expert in my field?'
            ]
        },
        {
            score: 6,
            indication: [
                'Actively participates in discussions at industry forums and groups.',
                'Good grasp of emerging trends and best practices within the field.',
                'Collaborates with peers on projects or initiatives outside of work.'
            ],
            reflectiveQuestions: [
                " In what ways do you contribute to discussions within your professional network?",
                'How do you stay updated on best practices in your field?',
                'What role do you play in fostering connections among peers?'
            ],
            aspiIndication: [
                'Recognized participant in industry discussions, with some credibility and influence within professional groups.'
            ],
            futureQuestions: [
                'Am I starting to be invited to contribute to industry panels, publications, or webinars?',
                'Do I have established professional connections with industry leaders and peers?',
                'Am I consistently contributing to meaningful industry discussions and thought leadership?'
            ]
        },
        {
            score: 7,
            indication: [
                'Frequently engages with thought leaders and influencers in the industry.',
                'Strong understanding of strategic challenges facing the sector.',
                'Participates in collaborative projects that benefit the wider community.'
            ],
            reflectiveQuestions: [
                'How do you identify and engage with key influencers in your field?',
                'What initiatives have you led or participated in that impact the industry positively?',
                'How do you advocate for your organization within the broader sector?'
            ],
            aspiIndication: [
                    'Active contributor to industry growth, recognized for expertise, and building a network of industry influencers.'
            ],
            futureQuestions: [
                'Am I actively involved in shaping industry trends and initiatives, such as speaking at events or contributing to publications?',
                'Have I built a network of influential industry leaders and peers who value my insights?',
                'Do I have a track record of successful collaborations with industry organizations or key figures?'
            ]
        }, {
            score: 8,
            indication: [
                'Recognized as a thought leader or expert within the industry.',
                'Actively contributes to publications, panels, or speaking engagements.',
                'Strong network that spans various sectors and regions.'
            ],
            reflectiveQuestions: [
                'What strategies have helped you build your reputation as an expert?',
                'How do you ensure that your contributions are aligned with current industry needs?',
                'What impact have your efforts had on your organization’s standing in the field?'
            ],
            aspiIndication: [
                'Highly influential in the industry, frequently called upon for thought leadership, and a well-known figure in professional networks.'
            ],
            futureQuestions: [
                'Am I regularly sought out for my expertise, such as being invited to speak at major events or contribute to high-profile projects?',
                'Do I hold a leadership position in industry organizations or initiatives that align with my career goals?',
                'Is my professional network extensive, and do I have a well-established reputation within the industry?'
            ]
        },
        {
            score: 9,
            indication: [
                'Plays a significant role in shaping industry standards and practices.',
                'Regularly mentors others within the field, sharing knowledge and experience.',
                'Engages in high-level collaborations across different sectors.'
            ],
            reflectiveQuestions: [
                "How do you measure the impact of your mentorship on others' careers?",
                'What legacy do you wish to leave within your professional community?',
                "How often do you reflect on your contributions to the industry's future direction?"
            ],
            aspiIndication: [
                'Recognized as a top-tier thought leader with a substantial and consistent influence across the industry.'
            ],
            futureQuestions: [
                'Am I consistently featured in industry media or publications as a leading voice or expert?',
                'Do I lead significant industry-wide initiatives that shape the future of my field?',
                'Am I known across the industry for my groundbreaking contributions, innovation, or leadership?'
            ]
        },
        {
            score: 10,
            indication: [
                'A leading figure influencing policy and direction at an industry level.',
                'Drives innovation and change through active involvement in multiple organizations.',
                'Cultivates a culture of collaboration and knowledge-sharing across sectors.'
            ],
            reflectiveQuestions: [
                'What vision do you have for the future of your industry, and how are you contributing to it?',
                'How do you inspire others to engage at a higher level within their careers?',
                'In what ways can your leadership further enhance collaboration across industries?'
            ],
            aspiIndication: [
                'Industry influencer and trendsetter, shaping the future of the industry and inspiring the next generation of professionals.'
            ],
            futureQuestions: [
                'Am I a top authority in my industry, consistently driving major trends and innovations?',
                'Do I lead high-profile global projects or initiatives that redefine my industry?',
                'Am I frequently approached by major industry stakeholders for strategic collaboration, and my work influences the direction of the entire field?'
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



 
export default Industry;