import React from 'react';
import './VideoCard.css'; // Certifique-se de criar e importar o CSS do card

const VideoCard = ({ src, title, backgroundColor }) => {
  return (
    <div className="video-card" style={{ backgroundColor: backgroundColor|| 'transparent'  }}>
      <h3>{title}</h3>
      <iframe
        src={src}
        allow="encrypted-media"
        allowFullScreen
        frameBorder="0"
        title={title}
      ></iframe>
    </div>
  );
};

export default VideoCard;