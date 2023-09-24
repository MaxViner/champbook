import React, { useEffect, useRef } from 'react'; 
import styles from './HeartLoader.module.scss'; 
import LoadText from '../LoadText/LoadText';
 
function HeartLoader() { 
  const canvasRef = useRef(null); 
  const ctxRef = useRef(null); 
 
  useEffect(() => { 
    const canvas = canvasRef.current; 
    const ctx = canvas.getContext('2d'); 
    ctxRef.current = ctx; 
 
    const maxSize = 24; 
    const maxParticles = 1500; 
    const minVel = 20; 
    const maxGenerationPerFrame = 10; 
    const width = canvas.width; 
    const height = canvas.height; 
    const centerX = width / 2; 
    const centerY = height / 2; 
    let particles = []; 
 
    function isInsideHeart(x, y) { 
      x = ((x - centerX) / centerX) * 3; 
      y = ((y - centerY) / centerY) * 3; 
      const x2 = x * x; 
      const y2 = y * y; 
      return Math.pow(x2 + y2 - 1, 3) - x2 * y2 * y <= 0; 
    } 
 
    function random(size, freq) { 
      let val = 0; 
      let iter = freq; 
      do { 
        size /= iter; 
        iter += freq; 
        val += size * Math.random(); 
      } while (size >= 1); 
      return val; 
    } 
 
    function Particle() { 
      var x = centerX; 
      var y = centerY; 
      var size = Math.floor(random(maxSize, 2.4)); 
      var xVel = ((maxSize + minVel) - size) / 2 - Math.random() * ((maxSize + minVel) - size); 
      var yVel = ((maxSize + minVel) - size) / 2 - Math.random() * ((maxSize + minVel) - size); 
      let nx = x; 
      let ny = y; 
      var r,g,b,a = 0.05 * size; 
 
      this.draw = function () { 
        const r = Math.floor(255 * (x / width)); 
        const g = Math.floor(255 * (1 - y / height)); 
        const b = Math.floor(255 - r); 
        ctx.fillStyle =  `rgba(${r}, ${g}, ${b}, ${a})` ; 
        ctx.beginPath(); 
        ctx.arc(x, y, size, 0, Math.PI * 2, true); 
        ctx.closePath(); 
        ctx.fill(); 
      }; 
 
      this.move = function (dt) { 
        nx += xVel * dt; 
        ny += yVel * dt; 
        if (!isInsideHeart(nx, ny)) { 
          if (!isInsideHeart(nx, y)) { 
            xVel *= -1; 
            return; 
          } 
          if (!isInsideHeart(x, ny)) { 
            yVel *= -1; 
            return; 
          } 
          xVel = -1 * yVel; 
          yVel = -1 * xVel; 
          return; 
        } 
        x = nx; 
        y = ny; 
      }; 
    } 
 
    function movementTick() { 
      const len = particles.length; 
      const dead = maxParticles - len; 
      for (let index = 0; index < dead && index < maxGenerationPerFrame; index++) { 
        particles.push(new Particle()); 
      } 
      const now = Date.now(); 
      let dt = now - last; 
      dt /= 1000; 
      last = now; 
      particles.forEach((p) => { 
        p.move(dt); 
      }); 
    } 
 
    function tick() { 
      ctx.clearRect(0, 0, width, height); 
      particles.forEach((p) => { 
        p.draw(); 
      }); 
      requestAnimationFrame(tick); 
    } 
 
    let last = Date.now(); 
    setInterval(movementTick, 8); 
    tick(); 
  }, []); 
 
  return ( 
    <div className={styles.HeartLoader}> 
      <canvas ref={canvasRef} id='HeartLoader'
      className={styles.canvas}></canvas> 
    </div> 
  ); 
} 
 
export default HeartLoader;