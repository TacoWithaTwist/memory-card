import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import spritesheet from '../assets/CuteCards - asset pack/CuteCards.png';
export default function Card({
  spriteSheet,
  spriteWidth,
  spriteHeight,
  totalFrames,
  frameRate,
  frameIndex,
  onClick,
}) {
  const canvasRef = useRef(null);
  const animationId = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const sprite = new Image();
    sprite.src = spritesheet;
    const frameDuration = 1000 / frameRate;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const spriteX = (frameIndex % totalFrames) * spriteWidth;
      const spriteY = 0;
      ctx.drawImage(
        sprite,
        spriteX,
        spriteY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        spriteWidth,
        spriteHeight
      );
    };
    animationId.current = setTimeout(() => {
      requestAnimationFrame(animate);
    }, frameDuration);
    sprite.onload = () => {
      animate();
    };
    return () => {
      clearTimeout(animationId.current);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
  }, [spriteSheet, spriteWidth, spriteHeight, totalFrames, frameRate]);
  return (
    <>
      <motion.canvas
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        exit={{ scale: 0 }}
        ref={canvasRef}
        onClick={(frameIndex) => onClick(frameIndex)}
        width={spriteWidth}
        height={spriteHeight}
      ></motion.canvas>
    </>
  );
}
