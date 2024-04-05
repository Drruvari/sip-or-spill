import React, { useEffect } from "react";

const ChampagneBubbles: React.FC = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    let bubbles: Bubble[] = [];

    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "0";
    canvas.style.pointerEvents = "none";

    class Bubble {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.radius = Math.random() * 3 + 0.5;
        this.color = `rgba(255, 255, 255, ${
          Math.round(Math.random() * 30) + 20
        }%)`;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = -Math.random() * 11 - 1;
      }
    }

    function setCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      bubbles.length = Math.floor(canvas.width * 0.2);
      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i] = new Bubble();
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        bubbles.forEach((bubble) => {
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;

          if (bubble.y < -bubble.radius) {
            bubble.y = canvas.height + bubble.radius;
            bubble.x = Math.random() * canvas.width;
          }

          if (bubble.x < 0 || bubble.x > canvas.width) {
            bubble.x = bubble.x < 0 ? 0 : canvas.width;
            bubble.vx *= -1;
          }

          ctx.beginPath();
          ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
          ctx.fillStyle = bubble.color;
          ctx.fill();
        });
        requestAnimationFrame(animate);
      }
    }

    window.addEventListener("resize", setCanvas);
    setCanvas();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvas);
      canvas.remove();
    };
  }, []);

  return null;
};

export default ChampagneBubbles;
