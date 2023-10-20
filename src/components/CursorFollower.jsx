import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: `${position.y -150 }px`,
    left: `${position.x -150 }px`,
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    backgroundColor: '#F9F5F600',
    boxShadow: 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px',
    pointerEvents: 'none', // Ensure the cursor doesn't interfere with underlying elements
  };

  return <div style={cursorStyle}></div>;
};

export default CursorFollower;
