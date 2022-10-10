import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useLoaderData();
    const {name, questions} = quizes.data;
    console.log(name, questions);
    return (
        <div>
            <p>{name}</p>
            {
                questions.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizes;