import React, { useState, useRef, useEffect } from 'react';
import './index.scss'; // Assuming you're using SCSS for styling

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentSong, setCurrentSong] = useState("Song Title"); // Add your song title here
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            const updateProgress = () => {
                setCurrentTime(audio.currentTime);
                setDuration(audio.duration);
            };

            audio.addEventListener('timeupdate', updateProgress);

            return () => {
                audio.removeEventListener('timeupdate', updateProgress);
            };
        }
    }, []);

    const togglePlayPause = () => {
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const audio = audioRef.current;

        if (audio) {
            audio.currentTime = (parseFloat(e.target.value) / 100) * duration;
        }
    };

    return (
        <div className="music-player">
            <div className="song-info">
                <h4>{currentSong}</h4>
                <p>{`${Math.floor(currentTime / 60)}:${Math.floor(currentTime % 60).toString().padStart(2, '0')} / ${Math.floor(duration / 60)}:${Math.floor(duration % 60).toString().padStart(2, '0')}`}</p>
            </div>
            <input
                type="range"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleSeek}
                className="progress-bar"
            />
            <button onClick={togglePlayPause} className="play-button">
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <audio ref={audioRef} src="/music/song1.mp3"></audio>
        </div>
    );
};

export default MusicPlayer;
