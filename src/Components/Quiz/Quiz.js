import React, { useState } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quiz = ({ quiz, setAnswered, answered, setCorrect, correct }) => {
    const [state, setState] = useState(false);
    
    const handleClick = (answer) => {
        if(quiz.correctAnswer===answer){
            alert('Answer is Correct...');
            setCorrect(correct + 1);
        }
        else(
            alert('Answer is Incorrect')
        )
        setState(!state);
        setAnswered(answered+1);
        }
    const ques = quiz.question.replace(/(<([^>]+)>)/ig, '');

    return (
        <div className='bg-slate-800 p-4'>
            <div className='flex justify-between items-center'>
                <p className='text-yellow-400 text-2xl mb-2 break-normal'>{ques}</p>
                <button><p><EyeIcon className='h-6 w-6 text-yellow-400 break-normal' /></p></button>
            </div>
            <div className='grid grid-cols-2 gap-4 '>
                {
                    // quiz.options.map(option => <div className='bg-slate-600 px-2 py-1 text-orange-400 hover:bg-zinc-800 hover:text-yellow-400 break-normal'><input className='text-yellow-400' type='radio' id={quiz.id} name={quiz.id}onClick={() => handleClick({option})}></input><label for={quiz.id}> {option}</label></div>)
                    quiz.options.map(option => <button className='bg-slate-600 px-2 py-1 text-orange-400 hover:bg-zinc-800 hover:text-yellow-400 break-normal' disabled={state} onClick={() => handleClick(option)}>{option}</button>)
                }
            </div>
            <div className='mt-2'><p className='break-normal text-xl text-yellow-400'><span className='text-orange-400'>Correct Answer: </span>{quiz.correctAnswer}</p></div>
        </div>
    );
};

export default Quiz;