"use client";

import { useEffect, useRef } from "react";

/* --------------------
   Types
-------------------- */

type Particle = {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
};

type Mouse = {
    x: number;
    y: number;
    radius: number;
};

export default function ParticleText(): JSX.Element {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef<Mouse>({
        x: 0,
        y: 0,
        radius: 120,
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        mouseRef.current.x = canvas.width / 2;
        mouseRef.current.y = canvas.height / 2;

        const particles: Particle[] = [];
        particlesRef.current = particles;

        /* --------------------
           Event handlers
        -------------------- */

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current.x = e.clientX;
            mouseRef.current.y = e.clientY;
        };

        const handleClick = (e: MouseEvent) => {
            particles.forEach((p) => {
                const dx = e.clientX - p.x;
                const dy = e.clientY - p.y;
                const angle = Math.atan2(dy, dx);

                p.vx -= Math.cos(angle) * 10;
                p.vy -= Math.sin(angle) * 10;
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        /* --------------------
           Draw text
        -------------------- */

        ctx.fillStyle = "white";
        ctx.font = "bold 200px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const text = "Sidharth Babu";
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        /* --------------------
           Create particles
        -------------------- */

        for (let y = 0; y < canvas.height; y += 6) {
            for (let x = 0; x < canvas.width; x += 6) {
                const index = (y * canvas.width + x) * 4;

                if (imageData.data[index + 3] > 128) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        baseX: x,
                        baseY: y,
                        vx: 0,
                        vy: 0,
                    });
                }
            }
        }

        /* --------------------
           Animation loop
        -------------------- */

        let animationId: number;

        const animate = () => {
            // Paint background FIRST
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "white";

            particles.forEach((p) => {
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouseRef.current.radius) {
                    const angle = Math.atan2(dy, dx);
                    const force =
                        (mouseRef.current.radius - distance) /
                        mouseRef.current.radius;

                    p.vx -= Math.cos(angle) * force;
                    p.vy -= Math.sin(angle) * force;
                }

                p.vx += (p.baseX - p.x) * 0.01;
                p.vy += (p.baseY - p.y) * 0.01;

                p.vx *= 0.92;
                p.vy *= 0.92;

                p.x += p.vx;
                p.y += p.vy;

                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };


        animate();

        /* --------------------
           Cleanup
        -------------------- */

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="pointer-events-none hidden lg:block"
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                maxWidth: "100vw",      // Add this
                maxHeight: "100vh",     // Add this
                overflow: "hidden",     // Add this
            }}
        />
    );
}
