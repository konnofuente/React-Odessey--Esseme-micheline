
import './Step'
import { useState } from 'react';


const messages = [
    "Learn React 👼",
    "Apply for jobs 👨‍🎓",
    "Invest your new income 💸💸"
];

function Step() {
    
    const [step,setStep] = useState(1)

    const handlePrevious = () =>{
       if(step > 1) setStep(step - 1);

    }
    const handleNext = () =>{
        if(step < 3) setStep(step + 1);

    }

    return (
        <div className="steps">
            <div className="numbers" >
                <div className={`step >= 1 ? "active" : ""`}>1</div>
                <div className={`step >= 1 ? "active" : ""`}>2</div>
                <div className={`step >= 1 ? "active" : ""`}>3</div>
            </div>

            <p className="message">Step {stop}: {messages[step - 1]}</p>
            <div className="buttons">
                <button style={{backgroundColor: '#7950f2', color : '#fff', borderRadius: '30px', marginRight:'250px'}} onClick={handlePrevious}>Previous</button>
                <button style={{backgroundColor: '#7950f2', color : '#fff', borderRadius: '30px'}} onClick={handleNext}>Next</button>
            </div>
        </div>
    )
 
}


export default  Step;
