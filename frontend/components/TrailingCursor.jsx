import { useState, useEffect, useCallback } from 'react';

const TrailingCursor = () => {
  const [position, setPosition] = useState(null); // Initialize as null
  const [isPointer, setIsPointer] = useState(false);
  const [trailingPositions, setTrailingPositions] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // Track if the cursor is visible
  const outerScale = 1.5; // Adjusted scale to be more subtle

  // Handle mouse movement
  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setPosition({ x: clientX, y: clientY });
    setTrailingPositions((prev) => {
      const newPositions = [{ x: clientX, y: clientY }, ...prev.slice(0, 2)];
      return newPositions;
    });
  };

  // Handle pointer detection over clickable elements
  const onMouseOver = useCallback((e) => {
    if (e.target.tagName.toLowerCase() === 'a' || e.target.tagName.toLowerCase() === 'button') {
      setIsPointer(true);
    } else {
      setIsPointer(false);
    }
  }, []);

  // Hide cursor when mouse leaves the window
  const onMouseLeave = () => {
    setIsVisible(false);
  };

  // Show cursor when mouse re-enters the window
  const onMouseEnter = () => {
    setIsVisible(true);
  };

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [onMouseOver]);

  if (!isVisible || !position) {
    return null; // Hide cursor when it's not visible or before movement
  }

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-[9999] rounded-full"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '8px',
          height: '8px',
          backgroundColor: 'rgba(147, 112, 219, 0.8)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Outer cursor */}
      <div
        className="fixed pointer-events-none z-[9998] rounded-full transition-transform duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: '30px',
          height: '30px',
          backgroundColor: 'rgba(147, 112, 219, 0.3)',
          transform: `translate(-50%, -50%) scale(${isPointer ? outerScale : 0.75})`,
        }}
      />

      {/* Trailing dots */}
      {trailingPositions.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9997] rounded-full transition-opacity duration-500 ease-out"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${8 * (0.8 - index * 0.2)}px`,
            height: `${8 * (0.8 - index * 0.2)}px`,
            backgroundColor: 'rgba(147, 112, 219, 0.8)',
            opacity: 0.6 - index * 0.2,
            transform: 'translate(-50%, -50%)',
            transition: `left 0.1s ease-out, top 0.1s ease-out`,
          }}
        />
      ))}
    </>
  );
};

export default TrailingCursor;
