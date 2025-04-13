import React, { useEffect, useState } from 'react';
import dragonImg from '../../public/cursor.png';

const DragonCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setPosition(newPos);
      setTrail((prev) => [...prev.slice(-15), { ...newPos, id: Date.now() + Math.random() }]);
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      {/* 🔥 Dragon Cursor Image */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div className="relative w-16 h-16 animate-flame-flicker">
          <img
            src={dragonImg}
            alt="dragon"
            className="w-full h-full object-contain rounded-full filter drop-shadow-lg"
            style={{
              filter:
                'drop-shadow(0 0 10px #ff4500) drop-shadow(0 0 20px #ff6347) drop-shadow(0 0 30px #ffa500)',
            }}
          />
          {/* Optional aura ring */}
          <div className="absolute inset-0 rounded-full animate-ping border-2 border-orange-500 opacity-50" />
        </div>
      </div>

      {/* 🔥 Fiery Trail */}
      {trail.map((t, index) => (
        <div
          key={t.id}
          className="fixed pointer-events-none z-[9998] rounded-full"
          style={{
            width: `${20 - index}px`,
            height: `${20 - index}px`,
            left: t.x,
            top: t.y,
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 94, 0, 0.15)',
            filter: `blur(${2 + index / 2}px)`,
            opacity: (20 - index) / 20,
            transition: 'opacity 0.2s ease-out, transform 0.1s ease-out',
          }}
        />
      ))}
    </>
  );
};

export default DragonCursor;
