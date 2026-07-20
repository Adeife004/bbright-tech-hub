import { useEffect } from 'react'

/**
 * useParticleCanvas
 * Animates a canvas with floating teal particles + connecting lines.
 * Pass a ref attached to a <canvas> element.
 */
export function useParticleCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationId

        function resize() {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        let particles = []

        function createParticles() {
            const count = Math.min(70, Math.floor((canvas.width * canvas.height) / 18000))
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.6 + 0.4,
                vx: (Math.random() - 0.5) * 0.25,
                vy: (Math.random() - 0.5) * 0.25,
                alpha: Math.random() * 0.5 + 0.15,
            }))
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(94,206,196,${p.alpha})`
                ctx.fill()
            })
            animationId = requestAnimationFrame(draw)
        }

        function onResize() { resize(); createParticles() }

        resize()
        createParticles()
        draw()
        window.addEventListener('resize', onResize)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', onResize)
        }
    }, [canvasRef])
}