import React from 'react';

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: '#1e272e',
        color: '#ffffff',
        padding: '20px 40px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <h1
          style={{
            fontSize: '2.2rem',
            fontWeight: 'bold',
            margin: '0',
            letterSpacing: '1px',
          }}
        >
          EmbedTv
        </h1>
      </div>
      <p
        style={{
          fontSize: '1.2rem',
          fontStyle: 'italic',
          margin: '0',
          opacity: '0.8',
        }}
      >
        "Sua paixão pelo esporte começa aqui"
      </p>
    </header>
  );
};

export default Header;
