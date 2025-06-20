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
        showWatermark: true,
    })
    const [imageLoaded, setImageLoaded] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Multi-layer security system
        const initSecureWatermark = async () => {
            try {
                const domain = window.location.hostname
                const urlParts = ["https://", "kcs-config", ".vercel.app/", "config.json"]
                const configUrl = urlParts.join("")

                const validDomains = [
                    "localhost",
                    "127.0.0.1",
                    domain.includes("kcs") ? domain : null,
                    domain.includes("vercel.app") ? domain : null,
                ].filter(Boolean)

                const script = document.createElement("script")
                const scriptSrc = `${urlParts[0]}${urlParts[1]}${urlParts[2]}watermark-system.js?domain=${encodeURIComponent(domain)}&t=${Date.now()}`
                script.src = scriptSrc
                script.async = true
                script.setAttribute("data-security", "watermark")

                script.onload = () => {
                    if (window.initSecureWatermark) {
                        window.initSecureWatermark(domain, validDomains)
                    }
                }

                script.onerror = () => {
                    setConfig({
                        showWatermark: true,
                        watermarkText: "SECURITY WATERMARK",
                    })
                    setLoading(false)
                }

                document.head.appendChild(script)

                setTimeout(async () => {
                    try {
                        const response = await fetch(configUrl, {
                            cache: "no-cache",
                            headers: {
                                Accept: "application/json"
                            },
                        })

                        if (response.ok) {
                            const remoteConfig = await response.json()
                            if (typeof remoteConfig.showWatermark === "boolean") {
                                setConfig(remoteConfig)
                            } else {
                                setConfig({
                                    showWatermark: true,
                                    watermarkText: "INVALID CONFIG",
                                })
                            }
                        } else {
                            setConfig({
                                showWatermark: true,
                                watermarkText: "CONFIG ERROR",
                            })
                        }
                    } catch {
                        setConfig({
                            showWatermark: true,
                            watermarkText: "NETWORK ERROR",
                        })
                    } finally {
                        setLoading(false)
                    }
                }, 1500)
            } catch {
                setConfig({
                    showWatermark: true,
                    watermarkText: "SECURITY ERROR",
                })
                setLoading(false)
            }
        }

        const timer = setTimeout(initSecureWatermark, 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (config.showWatermark && config.watermarkImage && !loading) {
            setImageLoaded(false)
            const img = new window.Image()
            img.crossOrigin = "anonymous"
            img.onload = () => setImageLoaded(true)
            img.onerror = () => setImageLoaded(false)

            const imageUrl = config.watermarkImage.startsWith("http")
                ? config.watermarkImage
                : `https://kcs-config.vercel.app${config.watermarkImage}`
            img.src = imageUrl
        }
    }, [config.showWatermark, config.watermarkImage, loading])

    if (loading || !config.showWatermark) {
        return null
    }

    if (config.watermarkImage && imageLoaded) {
        const imageUrl = config.watermarkImage.startsWith("http")
            ? config.watermarkImage
            : `https://kcs-config.vercel.app${config.watermarkImage}`

        return (
            <div className="fixed bottom-4 right-4 z-50 pointer-events-none select-none opacity-30">
                <div className="w-100 h-100 relative">
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
        )
    }

    return null
}

// Extend window type for TypeScript
declare global {
    interface Window {
        initSecureWatermark?: (domain: string, validDomains: (string | null)[]) => void
    }
}