import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './components/VideoCard';
import Header from './components/Header';
import './App.css';

function App() {
  const [channels, setChannels] = useState([]);

  useEffect(() => {

    const fetchChannels = async () => {
      try {
        const response = await axios.get('https://embed-tv.onrender.com/');
        setChannels(response.data);
      } catch (error) {
        console.error('Erro ao buscar canais:', error);
      }
    };

    fetchChannels();
  }, []);

  return (
    <div className="App">
      { }
      <Header />
      <div className="video-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        {channels.map((channel) => (
          <div
            className="video-card-wrapper"
            style={{
              margin: '10px',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}
          >
            <VideoCard
              key={channel.channel_id}
              src={channel.url}
              title={channel.name}
              logo={channel.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;