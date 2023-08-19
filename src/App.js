import { useState } from "react";

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

export default function App() {
    const [step, setStep] = useState(1);

    function handlePrevious() {
        if(step <= 1) return
        setStep(step - 1);
        console.log("Previous");
    }

    function handleNext() {
        if(step >= 3) return
        setStep(step + 1);
        console.log("Next");
    }


    return (
        <div className="steps">
            <div className="numbers">
                <div className={`${step >= 1 ? 'active' : ''}`}>1</div>
                <div className={`${step >= 2 ? 'active' : ''}`}>2</div>
                <div className={`${step >= 3 ? 'active' : ''}`}>3</div>
            </div>
            <p className="message">
                Step {step}: {messages[step - 1]}
            </p>
            <div className="buttons">
                <button onClick={handlePrevious} style={{ background: '#7950f2', color: '#fff' }}>Previous</button>
                <button onClick={handleNext} style={{ background: '#7950f2', color: '#fff' }}>Next</button>
            </div>
        </div>
    );
}
