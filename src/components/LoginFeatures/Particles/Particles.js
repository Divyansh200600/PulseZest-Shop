import React, { useState, useEffect } from 'react';

const SpaceBackground = () => {
  const [dots, setDots] = useState([]);

  // Function to initialize dots with random positions
  const initializeDots = () => {
    const newDots = [];
    const numDots = 100; // Number of dots, adjust as needed

    for (let i = 0; i < numDots; i++) {
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const speed = 1 + Math.random() * 3; // Adjust speed range as needed
      newDots.push({ x, y, speed });
    }

    setDots(newDots);
  };

  // Function to update dots positions
  const updateDotsPosition = () => {
    const newDots = dots.map((dot) => {
      let newX = dot.x + dot.speed; // Move dots horizontally

      // Reset dot position when it moves out of the screen
      if (newX > window.innerWidth) {
        newX = -10; // Move dot to the left edge of the screen
      }

      return {
        ...dot,
        x: newX,
      };
    });

    setDots(newDots);
  };

  // Initialize dots on component mount
  useEffect(() => {
    initializeDots();
  }, []);

  // Update dots position every frame
  useEffect(() => {
    const animationFrame = requestAnimationFrame(updateDotsPosition);
    return () => cancelAnimationFrame(animationFrame);
  }, [dots]); // Update only when dots change

  const spaceBackgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    zIndex: -1,
    pointerEvents: 'none',
  };

  const dotStyle = {
    position: 'absolute',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'black',
  };

  return (
    <div style={spaceBackgroundStyle}>
      {dots.map((dot, index) => (
        <div
          key={index}
          style={{
            ...dotStyle,
            left: dot.x + 'px',
            top: dot.y + 'px',
          }}
        />
      ))}
    </div>
  );
}

export default SpaceBackground;
