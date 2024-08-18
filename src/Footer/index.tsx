import React from 'react';
import MusicPlayer from '../MusicPlayer';
import './index.scss'; // Assuming you're using SCSS for styling

const Footer = () => {
    return (
        <footer>
            {/* <div className="spotify-player">
                <iframe 
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/playlist/08QUiKzuDZCmBz1PWi8h83?utm_source=generator&theme=0&view=coverart"
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allowFullScreen={false}
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                ></iframe>
            </div> */}
            <div className="music-player-container">
                <MusicPlayer />
            </div>
        </footer>
    );
};

export default Footer;
