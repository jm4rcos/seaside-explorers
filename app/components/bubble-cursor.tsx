"use client";

import React, { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

interface Bubble {
  element: HTMLDivElement;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

const BubbleCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const bubbles: Bubble[] = useRef<Bubble[]>([]).current;
  const maxBubbles = 50;

  const createBubble = (x: number, y: number) => {
    const bubble = document.createElement("div");
    bubble.className =
      "bubble absolute rounded-full bg-white bg-opacity-50 pointer-events-none";
    const size = Math.random() * 10 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    document.body.appendChild(bubble);

    bubbles.push({
      element: bubble,
      x,
      y,
      size,
      speed: Math.random() * 2 + 1,
      opacity: 1,
    });

    if (bubbles.length > maxBubbles) {
      const oldBubble = bubbles.shift();
      if (oldBubble) {
        document.body.removeChild(oldBubble.element);
      }
    }
  };

  const updateBubbles = () => {
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const bubble = bubbles[i];
      bubble.y -= bubble.speed;
      bubble.opacity -= 0.02;
      bubble.element.style.top = `${bubble.y}px`;
      bubble.element.style.opacity = `${bubble.opacity}`;

      if (bubble.opacity <= 0) {
        document.body.removeChild(bubble.element);
        bubbles.splice(i, 1);
      }
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
      createBubble(e.clientX, e.clientY);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    const animationFrame = requestAnimationFrame(function animate() {
      updateBubbles();
      requestAnimationFrame(animate);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-5 h-5 bg-white bg-opacity-75 rounded-full pointer-events-none z-50 shadow-lg"
    ></div>
  );
};

export default BubbleCursor;
