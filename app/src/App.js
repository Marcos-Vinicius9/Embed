import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import VideoCard from './components/VideoCard'; 
import Header from './components/Header'; 
import './App.css';  

function App() {
  const [channels, setChannels] = useState([]); // Estado para armazenar os canais

  useEffect(() => {
    
    console.log('Iniciando a requisição para buscar os canais...');
    
    const fetchChannels = async () => {
      try {
        const response = await axios.get('https://embed-tv.onrender.com/');
        console.log('Resposta da API:', response.data); // Exibe a resposta da API
        setChannels(response.data);
      } catch (error) {
        console.error('Erro ao buscar canais:', error);
      }
    };
  
    fetchChannels();
  }, []);

  return (
    <div className="App">
      {}
      <Header />
      
      <div className="video-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
        {channels.map((channel) => (
          <VideoCard
            key={channel.channel_id} 
            src={channel.url} 
            title={channel.name}
            logo={channel.logo} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;