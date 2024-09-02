// src/Pages/MusicPlayer.jsx

import React, { useState } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
    const [currentTrack, setCurrentTrack] = useState(0);

    // Array of audio files
    const tracks = [
        { title: 'Track 1', src: '/audios/track1.mp3', cover: '/Images/cover1.jpeg' },
        { title: 'Track 2', src: '/audios/track2.mp3', cover: '/Images/cover2.jpeg' },
    ];

    const nextTrack = () => {
        setCurrentTrack((prevTrack) => (prevTrack + 1) % tracks.length);
    };

    const prevTrack = () => {
        setCurrentTrack((prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length);
    };

    return (
        <div className="music-player">
            <div className="player-controls">
                <button onClick={prevTrack}>{"<<"}</button>
                <audio controls src={tracks[currentTrack].src}>
                    Your browser does not support the audio element.
                </audio>
                <button onClick={nextTrack}>{">>"}</button>
            </div>

            <div className="track-info">
                <img src={tracks[currentTrack].cover} alt="Track Cover" className="cover-image" />
                <p>{tracks[currentTrack].title}</p>
            </div>
        </div>
    );
};

export default MusicPlayer;
