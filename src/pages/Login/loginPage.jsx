import React, { useState } from 'react';
import SpaceBackground from '../../components/LoginFeatures/Particles/Particles';
import { FaHome, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaMoon } from 'react-icons/fa';

const LoginPage = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const loginPageStyle = {
    position: 'relative',
    zIndex: 1,
    minHeight: '100vh',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: '20px',
  };

  const dockStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '20px auto',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const iconStyle = (icon) => ({
    margin: '0 10px',
    fontSize: '24px',
    color: '#333',
    transition: 'transform 0.3s ease, color 0.3s ease, box-shadow 0.3s ease',
    transform: hoveredIcon === icon ? 'scale(1.2)' : 'scale(1)',
    boxShadow: hoveredIcon === icon ? '0 0 15px rgba(0, 0, 0, 0.5)' : 'none',
    borderRadius: '50%',
    padding: '5px',
  });

  const handleIconHover = (icon) => {
    setHoveredIcon(icon);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  const handleDarkModeToggle = () => {
    // Implement dark mode toggle logic
  };

  return (
    <div>
      
  
    <div style={loginPageStyle}>
      
    <SpaceBackground />
      <div style={dockStyle}>
        <a
          href="/"
          style={iconStyle('home')}
          onMouseEnter={() => handleIconHover('home')}
          onMouseLeave={handleIconLeave}
        >
          <FaHome />
        </a>
        <a
          href="mailto:youremail@example.com"
          style={iconStyle('email')}
          onMouseEnter={() => handleIconHover('email')}
          onMouseLeave={handleIconLeave}
        >
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/"
          style={iconStyle('linkedin')}
          onMouseEnter={() => handleIconHover('linkedin')}
          onMouseLeave={handleIconLeave}
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/"
          style={iconStyle('instagram')}
          onMouseEnter={() => handleIconHover('instagram')}
          onMouseLeave={handleIconLeave}
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/"
          style={iconStyle('facebook')}
          onMouseEnter={() => handleIconHover('facebook')}
          onMouseLeave={handleIconLeave}
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/"
          style={iconStyle('twitter')}
          onMouseEnter={() => handleIconHover('twitter')}
          onMouseLeave={handleIconLeave}
        >
          <FaTwitter />
        </a>
        <div
          style={iconStyle('moon')}
          onMouseEnter={() => handleIconHover('moon')}
          onMouseLeave={handleIconLeave}
          onClick={handleDarkModeToggle}
        >
          <FaMoon />
        </div>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
