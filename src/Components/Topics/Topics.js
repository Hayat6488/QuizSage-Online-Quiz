import React from 'react';
import Topic from '../Topic/Topic';

const Topics = ({topics}) => {
    return (
        <div className='mx-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20'>
            {
                topics.map(topic => <Topic key={topic.id} topic={topic}></Topic>)
            }
        </div>
    );
};

export default Topics;