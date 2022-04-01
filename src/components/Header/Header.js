import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome To my Shop</h1>
            <nav className='navlink'>
                <CustomLink to='/home'>Home</CustomLink>
                <CustomLink to='/orderreview'>Order Review</CustomLink>
                {/* <CustomLink to='/cart'>Cart</CustomLink> */}
                <CustomLink to='/grandpa'>GrandPa</CustomLink>
            </nav>
        </div>
    );
};

export default Header;