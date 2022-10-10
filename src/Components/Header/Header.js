import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-20 flex justify-between bg-slate-800 py-4 items-center'>
            <div>
                <p className='text-orange-400 text-4xl font-semibold'>QuizSage</p>
            </div>
            <div className='text-orange-400'>
                <Link className='mr-6 text-2xl font-semibold' to='/'>Home</Link>
                <Link className='mr-6 text-2xl font-semibold' to='/statistics'>Statistics</Link>
                <Link className='mr-6 text-2xl font-semibold' to='/blogs'>Blogs</Link>
                <Link className='mr-6 text-2xl font-semibold' to='/about'>About Us</Link>
            </div>
        </div>
    );
};

export default Header;