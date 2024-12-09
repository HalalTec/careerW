import Adaptability from "./messages/Adaptability";
import Branding from "./messages/Branding";
import Career from "./messages/Career";
import Financial from "./messages/Financial";
import Industry from "./messages/Industry";
import Personal from "./messages/Personal";
import Professional from "./messages/Professional";
import Social from "./messages/Social";
import Strength from "./messages/Strength";
import Workplace from "./messages/Workplace";



const Message = ({close, msg, p, submit}) => {

    if (p === "Personal Development"){

        return ( 
            <Personal close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Strengths, Values & Purpose Alignment"){

        return ( 
            <Strength close={close} msg={msg} submit={submit}/>
        );
    }
      
    if (p === "Professional Skills and Expertise"){

        return ( 
            <Professional close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Career Growth, Corporate Performance, and Impact"){

        return ( 
            <Career close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === '"Industry-Level Involvement"'){

        return ( 
            <Industry close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Adaptability & Future Readiness"){

        return ( 
            <Adaptability close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Financial Success"){

        return ( 
            <Financial close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Personal Branding & Professional Relationships"){

        return ( 
            <Branding close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Workplace Diplomacy & Political Savvy"){

        return ( 
            <Workplace close={close} msg={msg} submit={submit}/>
        );
    }

    if (p === "Social Responsibility & Ethics"){

        return ( 
            <Social close={close} msg={msg} submit={submit}/>
        );
    }

      
}
 
export default Message;