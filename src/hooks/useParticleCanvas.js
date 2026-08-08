import { useEffect } from 'react'

/**
 * useParticleCanvas
 * Draws a network of floating particles with connecting lines —
 * matching the HTML version's visible floating network effect.
 */
export function useParticleCanvas(canvasRef) {
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        let animationId
        let particles = []

        function resize() {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }

        function createParticles() {
            // More particles, bigger, more opaque — matches the HTML version
            const count = Math.min(110, Math.floor((canvas.width * canvas.height) / 9000))
            particles = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 2.2 + 0.8,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                alpha: Math.random() * 0.55 + 0.3,  // 0.3 – 0.85 (much more visible)
            }))
        }

        const MAX_DIST = 140  // connect particles within this distance

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // ── Draw connecting lines first (below particles) ──
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x
                    const dy = particles[i].y - particles[j].y
                    const dist = Math.sqrt(dx * dx + dy * dy)

                    if (dist < MAX_DIST) {
                        const opacity = (1 - dist / MAX_DIST) * 0.45 // visible lines
                        ctx.beginPath()
                        ctx.moveTo(particles[i].x, particles[i].y)
                        ctx.lineTo(particles[j].x, particles[j].y)
                        ctx.strokeStyle = `rgba(94, 206, 196, ${opacity})`
                        ctx.lineWidth = 0.9
                        ctx.stroke()
                    }
                }
            }

            // ── Draw particles ──
            particles.forEach((p) => {
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(94, 206, 196, ${p.alpha})`
                ctx.fill()

                // Move
                p.x += p.vx
                p.y += p.vy
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1
            })

            animationId = requestAnimationFrame(draw)
        }

        function onResize() { resize(); createParticles() }

        resize()
        createParticles()
        draw()
        window.addEventListener('resize', onResize, { passive: true })

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', onResize)
        }
    }, [canvasRef])
}