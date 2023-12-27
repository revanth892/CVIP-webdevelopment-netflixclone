import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
    const [show,handleShow]=useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };        
    },[])

    return (
        <div className={`nav ${show && "nav_black" }`}>
            <img
                className='nav_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2014_logo.svg'
                alt="Netflix Logo"
            />
            <img
                className='nav_avatar'
                src='https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg'
                alt="Netflix Logo"
            />
        </div>
  )
}

export default Nav;