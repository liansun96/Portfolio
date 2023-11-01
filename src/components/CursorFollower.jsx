import React, { useState, useEffect } from "react";

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: `${position.y - 100}px`,
    left: `${position.x - 100}px`,
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#f5eded10",
    boxShadow: "0 0 200px 50px #f5eded20",
    pointerEvents: "none", // Ensure the cursor doesn't interfere with underlying elements
  };

  const top = `${position.y - 100}px`;
  const left = `${position.x - 100}px`;
  // console.log(top, left);

  return <div style={cursorStyle}></div>;
};

export default CursorFollower;
