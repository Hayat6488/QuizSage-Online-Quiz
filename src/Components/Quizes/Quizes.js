import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const [answered, setAnswered] = useState(0);
    const [correct, setCorrect] = useState(0);
    console.log(correct);
    
    const { name, questions } = quizes.data;
    return (
        <div className='mt-20 mb-20'>
            <p className='text-orange-400 text-3xl font-semibold bg-slate-800 py-4 mb-4 break-normal'>{name}</p>
            <div className='flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row'>
                <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 mx-16 w-3/4'>
                    {
                        questions.map(quiz => <Quiz key={quiz.id} quiz={quiz} setAnswered={setAnswered} answered={answered} setCorrect={setCorrect} correct={correct}></Quiz>)
                    }
                </div>
                <div className='bg-slate-800 p-4 text-left text-xl text-yellow-400'>
                    <p className='mb-2 break-normal'>Results</p>
                    <p className='mb-2 break-normal'>Number of Questions Answered: {answered}</p>
                    <p className='break-normal'>Number of Correct Answers: {correct}</p>
                </div>
            </div>
        </div>
    );
};

export default Quizes;