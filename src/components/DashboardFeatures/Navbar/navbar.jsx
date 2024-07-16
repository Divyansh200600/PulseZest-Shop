import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [navbarStyle, setNavbarStyle] = useState({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'blue',
    color: 'black',
    position: 'relative',
    overflow: 'hidden',
    transform: 'translateY(-100%)',
    transition: 'transform 0.5s ease-out',
    backgroundImage: 'url("")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  useEffect(() => {
    setNavbarStyle(prevStyle => ({
      ...prevStyle,
      transform: 'translateY(0)',
    }));
  }, []);

  const brandStyle = {
    fontSize: '1.5rem',
  };

  const linkContainerStyle = {
    display: 'flex',
    gap: '2rem', // Increase gap for better spacing with icons
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '5px 10px',
    transition: 'color 0.3s ease',
  };

  const iconStyle = {
    marginBottom: '5px', // Space between icon and text
  };

  const beforeAfterStyle = {
    content: "''",
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: '#fff',
    transition: 'transform 0.3s ease',
    zIndex: -1,
  };

  const handleMouseOver = (e) => {
    const link = e.currentTarget;
    link.style.color = '#333';
    const before = link.querySelector('.before');
    const after = link.querySelector('.after');
    before.style.transform = 'rotateY(0)';
    after.style.transform = 'rotateY(0)';
  };

  const handleMouseOut = (e) => {
    const link = e.currentTarget;
    link.style.color = 'white';
    const before = link.querySelector('.before');
    const after = link.querySelector('.after');
    before.style.transform = 'rotateY(90deg)';
    after.style.transform = 'rotateY(-90deg)';
  };

  return (
    <div style={navbarStyle}>
      <div style={brandStyle}>My Website</div>
      <div style={linkContainerStyle}>
        <a
          href="#home"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faHome} style={iconStyle} />
          <span className="before" style={{ ...beforeAfterStyle, top: 0, left: 0, transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
          Home
          <span className="after" style={{ ...beforeAfterStyle, bottom: 0, right: 0, transform: 'rotateY(-90deg)', transformOrigin: 'right' }} />
        </a>
        <a
          href="#about"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faInfoCircle} style={iconStyle} />
          <span className="before" style={{ ...beforeAfterStyle, top: 0, left: 0, transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
          About
          <span className="after" style={{ ...beforeAfterStyle, bottom: 0, right: 0, transform: 'rotateY(-90deg)', transformOrigin: 'right' }} />
        </a>
        <a
          href="#services"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faCogs} style={iconStyle} />
          <span className="before" style={{ ...beforeAfterStyle, top: 0, left: 0, transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
          Services
          <span className="after" style={{ ...beforeAfterStyle, bottom: 0, right: 0, transform: 'rotateY(-90deg)', transformOrigin: 'right' }} />
        </a>
        <a
          href="#contact"
          style={linkStyle}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
          <span className="before" style={{ ...beforeAfterStyle, top: 0, left: 0, transform: 'rotateY(90deg)', transformOrigin: 'left' }} />
          Contact
          <span className="after" style={{ ...beforeAfterStyle, bottom: 0, right: 0, transform: 'rotateY(-90deg)', transformOrigin: 'right' }} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
