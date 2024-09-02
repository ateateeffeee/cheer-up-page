import React, { useState, useRef, useEffect } from 'react';
import './index.scss';

interface Song {
  title: string;
  url: string;
  albumArt: string;
}

const songs: Song[] = [
  { title: 'Twist', url: '/music/Korn - Twist (Official Audio).mp3', albumArt: '/albumArt/shocked guy.jfif' },
  { title: 'Cop Theme', url: '/music/hers.mp3', albumArt: '' },
  { title: '36', url: '/music/36.mp3', albumArt: '' },
];

const MusicPlayer: React.FC = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const currentSong = songs[currentSongIndex];

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [currentSongIndex, isPlaying]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentSongIndex((currentSongIndex + 1) % songs.length);
    setProgress(0);
  };

  const handlePrevious = () => {
    setCurrentSongIndex((currentSongIndex - 1 + songs.length) % songs.length);
    setProgress(0);
  };

  const handleProgressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = (value / 100) * audioRef.current.duration;
    }
    setProgress(value);
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const toggleExpanded = () => {
    setExpanded((prevExpanded) => {
      const newExpandedState = !prevExpanded;
      
      if (newExpandedState) {
        setTimeout(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }, 0);
      }
  
      return newExpandedState;
    });
  };
  

  return (
    <div className="music-player">
        <div className="song-info" onClick={toggleExpanded}>
        <span>{currentSong.title}</span>
        <div className={`more-info-collapser ${expanded ? 'expanded' : ''}`}>
            <img src='/icons/chevron-down.svg' alt='chevron-down'/>
        </div>
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleProgressChange}
        />
      </div>
      <audio
        ref={audioRef}
        src={currentSong.url}
        onTimeUpdate={updateProgress}
        onEnded={handleNext}
      />
      <div className="controls">
        <button onClick={handlePrevious}>
          <img src='/icons/skip-back.svg' alt='Previous'/>
        </button>
        <button onClick={handlePlayPause}>
          <img src={isPlaying ? '/icons/pause.svg' : '/icons/play.svg'} alt='Play/Pause'/>
        </button>
        <button onClick={handleNext}>
          <img src='/icons/skip-forward.svg' alt='Next'/>
        </button>
      </div>
      {expanded && (
        <div className="expanded-info">
          <img className='album-art' src={currentSong.albumArt} alt={currentSong.title} />
          <ul>
            {songs.map((song, index) => (
              <li
                key={index}
                className={index === currentSongIndex ? 'selected-song' : ''}
                onClick={() => {
                  setCurrentSongIndex(index);
                  setProgress(0);
                  setIsPlaying(true);
                }}
              >
                {song.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
