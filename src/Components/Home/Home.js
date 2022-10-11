import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css'

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <div className='bg text-center p-48 text-left mb-20'>
                <p className='text-xl md:text-2xl lg:text-4xl font-semibold text-orange-400 break-normal'>Test Your Knowledge...</p>
                <p className='text-xl md:text-2xl lg:text-4xl font-semibold text-wrap mr-96 mt-4 text-yellow-400 break-normal hidden lg:block'>Try our topic based quiz tests to test your knowledge and skills. And make the best preparation for your upcoming competition and career. Select your favourite topic to participate. And know about the depth of your learning.</p>
            </div>
            <Topics topics={topics.data}></Topics>
        </div>

    );
};

export default Home;