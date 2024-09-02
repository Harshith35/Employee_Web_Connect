import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import CalendarWithHolidays from './CalendarWithHolidays';

const LandingPage = () => {

    //State to track the current slide
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array of images for the carousel
    const images = [
        '/Images/News1.jpeg',
        '/Images/News2.jpeg',
        '/Images/News3.jpeg'
    ];

    // Function to handle the next slide
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    };

    // Function to handle the previous slide
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="landing-page">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src="/Images/Logo.png" alt="Company Logo" className="logo-image" />
                </div>
                <div className="nav-links">
                    <Link to="/music-player">Music Player</Link>
                    <Link to="/hr-policies">HR Policies</Link>
                    <a href="#">Job Portal</a>
                    <a href="#">HR Query</a>
                    <a href="#">Login</a>
                    <a href="#">Signup</a>
                </div>
            </header>

            {/* Main Content */}
            <div className="main-content">
                {/* Carousel */}
                <div className="carousel">
                    <button className="carousel-btn" onClick={prevSlide}>{"<"}</button>
                    <div className="carousel-content">
                        <h2>Upcoming News/Announcement</h2>
                        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                    </div>
                    <button className="carousel-btn" onClick={nextSlide}>{">"}</button>
                </div>

                {/* Announcements */}
                <div className="announcements">
                    <h3>Announcements</h3>
                    <ul>
                        <li>Announcement 1</li>
                        <li>Announcement 2</li>
                        <li>Announcement 3</li>
                    </ul>
                </div>

                {/* Calendar with Public Holidays */}
                <CalendarWithHolidays />

            </div>
        </div>
    );
};

export default LandingPage;
