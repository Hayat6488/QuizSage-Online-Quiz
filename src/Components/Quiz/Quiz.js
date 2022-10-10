import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz);
    const ques = quiz.question.replace(/(<([^>]+)>)/ig, '');
    
    return (
        <div className='bg-slate-800 p-4'>
            <p className='text-yellow-400 text-2xl mb-2'>{ques}</p>
            <div className='grid grid-cols-2 gap-4 '>
            {
                quiz.options.map(option => <div className='w-60 bg-slate-600 px-2 py-1 text-orange-400 hover:bg-zinc-800 hover:text-yellow-400'><button>{option}</button></div>)
            }
            </div>
        </div>
    );
};

export default Quiz;