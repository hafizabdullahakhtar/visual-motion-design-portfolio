import React, { useState, useEffect, useRef } from "react";

const DraggableOnly = ({ children, easingFactor = 0.08 }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const startPositionRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startPositionRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    // e.preventDefault();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      targetPositionRef.current = {
        x: e.clientX - startPositionRef.current.x,
        y: e.clientY - startPositionRef.current.y,
      };
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animate = () => {
    const { x, y } = targetPositionRef.current;
    setPosition((prevPosition) => {
      const newPosition = {
        x: prevPosition.x + (x - prevPosition.x) * easingFactor,
        y: prevPosition.y + (y - prevPosition.y) * easingFactor,
      };
      return newPosition;
    });
    if (
      Math.abs(position.x - x) > 0.1 ||
      Math.abs(position.y - y) > 0.1 ||
      isDragging
    ) {
      animationFrameRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    animate(); // Start the animation loop on mount

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isDragging]);

  return (
    <div
      data-dragging={isDragging}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "relative",
        display: "block",
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: "none",
      }}
    >
      {children}
    </div>
  );
};

export default DraggableOnly;
