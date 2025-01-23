import React from 'react';
import './Navbar.css';
import logo from './assets/logo.png';
import search from './assets/search (2).png';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from './Redux/navbarSlice';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const dispatch = useDispatch();

    const handleTagClick = (page) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <div className='Navbar'>

            <NavLink
                to="/"
                onClick={() => handleTagClick('/')}
                className={({ isActive }) => (isActive ? 'active-class' : '')}>
                <img src={logo} alt="logo Logo" className='logo' />
            </NavLink>

            <div className="tags">
                <NavLink
                    to="/Grammar"
                    onClick={() => handleTagClick('Grammar')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Grammar
                </NavLink>
                <NavLink
                    to="/Vocabulary"
                    onClick={() => handleTagClick('Vocabulary')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Vocabulary
                </NavLink>
                <NavLink
                    to="/Listening"
                    onClick={() => handleTagClick('Listening')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Listening
                </NavLink>
                <NavLink
                    to="/Reading"
                    onClick={() => handleTagClick('Reading')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Reading
                </NavLink>
                <NavLink
                    to="/Writing"
                    onClick={() => handleTagClick('Writing')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Writing
                </NavLink>
                <NavLink
                    to="/MockExams"
                    onClick={() => handleTagClick('Mock Exams')}
                    className={({ isActive }) => (isActive ? 'active-class' : '')}>
                    Mock Exams
                </NavLink>
            </div>

            <div className="search-card">
                <img src={search} alt="" />
                <button>Login</button>
            </div>

        </div>
    );
}

export default Navbar;
