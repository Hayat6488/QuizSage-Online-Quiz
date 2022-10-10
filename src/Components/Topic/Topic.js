import React from 'react';


const Topic = ({topic}) => {
    const {name, id, logo, total} = topic;
    return (
        <div className='bg-slate-800 p-2 rounded-md'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between mt-2'>
                <p className='text-2xl text-yellow-400'>{name}</p>
                <p  className='text-2xl text-yellow-400'>Ques: {total}</p>
                <button  className='bg-yellow-400 text-2xl text-slate-800 px-3 rounded-md'>Start</button>
            </div>
        </div>
    );
};

export default Topic;