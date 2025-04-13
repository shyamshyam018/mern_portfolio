import React, { useEffect, useState } from 'react';
import dragonImg from '../../public/cursor.png'; // Your dragon image

const DragonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [sparks, setSparks] = useState([]);

  const sparkOptions = {
    sparkSize: { min: 6, max: 10 }, // Size of individual sparks
    maxSparks: 50, // Max number of sparks that remain visible
    sparkSpread: 30, // How much the sparks spread out from the cursor
    burstSize: 50, // Number of sparks per click burst
    sparkOpacity: { min: 0.6, max: 1 }, // Random opacity for each spark
    animationSpeed: { min: 0.5, max: 1.5 }, // Duration of the spark animation
    colors: ['#CC163A', '#DC143C', '#F1C4CD', '#ED2F6A', '#EC5800', '#DE3163'], // Spark colors
  };

  // Track mouse movement
  useEffect(() => {
    const move = (e) => {
      const newSpark = createSpark(e.clientX, e.clientY);
      setPosition({ x: e.clientX, y: e.clientY });
      setSparks((prev) => [...prev.slice(-sparkOptions.maxSparks), newSpark]);
    };

    const click = (e) => {
      // Add burst of fireworks-like sparks
      const burst = Array.from({ length: sparkOptions.burstSize }, () =>
        createSpark(e.clientX, e.clientY, sparkOptions.sparkSpread)
      );
      setSparks((prev) => [...prev, ...burst]);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', click);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', click);
    };
  }, []);

  const createSpark = (x, y, spread = sparkOptions.sparkSpread) => {
    // You can adjust the spark's originating position here by adding offsets
    const offsetX = 30;  // Horizontal offset of the spark (change this value to adjust)
    const offsetY = 20; // Vertical offset of the spark (change this value to adjust)
  
    return {
      x: x + (Math.random() * spread - spread / 2) + offsetX,
      y: y + (Math.random() * spread - spread / 2) + offsetY,
      id: Date.now() + Math.random(),
      size: Math.random() * (sparkOptions.sparkSize.max - sparkOptions.sparkSize.min) + sparkOptions.sparkSize.min,
      color: getRandomSparkColor(),
      opacity: Math.random() * (sparkOptions.sparkOpacity.max - sparkOptions.sparkOpacity.min) + sparkOptions.sparkOpacity.min,
      animationDuration: Math.random() * (sparkOptions.animationSpeed.max - sparkOptions.animationSpeed.min) + sparkOptions.animationSpeed.min,
    };
  };
  

  const getRandomSparkColor = () => {
    return sparkOptions.colors[Math.floor(Math.random() * sparkOptions.colors.length)];
  };

  return (
    <>
      {/* 🔥 Dragon Cursor */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className="relative w-16 h-16 animate-flame-flicker">
          <img
            src={dragonImg}
            alt="dragon"
            className="w-full h-full object-contain rounded-full"
            style={{
              filter:
                'drop-shadow(0 0 10px #DC143C) drop-shadow(0 0 25px #DC143C)',
            }}
          />
        </div>
      </div>

      {/* ✨ Fireworks-like Sparks */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: spark.x,
            top: spark.y,
            width: spark.size,
            height: spark.size,
            borderRadius: '50%',
            backgroundColor: spark.color,
            transform: 'translate(-50%, -50%)',
            opacity: spark.opacity,
            animation: `spark-fade ${spark.animationDuration}s ease-out forwards, spark-expansion ${spark.animationDuration}s ease-out forwards`,
          }}
        />
      ))}
    </>
  );
};

export default DragonCursor;

