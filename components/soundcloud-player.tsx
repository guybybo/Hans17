"use client"

import { useEffect, useRef, useState } from "react"

interface SoundCloudPlayerProps {
  trackId: string
  autoPlay?: boolean
  isFirstTrack?: boolean
  onPlay?: () => void
  onPause?: () => void
}

export function SoundCloudPlayer({
  trackId,
  autoPlay = false,
  isFirstTrack = false,
  onPlay,
  onPause,
}: SoundCloudPlayerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [shouldAutoPlay, setShouldAutoPlay] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const visibilityTimerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (isFirstTrack) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
            setShouldAutoPlay(true)
            if (onPlay) {
              onPlay()
            }
          }
        },
        { threshold: 0.5 },
      )

      if (containerRef.current) {
        observer.observe(containerRef.current)
      }

      return () => observer.disconnect()
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is now visible in center
          if (!isVisible) {
            setIsVisible(true)
          }

          // Start 3.5 second timer
          if (!visibilityTimerRef.current && !shouldAutoPlay) {
            visibilityTimerRef.current = setTimeout(() => {
              setShouldAutoPlay(true)
              if (onPlay) {
                onPlay()
              }
            }, 3500) // 3.5 seconds
          }
        } else {
          // Element left the viewport center, reset timer
          if (visibilityTimerRef.current) {
            clearTimeout(visibilityTimerRef.current)
            visibilityTimerRef.current = null
          }
        }
      },
      { threshold: 0.5 }, // At least 50% visible in viewport center
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      observer.disconnect()
      if (visibilityTimerRef.current) {
        clearTimeout(visibilityTimerRef.current)
      }
    }
  }, [isVisible, shouldAutoPlay, isFirstTrack, onPlay])

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === "https://w.soundcloud.com") {
        try {
          const data = JSON.parse(event.data)
          if (data.method === "pause" && onPause) {
            onPause()
          } else if (data.method === "play" && onPlay) {
            onPlay()
          }
        } catch (e) {
          // Ignore parse errors
        }
      }
    }

    window.addEventListener("message", handleMessage)
    return () => window.removeEventListener("message", handleMessage)
  }, [onPlay, onPause])

  const autoPlayParam = autoPlay && shouldAutoPlay ? "true" : "false"

  return (
    <div ref={containerRef} className="w-full">
      <iframe
        ref={iframeRef}
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A${trackId}&color=%23ff5500&auto_play=${autoPlayParam}&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        className="rounded-lg"
      />
    </div>
  )
}
