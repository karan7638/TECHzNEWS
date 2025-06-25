import React from 'react'
import './Navbar.css'
import logo_tech from '../../assets/logo.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {
    const { loginWithRedirect, isAuthenticated, logout, user } = useAuth0();
    
    // Example of conditional search icon
    const searchIcon = props.isDarkMode ? search_icon_dark : search_icon_light;

    return (
        <div className='w-full flex fixed items-center justify-between top-0 left-0 py-4 px-6 z-50 bg-slate-300'>
            <div className='flex items-center'>
                <img className='w-12 cursor-pointer' src={logo_tech} alt="TechZnews" />
                <h1 className='font-bold'>TECHzNEWS</h1>
            </div>

            <ul className="flex space-x-6">
                <Link to="/home"><li onClick={() => props.setMenu("technology")}>Home</li></Link>
                <Link to="/tech"><li onClick={() => props.setMenu("technology")}>Technology</li></Link>
                <Link to="/ai"><li onClick={() => props.setMenu("ai")}>AI</li></Link>
                <Link to="/contact_Us"><li>Contact Us</li></Link>
            </ul>

            <div className='search-box'>
                <input 
                    onChange={(e) => props.setSearch(e.target.value)} 
                    type="text" 
                    placeholder='Search here..' 
                />
                <img src={searchIcon} alt="Search" />
            </div>

            <div className='ml-8'>
                {isAuthenticated && <p>Welcome, <br />{user?.name}</p>}
            </div>

            <div>
                {isAuthenticated ? (
                    <div className='mt-2 ml-10 items-center'>
                        <button 
                            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 mb-2"
                        >
                            LogOut
                        </button>
                    </div>
                ) : (
                    <div className='mt-2 ml-10 items-center'>
                        <button 
                            onClick={() => loginWithRedirect()} 
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 mb-2"
                        >
                            LogIn
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
