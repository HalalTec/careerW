import { useState } from "react";

import next from '../next-bt.png';
import back from '../previous-bt.png'

const Financial = ({close, msg, submit, quest}) => {
    const [currentIndex, setCurrentIndex] = useState(msg)

    const categories = [
        {
          score: 1,
          indication: [
            'No financial planning or budgeting in place.',
            'Living paycheck to paycheck with no savings.',
            'Significant financial stress and instability.'
          ],
          reflectiveQuestions: [
            'How often do you worry about meeting your financial obligations?',
            'Do you have any savings or emergency funds set aside?',
            'Are you aware of your total income and expenses?'
          ],
          aspiIndication: [
            'Financial uncertainty is a constant challenge. Little to no savings or investment.'
          ],
          futureQuestions: [
                'Do I frequently worry about my financial security in the near future?',
                'Have I faced challenges in managing daily expenses in the past year?',
                'Do I have little or no emergency fund, and am I unsure about long-term financial stability?'
            ]
        },
        {
            score: 2,
          indication: [
                    'Basic awareness of financial concepts but little application.',
                    'Minimal savings with high debt levels.',
                    'Rarely engages in discussions about finances.'
          ],
          reflectiveQuestions: [
            'What steps have you taken to improve your financial situation?',
            'How comfortable are you discussing financial matters with others?',
            'Are you actively trying to reduce your debt?',
          ],
          aspiIndication: [
                'Basic financial management, but still struggling. Very limited savings and investments.'
          ],
          futureQuestions: [
                                'Am I just starting to manage my finances but still experience a lot of anxiety?',
                                'Do I have irregular income or face challenges in budgeting effectively?',
                                "Have I started saving but don't feel confident about my financial security?"
          ]
        },  

        {
            score: 3,
            indication: [
                'Some budgeting efforts in place, but inconsistent.',
                'Limited understanding of investment options.',
                'Occasional savings, but not a regular habit.'
            ],
            reflectiveQuestions: [
                'How frequently do you review your budget and expenses?',
                'What types of investments have you considered or made?',
                'How do you prioritize your financial goals?'
            ],
            aspiIndication: [
                    'Financial management in place, but savings and investments are minimal. Struggling with consistency.'
            ],
            futureQuestions: [
                "Do I find it difficult to consistently save or invest, even though I know it’s important?",
                'Am I managing my budget, but not actively growing wealth?',
                'Am I lacking clear financial goals or plans for future stability?'
            ]
        },

        {
            score: 4,
            indication: [
                'Budgeting is practiced, but not strictly followed.',
                'Some knowledge of financial products (e.g., savings accounts, loans).',
                'Savings are starting to accumulate, but still minimal.'
            ],
            reflectiveQuestions: [
                'How often do you adjust your budget based on changing circumstances?',
                'What financial products do you currently use, and why?',
                'Are you setting specific savings goals for the future?'
            ],
            aspiIndication: [
                'Savings and investments are starting to grow, but still below target. Struggling with advanced financial planning.'
            ],
            futureQuestions: [
                "Am I able to save a portion of my income regularly but still feel behind on financial goals?",
                'Do I have basic financial goals, but no plan for wealth-building beyond savings?',
                'Do I lack confidence in managing investments?'
            ]
        },
        {
            score: 5,
            indication: [
                'Regular budgeting and tracking of expenses.',
                'Basic understanding of investment strategies.',
                'Moderate savings with some debt management strategies in place.'
            ],
            reflectiveQuestions: [
                'How do you track your progress towards your financial goals?',
                'What investment strategies are you currently exploring?',
                'How do you manage your debt effectively?'
            ],
            aspiIndication: [
                'Basic savings and investments, but no major growth yet. Starting to grasp financial planning and budgeting principles.'                
            ],
            futureQuestions: [
                "Do I have a savings plan in place, but have little progress with investment returns?",
                'Am I beginning to understand budgeting, but my financial planning still feels reactive rather than proactive?',
                'Am I uncertain about future growth?'
            ]
        },
        {
            score: 6,
            indication: [
                ' Consistent budgeting practices with clear financial goals.',
                'Actively saving for short-term and long-term goals.',
                'Some investments in place (e.g., retirement accounts).'
            ],
            reflectiveQuestions: [
                "How aligned are your spending habits with your financial goals?",
                'What steps are you taking to increase your investment knowledge?',
                'How do you evaluate the performance of your investments?'
            ],
            aspiIndication: [
                'Solid savings and investments in place. Beginning to see steady growth.'
            ],
            futureQuestions: [
                'Have I seen consistent growth in my savings and investments over the past year?',
                'Do I feel more confident about my ability to achieve my financial goals, but there’s still room for improvement?',
                'Am I planning for longer-term goals?'
            ]
        },
        {
            score: 7,
            indication: [
                'Strong grasp of personal finance concepts and practices.',
                'Savings are growing steadily; emergency fund established.',
                'Proactive in seeking new investment opportunities.'
            ],
            reflectiveQuestions: [
                'How do you stay informed about changes in financial markets?',
                'What role does risk play in your investment decisions?',
                'How often do you reassess your financial goals and strategies?'
            ],
            aspiIndication: [
                    'Financial success is becoming evident with some long-term planning in place. Starting to diversify investments.'
            ],
            futureQuestions: [
                'Do I have diversified investments and feel comfortable with my financial strategy?',
                'Am I actively planning for my financial future with a clear roadmap?',
                'Have I begun to make informed decisions about my financial health?'
            ]
        }, {
            score: 8,
            indication: [
                'Well-defined financial plan guiding savings and investments.',
                'Diversified investment portfolio with regular contributions.',
                'Financial literacy is high; shares knowledge with others.'
            ],
            reflectiveQuestions: [
                'How do you ensure that your investments align with your risk tolerance?',
                'In what ways do you educate others about financial success?',
                'What strategies do you use to maximize returns on investments?'
            ],
            aspiIndication: [
                'Financial security is within reach. High savings rate, substantial investments, and solid wealth-building strategies.'
            ],
            futureQuestions: [
                'Am I saving at a consistent rate that supports both short- and long-term goals?',
            'Have I diversified my investments across multiple vehicles (e.g., stocks, real estate)?',
            'Do I feel secure in my financial stability for the future?'
            ]
        },
        {
            score: 9,
            indication: [
                'Comprehensive understanding of advanced financial concepts (e.g., tax strategies, estate planning).',
                'Actively mentoring others in financial planning and management.',
                'Significant wealth accumulation with clear succession plans for assets.'
            ],
            reflectiveQuestions: [
                'How do you leverage your financial knowledge to benefit others?',
                'What legacy do you want to leave regarding your financial success?',
                'How prepared are you for potential economic downturns affecting your finances?'
            ],
            aspiIndication: [
                'Financial independence is near, with excellent wealth-building strategies in place. I’m able to invest confidently and have multiple income streams.'
            ],
            futureQuestions: [
                'Have I achieved a level of financial security where I’m able to make investments that reflect my values and goals?',
                'Am I creating wealth through multiple income streams (e.g., side businesses, investments)?',
                'Do I feel in control?'
            ]
        },
        {
            score: 10,
            indication: [
                'Financial success is a core part of life; wealth is managed strategically for growth and impact.',
                'Actively involved in philanthropic efforts through wealth management.',
                'Continuous learning and adaptation to new financial opportunities and challenges.'
            ],
            reflectiveQuestions: [
                'What impact does your financial success have on your community or industry?',
                'How do you maintain a balance between wealth accumulation and personal fulfillment?',
                'In what ways can you further innovate in managing or growing your wealth?'
            ],
            aspiIndication: [
                'Financial freedom achieved. Have ample investments, income streams, and a legacy plan in place. Full financial independence.'
            ],
            futureQuestions: [
                'Do I have multiple, diversified income streams that provide full financial independence?',
                'Am I actively creating wealth through investments, business, or passive income?',
                'Have I built a legacy plan to secure wealth for future generations?'
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



 
export default Financial;