import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Workplace = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No understanding of workplace dynamics.',
            'Avoids interactions with colleagues.',
            'Feels disconnected from organizational goals.'
          ],
          reflectiveQuestions: [
            'How often do you feel out of touch with your team?',
            'Do you struggle to communicate effectively with others?',
            'How comfortable are you in navigating workplace relationships?'
          ],
          aspiIndication: [
            'Has minimal understanding of workplace dynamics.',
            'Struggles with conflicts and difficult conversations.',
            'Lack of awareness about power structures and office politics.'
          ],
          futureQuestions: [
                'Do I find it difficult to understand the motivations and behaviors of colleagues?',
                'Do I avoid difficult conversations or conflicts at all costs?',
                'Am I unaware of or uninterested in the power structures in my workplace?'
            ]
        },
        {
            score: 2,
          indication: [
                    ' Minimal awareness of office politics.',
                    'Rarely engages in networking or relationship-building.',
                    'Limited ability to influence decisions or outcomes.'
          ],
          reflectiveQuestions: [
            'What challenges do you face in building relationships at work?',
            'How often do you seek feedback from peers about your interactions?',
            'Are you aware of the key influencers in your organization?',
          ],
          aspiIndication: [
                'Limited awareness of necessary skills or certifications.Has a basic understanding of the workplace environment.',
                'Avoids office politics but reacts poorly to office conflicts.',
                'Limited influence in group decisions or projects.'
          ],
          futureQuestions: [
                                'Do I feel uncomfortable or overwhelmed when office politics arise?',
                                'Do I feel like I have little influence or control in group settings?',
                                "Is it difficult for me to assert myself without conflict?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Some understanding of workplace relationships but lacks strategy.',
                'Occasionally participates in team discussions but feels hesitant.',
                'Limited ability to navigate conflicts effectively.'
            ],
            reflectiveQuestions: [
                'How do you typically handle disagreements with colleagues?',
                "What steps do you take to understand others' perspectives?",
                'Can you identify any allies within your organization?'
            ],
            aspiIndication: [
                    'Aware of some political dynamics but struggles to leverage them.',
                    'Occasionally participates in group discussions but lacks confidence in decision-making.',
                    'May alienate others unintentionally due to lack of tact.'
            ],
            futureQuestions: [
                "Do I sometimes misread the intentions or actions of others in the workplace?",
                'Do I struggle to express my opinions effectively in group settings?',
                'Have I unintentionally caused tension or conflict in the workplace due to poor communication?'
            ]
        },

        {
            score: 4,
            indication: [
                'Basic networking efforts; some relationships established.',
                'Awareness of organizational culture but struggles to adapt.',
                'Occasionally seeks mentorship or guidance from others.'
            ],
            reflectiveQuestions: [
                'How do you prioritize building professional relationships?',
                'In what ways do you adapt your communication style for different audiences?',
                'How often do you reflect on the effectiveness of your interactions?'
            ],
            aspiIndication: [
                'Understands basic political structures and occasionally uses diplomacy to navigate situations.',
                'Can engage in discussions but lacks consistent tact and strategic influence.'
            ],
            futureQuestions: [
                "Do I sometimes manage to avoid conflict but still feel passive in workplace discussions?",
                'Do I find myself unsure of when and how to use political insight to my advantage?',
                'Is it difficult for me to engage in sensitive topics without conflict or awkwardness?'
            ]
        },
        {
            score: 5,
            indication: [
                ' Active participation in team activities; some influence on decisions.',
                'Recognizes the importance of political dynamics in the workplace.',
                'Engages in conflict resolution when necessary.'
            ],
            reflectiveQuestions: [
                'How do you leverage your relationships to achieve goals?',
                'What strategies do you use to manage workplace politics?',
                'How often do you seek opportunities for collaboration?'
            ],
            aspiIndication: [
                'Has a solid understanding of workplace politics and can navigate some situations diplomatically.',
                'Can influence group decisions in a positive way.',
                'Occasional tension in relationships due to blunt communication or misreading cues.'                
            ],
            futureQuestions: [
                "Do I feel that I am able to navigate office politics with a good degree of awareness?",
                'Can I successfully influence some decisions or outcomes in my team or organization?',
                'Do I occasionally struggle with tact or diplomacy in difficult situations?'
            ]
        },
        {
            score: 6,
            indication: [
                'Solid understanding of workplace dynamics and power structures.',
                'Regularly communicates with colleagues across different levels.',
                'Demonstrates ability to influence outcomes positively.'
            ],
            reflectiveQuestions: [
                "How effective are you at reading the room during meetings?",
                'What methods do you use to build rapport with new colleagues?',
                'How do you approach sensitive topics with peers or superiors?'
            ],
            aspiIndication: [
                'Skilled at managing relationships and conflicts in the workplace.',
                'Can influence decisions and contribute to the broader organizational culture.',
                'Generally aware of power dynamics and uses political acumen strategically.'
            ],
            futureQuestions: [
                'Do I often have a positive impact on group decisions and outcomes?',
                'Am I able to handle conflict situations more diplomatically and resolve them effectively?',
                'Do I feel confident using my understanding of workplace dynamics to advance my goals and those of the team?'
            ]
        },
        {
            score: 7,
            indication: [
                'Strong network of allies and advocates within the organization.',
                'Actively seeks out opportunities for collaboration and partnership.',
                'Demonstrates emotional intelligence in interactions.'
            ],
            reflectiveQuestions: [
                'How do you maintain and nurture your professional relationships?',
                'In what ways do you advocate for your ideas within the organization?',
                'How often do you mentor others in navigating workplace politics?'
            ],
            aspiIndication: [
                    'Demonstrates excellent political awareness and can influence decisions across teams.',
                    'Able to manage and resolve complex conflicts with tact and empathy.',
                    'Trusted by leadership and peers to offer insights on workplace dynamics.'
            ],
            futureQuestions: [
                'Do I regularly contribute to shaping decisions at a higher level in the organization?',
                'Can I resolve conflicts effectively while maintaining relationships with all parties involved?',
                'Do I frequently use my understanding of office politics to positively influence outcomes and relationships?'
            ]
        }, {
            score: 8,
            indication: [
                'Recognized as a go-to person for advice on political matters.',
                'Proactively engages in strategic networking initiatives.',
                'Uses political savvy to drive team success and organizational goals.'
            ],
            reflectiveQuestions: [
                ' How do you ensure that your actions align with organizational values?',
                'What role does empathy play in your approach to workplace diplomacy?',
                'How effectively do you communicate your value proposition to others?'
            ],
            aspiIndication: [
                'Highly skilled at navigating complex workplace dynamics.',
                'Able to balance power dynamics and influence outcomes without creating conflicts.',
                'Considered a key influencer in organizational decision-making.'
            ],
            futureQuestions: [
                'Do I regularly find myself shaping high-level decisions or strategies within my team or company?',
                'Do I feel that my diplomatic skills are trusted and valued across multiple levels of the organization?',
                'Am I seen as a key person who can manage political challenges and create win-win outcomes?'
            ]
        },
        {
            score: 9,
            indication: [
                'Highly skilled at navigating complex interpersonal dynamics.',
                'Regularly influences key decisions and outcomes through strategic relationships.',
                'Mentors others on developing their political savvy and diplomacy skills.'
            ],
            reflectiveQuestions: [
                'How do you leverage your influence to foster collaboration among teams?',
                'In what ways have your political skills contributed to significant organizational achievements?',
                'How well do you adapt your strategies based on changing dynamics in the workplace?'
            ],
            aspiIndication: [
                'A recognized expert in workplace diplomacy and political savvy.',
                'Plays a strategic role in managing complex organizational challenges.',
                'Serves as a mentor to others on navigating workplace dynamics and politics.'
            ],
            futureQuestions: [
                'Am I often called upon to resolve major conflicts or to provide strategic input on workplace issues?',
                'Do I mentor others or share my expertise in navigating organizational dynamics?',
                'Is my political acumen a significant asset to my organization and team?'
            ]
        },
        {
            score: 10,
            indication: [
                'Masterful at building alliances that enhance organizational effectiveness.',
                'Seen as a leader who embodies integrity and authenticity in all interactions.',
                'Consistently achieves positive outcomes through strategic political engagement.'
            ],
            reflectiveQuestions: [
                'What legacy do you wish to leave regarding your influence in the organization?',
                'How does your approach to workplace diplomacy impact team morale and performance?',
                'In what ways can you further enhance your political savvy to drive innovation and change within the organization?'
            ],
            aspiIndication: [
                'Masterful in workplace diplomacy and political savvy.',
                'Trusted to manage and navigate the most complex workplace dynamics and organizational challenges.',
                'Regularly influences major decisions and policies at all levels of the organization.'
            ],
            futureQuestions: [
                'Do I feel that my ability to navigate workplace politics is one of my greatest assets in the organization?',
                'Am I consistently trusted to influence key organizational decisions with integrity and strategy?',
                'Do I mentor and guide others on how to master office politics and diplomacy, becoming a key leader in my field?'
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



 
export default Workplace;