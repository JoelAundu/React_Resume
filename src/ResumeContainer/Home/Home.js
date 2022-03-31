//import dependcies
import React from 'react';
import Profile from './Profile';
import Footer from './Footer/Footer';
import './Home.css'

// exporting home folder as default to use the profile and footer
export default function Home(){
    return (
        <div className = 'home-container'>
            <Profile/>
            <Footer/>
        </div>
    )
}