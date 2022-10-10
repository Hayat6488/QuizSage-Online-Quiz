import React from 'react';

const Quiz = ({quiz}) => {
    console.log(quiz);
    return (
        <div>
            {quiz.question}
        </div>
    );
};

export default Quiz;