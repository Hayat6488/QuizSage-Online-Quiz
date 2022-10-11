import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='px-20 flex justify-between bg-slate-800 py-4 items-center'>
            <div>
                <p className='text-orange-400 text-4xl font-semibold'>QuizSage</p>
            </div>
            <div className='text-orange-400 text-2xl font-semibold flex gap-4'>
                <NavLink className={({isActive}) => isActive ? 'text-yellow-400' : undefined} to='/home'>Home</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-yellow-400' : undefined}  to='/statistics'>Statistics</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-yellow-400' : undefined}  to='/blogs'>Blogs</NavLink>
                <NavLink className={({isActive}) => isActive ? 'text-yellow-400' : undefined}  to='/about'>About Us</NavLink>
            </div>
        </div>
    );
};

export default Header;