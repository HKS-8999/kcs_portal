"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface WatermarkConfig {
    showWatermark: boolean
    watermarkText?: string
    watermarkImage?: string
}

export default function Watermark() {
    const [config, setConfig] = useState<WatermarkConfig>({
        showWatermark: false,
    })
    const [imageLoaded, setImageLoaded] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const REMOTE_CONFIG_URL = "https://kcs-config.vercel.app/config.json"

    useEffect(() => {
        const loadConfig = async () => {
            try {
                setLoading(true)
                setError(null)

                const response = await fetch(REMOTE_CONFIG_URL, {
                    cache: "no-cache",
                    headers: {
                        Accept: "application/json",
                    },
                })

                if (!response.ok) {
                    throw new Error(`Failed to fetch config: ${response.status} ${response.statusText}`)
                }

                const remoteConfig = await response.json()

                setConfig(remoteConfig)
            } catch (error) {
                setError(`Config loading error: ${error instanceof Error ? error.message : "Unknown error"}`)
                // Use default config as fallback
            } finally {
                setLoading(false)
            }
        }

        loadConfig()

        // Set up periodic refresh every 2 minutes to check for config updates
        const interval = setInterval(loadConfig, 2 * 60 * 1000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        // Preload the watermark image when config changes
        if (config.showWatermark && config.watermarkImage && !loading) {
            setImageLoaded(false)
            const img = new window.Image()
            img.crossOrigin = "anonymous"
            img.onload = () => {
                setImageLoaded(true)
            }
            img.onerror = () => {
                setImageLoaded(false)
            }
            // Handle both absolute URLs and relative paths
            const imageUrl = config.watermarkImage.startsWith("http")
                ? config.watermarkImage
                : `https://kcs-config.vercel.app${config.watermarkImage}`
            img.src = imageUrl
        }
    }, [config.showWatermark, config.watermarkImage, loading])

    // Don't render if watermark is disabled or still loading
    if (loading || !config.showWatermark) {
        return null
    }

    // If we have an image and it's loaded, show image watermark
    if (config.watermarkImage && imageLoaded) {
        const imageUrl = config.watermarkImage.startsWith("http")
            ? config.watermarkImage
            : `https://kcs-config.vercel.app${config.watermarkImage}`

        return (
            <>
                <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none opacity-30">
                    <div className="w-32 h-16 relative">
                        <Image
                            src={imageUrl || "/placeholder.svg"}
                            alt="Watermark"
                            fill
                            className="object-contain"
                            priority={false}
                            unoptimized={true}
                        />
                    </div>
                </div>

                {/* Debug info in development */}
                {/* Debug info in development */}
            </>
        )
    }


    // Show error in development if watermark is enabled but no content
    return (
        <>
            {process.env.NODE_ENV === "development" && error && (
                <div className="fixed top-0 left-0 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded m-4 text-xs z-50 max-w-md">
                    <strong>Watermark Error:</strong> {error}
                </div>
            )}
        </>
    )
}
