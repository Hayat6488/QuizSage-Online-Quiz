import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const { name, questions } = quizes.data;
    console.log(name, questions);
    return (
        <div className='mt-20'>
            <p className='text-orange-400 text-3xl font-semibold bg-slate-800 py-4 mb-4'>{name}</p>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 mx-16'>
                {
                    questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
            </div>
        </div>
    );
};

export default Quizes;