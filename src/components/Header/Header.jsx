import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar px-16 bg-neutral text-neutral-content flex justify-between">
            <Link><h1 className='text-3xl font-bold'>Coffee Store</h1></Link>
            <ul className="menu menu-horizontal px-1">
                <Link to='/' className='text-md mx-8'>Home</Link>
                <Link to='/addcoffee' className='text-md mx-8'>Add Coffee</Link>
            </ul>
        </div>
    );
};

export default Header;