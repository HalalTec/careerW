import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Social = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No awareness of social responsibility initiatives.',
            'Ethical considerations are not integrated into decision-making.',
            'Lack of engagement in community or social issues.'
          ],
          reflectiveQuestions: [
            'How often do you consider the ethical implications of your work?',
            'Are you aware of any social responsibility initiatives in your organization?',
            'Do you feel your work contributes positively to society?'
          ],
          aspiIndication: [
            'Minimal engagement with social responsibility or ethical practices.',
            'Little to no awareness of ethical issues in my field.'

          ],
          futureQuestions: [
                'I am unsure about the ethical impact of my work.',
                "I haven't taken any actions related to social responsibility in my career yet",
                 'Do I feel disconnected from social responsibility in my work?',
                 'Have I made any attempt to understand the social impact of my industry?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Minimal understanding of social responsibility concepts.',
                    'Rarely discuss ethics in the workplace.',
                    'Limited participation in community service or outreach programs.'
          ],
          reflectiveQuestions: [
            'What challenges prevent you from engaging in social responsibility?',
            'How often do you see ethical dilemmas arise in your role?',
            'Are there opportunities for you to participate in community initiatives?',
          ],
          aspiIndication: [
            'Acknowledge basic ethical practices but lack action.',
            'Minor efforts in supporting ethical practices or causes.'
          ],
          futureQuestions: [
                                'I recognize ethical issues but haven’t yet acted on them.',
                                'I have a limited understanding of social responsibility in my field.',
                                'Do I only consider social responsibility when prompted?',
                                'Have I participated in any workplace initiatives, but not consistently'
          ]
        },  

        {
            score: 3,
            indication: [
                'Some awareness of ethical practices but limited application.',
                'Occasional discussions about social responsibility topics.',
                'Participation in company events related to social causes is infrequent.'
            ],
            reflectiveQuestions: [
                'How do you define social responsibility in your professional context?',
                'What steps have you taken to promote ethics within your team?',
                'Can you identify any recent initiatives your organization has undertaken for social good?'
            ],
            aspiIndication: [
                    'Occasional awareness of ethical dilemmas and basic action taken.',
                    'Developing an understanding of the relationship between my career and society.'
            ],
            futureQuestions: [
                "I am somewhat aware of ethical dilemmas in my profession but am not always proactive.",
                'I’ve supported at least one ethical initiative but lack ongoing engagement.',
                'Do I actively seek out opportunities to act ethically, but only sporadically?',
                'How frequently do I reflect on how my work impacts society?'
            ]
        },

        {
            score: 4,
            indication: [
                'Basic understanding of CSR principles; some initiatives exist.',
                'Ethics are discussed but not prioritized.',
                'Participation in community service is sporadic.'
            ],
            reflectiveQuestions: [
                'How do you encourage ethical behavior among your colleagues?',
                'What social responsibility initiatives have you supported at work?',
                'How do you evaluate the impact of your organization’s CSR efforts?'
            ],
            aspiIndication: [
                'Growing involvement in social responsibility efforts.',
                'Conscious choices made in relation to ethics in my work.'
            ],
            futureQuestions: [
                "I have taken part in social responsibility initiatives but not consistently.",
                'I am beginning to think more about the ethical consequences of my actions in my career',
                'Have I begun to make conscious decisions regarding ethical practices at work?',
                'Do I consider ethics before making career-related decisions?'
            ]
        },
        {
            score: 5,
            indication: [
                'Recognizes the importance of ethics and social responsibility.',
                'Some involvement in CSR activities; occasional volunteer work.',
                'Basic policies on ethics are communicated within the organization.'
            ],
            reflectiveQuestions: [
                'How do you integrate ethical considerations into your daily work?',
                'What role does leadership play in promoting social responsibility in your organization?',
                'How often do you engage with colleagues about ethical practices?'
            ],
            aspiIndication: [
'Active participation in workplace or industry initiatives.',
'Ethical considerations are part of my daily decision-making process.'                
            ],
            futureQuestions: [
                "I am involved in projects or discussions related to social responsibility at work.",
                'I try to balance ethical considerations with my career goals.',
                'Do I actively incorporate ethical principles into my professional decisions?',
                'How often do I consider the ethical implications of my actions in the workplace?'
            ]
        },
        {
            score: 6,
            indication: [
                'Active participation in CSR programs; some leadership roles taken.',
                'Ethical guidelines are established and followed within teams.',
                'Regular discussions on ethics and social impact occur.'
            ],
            reflectiveQuestions: [
                "How aligned are your personal values with your organization’s ethical standards?",
                'What feedback have you received regarding your contributions to CSR initiatives?',
                'How does your organization measure the success of its social responsibility efforts?'
            ],
            aspiIndication: [
            'Regularly contribute to social responsibility efforts.',
            'Integrating ethical practices into personal and professional growth.'
            ],
            futureQuestions: [
                'I consistently support ethical practices within my team or organization.',
                'I actively mentor others on the importance of ethics in the workplace.',
                'Do I make sure that ethical considerations are at the forefront of my decisions?',
                "How do I ensure that my career growth doesn’t compromise ethical standards?"
            ]
        },
        {
            score: 7,
            indication: [
                'Strong commitment to integrating ethics into business practices.',
                'Regularly leads or participates in impactful CSR projects.',
                'Employees are encouraged to voice concerns about ethical issues openly.'
            ],
            reflectiveQuestions: [
                'How do you ensure that ethical considerations are part of strategic decision-making?',
                'In what ways do you mentor others about the importance of ethics and responsibility?',
                'How does your organization celebrate achievements in social responsibility?'
            ],
            aspiIndication: [
                    'Taking leadership roles in promoting social responsibility and ethics.',
                    'Incorporating ethics into long-term career strategy.'
            ],
            futureQuestions: [
                'I am recognized as a leader in promoting social responsibility and ethical conduct in my field.',
                'I advocate for ethical practices at a broader organizational or industry level.',
                'Do I lead by example in promoting social responsibility?',
                'How actively am I engaged in aligning my long-term career goals with ethical principles?'
            ]
        }, {
            score: 8,
            indication: [
                'Social responsibility is embedded in organizational culture.',
                'Proactive approach to addressing ethical challenges and dilemmas.',
                'Strong community partnerships established through CSR initiatives.'
            ],
            reflectiveQuestions: [
                'How does your organization influence others through its CSR practices?',
                'What innovative ideas have you implemented to enhance social responsibility efforts?',
                'How effectively does your organization communicate its commitment to ethics and CSR externally?'
            ],
            aspiIndication: [
        'Impactful advocate for ethical practices beyond the workplace.',
        'Pursuing career paths that align with high ethical standards.'
            ],
            futureQuestions: [
                'I influence decisions outside of my immediate work environment to promote ethical practices.',
                'I am known for being a strong voice for social responsibility within my industry.',
                'How frequently do I mentor or support others in ethical decision-making?',
                'Have I pursued roles or projects based on their alignment with my ethical values?'
            ]
        },
        {
            score: 9,
            indication: [
                'Recognized as a leader in corporate social responsibility practices.',
                'Comprehensive training on ethics provided to all employees.',
                'Significant positive impact on community and environment through initiatives.'
            ],
            reflectiveQuestions: [
                'What legacy do you want to create regarding social responsibility within your organization?',
                'How does your organization adapt its CSR strategies based on evolving societal needs?',
                'In what ways can you further enhance the impact of your CSR initiatives?'
            ],
            aspiIndication: [
                'Lead initiatives for systemic ethical change.',
                 'Having a strong influence on shaping ethical practices at an organizational level.'
            ],
            futureQuestions: [
                'I am actively involved in shaping industry standards around social responsibility.',
                'My actions are setting a high standard for ethical practices within my career.',
                'How actively do I challenge and address unethical practices within my industry or organization?',
                'Do I take initiative in developing programs that encourage social responsibility?'
            ]
        },
        {
            score: 10,
            indication: [
                'A culture of ethical leadership drives all organizational decisions.',
                'Continuous improvement processes for CSR are actively pursued and measured.',
                'Organization serves as a model for best practices in social responsibility across industries.'
            ],
            reflectiveQuestions: [
                'How do you envision the future of corporate social responsibility evolving within your industry?',
                'What unique strategies has your organization implemented that set it apart as a leader in ethics and CSR?',
                'How can mentorship play a role in fostering future leaders committed to ethics and social impact?'
            ],
            aspiIndication: [
                'Visionary leader advocating for ethics on a global scale.',
                'Ethical considerations are embedded in my career and influence global policies or actions.'
            ],
            futureQuestions: [
                'I am recognized internationally for my contributions to ethical practices and social responsibility.',
                'I work to ensure that my actions and leadership have a lasting impact on promoting ethics worldwide.',
                'Do I consider my legacy in promoting ethical principles and social responsibility?',
                'How frequently do I influence global policies or initiatives with my advocacy for ethics?'
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



 
export default Social;