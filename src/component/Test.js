import {  useState } from "react";
import Career from "./Career";
import Result from "./Result";
import Carousel from "./Carousel";
import Message from "./Message";
import Warning from "./Warning";

const Test = ({selected}) => {
    const [warning, setWarning] = useState(false)
    const [val, setVal] = useState()
    const [counter, setCounter] = useState(1);
    const [style, setSty] = useState({backgroundColor: "#ED6A56"})
    const [p, setP] = useState("Personal Development")
    const [career, setCareer] = useState([])
    const [health, setHealth] = useState([])
    const [money, setMoney] = useState([])
    const [per, setPer] = useState([])
    const [rel, setRel] = useState([])
    const [fun, setFun] = useState([])
    const [physical, setPhysical] = useState([])
    const [spirit, setSpirit] = useState([])
    const [cont, setCont] = useState([])
    const [pur, setPur] = useState([])
    const [item, setItem] = useState([ "Have you set clear personal development goals for yourself?",
                                        "Do you integrate new learning experiences into your daily routine?",
                                        "Have you overcome significant barriers in your personal development journey?"])
    const tip =["Tip 1", "Tip 2", "Tip 3"]
    const [message, setMessage] = useState(false)
    const [msg, setMsg] = useState(0)
    const [check, setChecker] = useState(false)



    const confirm = (e) => {
        setMsg(e.target.textContent)
        setMessage(true)
   }
const confirmFuture = (e) => {
        setMsg(e.target.textContent)
        setChecker(true)
    }
   
    const submit = (e) => {
        e.preventDefault();
        let ans= e.target.textContent
        setCounter(counter + 1);
        setVal(ans)

        if (counter <= 2) {
            setCareer([...career, ans]);
            
        }

       
        if (counter === 2 && counter < 4) {
            setSty({ backgroundColor: "#F09B36" });
            setP("Strengths, Values & Purpose Alignment");
       
            setItem([
                "Do you clearly identify and articulate your core strengths in your career?",
                "Are your personal values aligned with your career aspirations?",
                "Have you taken steps to discover and follow your purpose in your professional life?"
            ])
            
          
        } 
       if(counter > 2 && counter <= 4){ 
            setMoney([...money, ans]);

        }
        
        
         if (counter ===4 && counter < 6) {
            setSty({ backgroundColor: "#FFC74E" });
            setP("Professional Skills and Expertise");
            setItem([
                "Do you actively enhance the skills essential for your current role?",
                "Do you stay updated on industry trends and developments to keep your skills relevant?",
                "Do you leverage your unique expertise to advance your career?"
            ])
            
        } 
        
        if(counter > 4 && counter <= 6){ 
            setHealth([...health, ans]);

        }
        
        if (counter === 6 && counter < 8) {
            setSty({ backgroundColor: "#A0B470" });
            setP("Career Growth, Corporate Performance, and Impact");
            setItem([
                "Do your career achievements reflect growth and impact within your organization?",
                "Have you set and evaluated clear career growth goals?",
                "Do you contribute to the overall mission and performance of your organization?"
            ])
        }
        
        if(counter > 6 && counter <= 8){ 
            setRel([...rel, ans]);

        }
        
        if (counter === 8 && counter < 10) {
            setSty({ backgroundColor: "#6E9E75" });
            setP("Industry-Level Involvement");
            setItem([
                "Are you actively involved in your industry beyond your immediate role?",
                "Do you participate in professional organizations or communities that enhance your career?",
                "Have you made contributions to your industry that you are proud of?"
            ])
        } 
        if(counter > 8 && counter <= 10){ 
            setPer((e) => [...e, ans]);
        }
        if (counter === 10 && counter < 12) {
            setSty({ backgroundColor: "#73CCE4" });
            setP("Social Responsibility & Ethics");
            setItem([
                "Does your work align with your ethical beliefs and contribute positively to society?",
                "Do you advocate for social responsibility within your organization or industry?",
                "Have you successfully navigated balancing business objectives with ethical considerations?"
            ])
        } 
        if(counter > 10 && counter <= 12){ 
            setFun((p) => [...p, ans]);
        }
        
         if (counter === 12 && counter < 14) {
            setSty({ backgroundColor: "#869ACF" });
            setP("Adaptability & Future Readiness");
            setItem([
                "Do you assess your adaptability to change regularly?",
                "Have you developed strategies to prepare for future career shifts and industry changes?",
                "Do you actively seek new challenges to improve your readiness for future opportunities?"
            ])

        } 

        if(counter > 12 && counter <= 14){ 
            setPhysical((res) => [...res, ans]);
        }

        if (counter === 14 && counter < 16) {
            setSty({ backgroundColor: "#895881" });
            setP("Financial Success");
            setItem([
                "Have you clearly defined what financial success means for your career?",
                "Do you implement strategies to ensure financial stability and growth?",
                "Have you successfully navigated discussions about compensation and financial growth in your organization?"
            ])


        } 

        if(counter > 14 && counter <= 16){ 
            setSpirit((re) => [...re, ans]);
        }

         if (counter === 16 && counter < 18) {
            setSty({ backgroundColor: "#ff5733" });
            setP("Personal Branding & Professional Relationships");
            setItem([
                "Do you actively manage and enhance your personal brand?",
                "Do you have strategies in place to build and maintain professional relationships?",
                "Do you leverage your network to create growth and collaboration opportunities?"
            ])
        } 

        if(counter > 16 && counter <= 18){ 
            setPur((v) => [...v, ans]);
        }

         if (counter === 18 && counter < 20) {
            setSty({ backgroundColor: "#58261b" });
            setP("Workplace Diplomacy & Political Savvy");
            setItem([
                "Do you navigate workplace dynamics effectively to foster positive relationships?",
                "Have you recognized the importance of political savvy in advancing your career?",
                "Do you balance authenticity with the need to adapt your communication style in different situations?"
            ])
        }
        
        if(counter > 18 && counter <= 20){ 
            setCont((pr) => [...pr, ans]);
        }

        if(counter === 20 ) {
            if (career.length < 1 || health.length < 1 || money.length < 1 ||
                per.lenght < 1 || rel.length < 1 || fun.length < 1 || physical.length < 1 ||
                spirit.length < 1 || cont.length < 1 || pur.length < 1) {
        
                    alert("Please answer all the questions!");
                    setCounter(1)
                    setSty({backgroundColor: "#ED6A56"})
                    setP("Career and Professional Growth")
            }
        }
            close()
    }

    const close = () => {
        setMessage(false)
        setWarning(false)
        setChecker(false)
    }
    
    


 
       
   
    

   

    

      
   

    return ( 
       
       <div>
                     {counter <= 20 && (   <header style={style}> {p}  </header> )}
                <div className="section">
                {counter === 1 && (
                <Career question= "How satisfied are you with your ongoing personal growth and self-improvement efforts?" />

            )}
           
                {counter === 2 && (
                <Career question= "How satisfied do you want to be with your ongoing personal growth and self-improvement efforts in the next" select={selected}/>
            )}

        {counter === 3 && (
                <Career question=  "How well does your current role align with your strengths, core values, and sense of purpose?" />
            )}
        {counter === 4 && (
                <Career question= "How well do you want your current role to align with your strengths, core values, and sense of purpose in the next" select={selected}/>
            )}
        {counter === 5 && (
                <Career question= "How satisfied are you with your current level of professional skills and expertise in your field?" />
            )}
        {counter === 6 && (
                <Career question= "How satisfied do you want to be with your current level of professional skills and expertise in your field in the next" select={selected}/>
            )}
        {counter === 7 && (
                <Career question="How confident do you feel about your career trajectory and opportunities for advancement?" />
            )}
        {counter === 8 && (
                <Career question="How confident do you want to feel about your career trajectory and opportunities for advancement in the next" select={selected}/>
            )}
        {counter === 9 && (
                <Career question="How satisfied are you with the impact and recognition of your contributions within your organization?" />
            )}
        {counter === 10 && (
                <Career question="How satisfied do you want to be with the impact and recognition of your contributions within your organization in the next" select={selected} />
            )}
         {counter === 11 && (
                <Career question= "How satisfied are you with the ethical standards and social impact associated with your career and organization?" />
            )}
        {counter === 12 && (
                <Career question= "How satisfied do you want to be with the ethical standards and social impact associated with your career and organization in the next" select={selected} />
            )}
        {counter === 13 && (
                <Career question="How prepared do you feel to adapt to changes and future trends in your industry?"
 />
            )}
        {counter === 14 && (
                <Career question="How prepared do you want to feel to adapt to changes and future trends in your industry in the next" select={selected} />
            )}
        {counter === 15 && (
                <Career question="How satisfied are you with your current financial success and compensation in relation to your career goals?" />
            )}
        {counter === 16 && (
                <Career question="How satisfied do you want to be with your current financial success and compensation in relation to your career goals in the next" select={selected} />
            )}
        {counter === 17 && (
                <Career question="How strong and effective is your personal brand and network of professional relationships?" />
            )}
         {counter === 18 && (
                <Career question="How strong and effective do you want your personal brand and network of professional relationships to be in the next" select={selected}/>
            )}
         {counter === 19 && (
                <Career question= "How confident are you in navigating workplace dynamics and organizational politics effectively?" />
            )}
         {counter === 20 && (
                <Career question="How confident do you want to be in navigating workplace dynamics and organizational politics effectively in the next" select={selected}/>
            )}
          
          {message === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={0} />)}
          {check === true && (< Message msg= {msg-1} close={close} p={p} submit={submit} quest={1} />)}
            {counter <= 20 && ( 
                <>
                    {counter % 2 === 1 && (<Carousel items={item} tips = {tip}/>)}
                    <ol>
                    {counter % 2 === 1 &&( <>    
                <span onClick={confirm}> 1 </span>
                <span onClick={confirm}>2</span>
                <span onClick={confirm}>3</span>
                <span onClick={confirm}>4</span>
                <span onClick={confirm}>5</span>
                <span onClick={confirm}>6</span>
                <span onClick={confirm}>7</span>
                <span onClick={confirm}> 8</span>
                <span onClick={confirm}>9</span>
                <span onClick={confirm}>10</span>
                </>
                 )}
                 {counter % 2 != 1 &&( <>     
                    <span onClick={submit} style={{filter: 1 < val ? 'blur(2px)' : 'none',
                                        cursor: 1 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 1 < val ? 'none' : 'auto'}}> 1 </span>
                <span onClick={submit} style={{filter: 2 < val ? 'blur(2px)' : 'none',
                                        cursor: 2 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 2 < val ? 'none' : 'auto'}}>2</span>
                <span onClick={submit} style={{filter: 3 < val ? 'blur(2px)' : 'none',
                                        cursor: 3 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 3 < val ? 'none' : 'auto'}}>3</span>
                <span onClick={submit} style={{filter: 4 < val ? 'blur(2px)' : 'none',
                                        cursor: 4 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 4 < val ? 'none' : 'auto'}}>4</span>
                <span onClick={submit} style={{filter: 5 < val ? 'blur(2px)' : 'none',
                                        cursor: 5 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 5 < val ? 'none' : 'auto'}}>5</span>
                <span onClick={submit} style={{filter: 6 < val ? 'blur(2px)' : 'none',
                                        cursor: 6 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 6 < val ? 'none' : 'auto'}}>6</span>
                <span onClick={submit} style={{filter: 7 < val ? 'blur(2px)' : 'none',
                                        cursor: 7 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 7 < val ? 'none' : 'auto'}}>7</span>
                <span onClick={submit} style={{filter: 8 < val ? 'blur(2px)' : 'none',
                                        cursor: 8 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 8 < val ? 'none' : 'auto'}}> 8</span>
                <span onClick={submit} style={{filter: 9 < val ? 'blur(2px)' : 'none',
                                        cursor: 9 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 9 < val ? 'none' : 'auto'}}>9</span>
                <span onClick={submit} style={{filter: 10 < val ? 'blur(2px)' : 'none',
                                        cursor: 10 < val ? 'not-allowed' : 'pointer',
                                        pointerEvents: 10 < val ? 'none' : 'auto'}}>10</span>
                </>
                 )}
                </ol>
                </>
                   )}
                </div>
                {counter <= 16 && ( 
                    <footer style={style} className="foot"> </footer>
                )}
                    {counter > 20 && (
                <Result career={career}  
                        money={money}
                        per= {per}
                        rel= {rel}
                        fun = {fun}
                    physical = {physical} 
                    spirit = {spirit}
                    health = {health}
                    contribution = {cont}
                    purpose = {pur}
                    selected = {selected}
                

                />
            )}
             
                </div>
            )
            
}
 
export default Test;