import { useEffect, useRef } from "react";

export function HeartBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      rotation: number;
      rotationSpeed: number;
      pulse: number;
      pulseSpeed: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      hearts.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 8 + 4,
        opacity: Math.random() * 0.4 + 0.1,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        pulse: 0,
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    function drawHeart(
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, size * 0.3);
      ctx.bezierCurveTo(
        -size * 0.5,
        -size * 0.3,
        -size,
        size * 0.1,
        0,
        size
      );
      ctx.bezierCurveTo(size, size * 0.1, size * 0.5, -size * 0.3, 0, size * 0.3);
      ctx.fillStyle = `rgba(74, 222, 128, ${opacity})`;
      ctx.shadowColor = "rgba(74, 222, 128, 0.3)";
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.restore();
    }

    function animate() {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      hearts.forEach((heart) => {
        heart.x += heart.vx;
        heart.y += heart.vy;
        heart.rotation += heart.rotationSpeed;
        heart.pulse += heart.pulseSpeed;

        if (heart.y < -20) {
          heart.y = canvas.height + 20;
          heart.x = Math.random() * canvas.width;
        }
        if (heart.x < -20) heart.x = canvas.width + 20;
        if (heart.x > canvas.width + 20) heart.x = -20;

        const pulseScale = 1 + Math.sin(heart.pulse) * 0.15;
        drawHeart(
          ctx,
          heart.x,
          heart.y,
          heart.size * pulseScale,
          heart.rotation,
          heart.opacity
        );
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-40 pointer-events-none"
    />
  );
}
