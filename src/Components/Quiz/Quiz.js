import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz, setAnswered, answered, setCorrect, correct }) => {
    const [state, setState] = useState(false);
    const [show,setShow] = useState(true);
    const [showEye,setShowEye] = useState(true);

    const handleHidden = () => {
        setShow(!show);
    }
    
    const handleClick = (answer) => {
        if(quiz.correctAnswer===answer){
            alert('Congratulations! Answer is Correct...');
            setCorrect(correct + 1);
        }
        else{
            alert('Sorry! Answer is Incorrect...');
            setShowEye(!showEye);
        }
        setState(!state);
        setAnswered(answered+1);
        }
    const ques = quiz.question.replace(/(<([^>]+)>)/ig, '');

    return (
        <div className='bg-slate-800 p-4 mb-4'>
            <div className='flex justify-between items-center'>
                <p className='text-yellow-400 text-xl md:text-2xl mb-2 break-normal'>{ques}</p>
                <button hidden={showEye} onClick={()=>handleHidden()}><p><EyeIcon className='h-6 w-6 text-yellow-400 break-normal' /></p></button>
            </div>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    quiz.options.map(option => <button className='bg-slate-600 px-2 py-1 text-orange-400 hover:bg-zinc-800 hover:text-yellow-400 break-normal' disabled={state} onClick={() => handleClick(option)}>{option}</button>)
                }
            </div>
            <div hidden={show} className='mt-2'><p className='break-normal text-xl text-yellow-400'><span className='text-orange-400'>Correct Answer: </span>{quiz.correctAnswer}</p></div>
        </div>
    );
};

export default Quiz;