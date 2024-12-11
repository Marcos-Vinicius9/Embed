import React, { useState } from 'react';
import './VideoCard.css';

const VideoCard = ({ src, title, logo, backgroundColor }) => {
  const [isPlaying, setIsPlaying] = useState(false); 

  // Função para iniciar o vídeo
  const handlePlay = () => {
    setIsPlaying(true); 
  };

  return (
    <div className="video-card" style={{ backgroundColor: backgroundColor || 'transparent' }}>
      <h3>{title}</h3>
      
      {}
      {!isPlaying ? (
        <div className="video-thumbnail">
          <img src={logo} alt={`${title} logo`} />
          <button onClick={handlePlay} className="play-button">Play</button>
        </div>
      ) : (
        <iframe
          src={src}
          allow="encrypted-media"
          allowFullScreen
          frameBorder="0"
          title={title}
        ></iframe>
      )}
    </div>
  );
};

export default VideoCard;
