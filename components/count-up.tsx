"use client"

import { useEffect, useState, useRef } from "react"
import { useInView } from "framer-motion"

interface CountUpProps {
    end: number
    start?: number
    duration?: number
    decimals?: number
    prefix?: string
    suffix?: string
}

export function CountUp({ end, start = 0, duration = 2, decimals = 0, prefix = "", suffix = "" }: CountUpProps) {
    const [count, setCount] = useState(start)
    const countRef = useRef<HTMLSpanElement>(null)
    const isInView = useInView(countRef, { once: true, margin: "-100px" })
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        if (!isInView || hasAnimated) return

        let startTime: number
        let animationFrame: number

        const easeOutQuad = (t: number) => t * (2 - t)

        const updateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            const easedProgress = easeOutQuad(progress)
            const currentCount = start + (end - start) * easedProgress

            setCount(currentCount)

            if (progress < 1) {
                animationFrame = requestAnimationFrame(updateCount)
            } else {
                setHasAnimated(true)
            }
        }

        animationFrame = requestAnimationFrame(updateCount)

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame)
            }
        }
    }, [isInView, end, start, duration, hasAnimated])

    const formattedCount = count.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    return (
        <span ref={countRef}>
      {prefix}
            {formattedCount}
            {suffix}
    </span>
    )
}
