"use client"

import { Play, Pause, SkipForward, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MusicPlayerBarProps {
  currentTrack: {
    title: string
    artist: string
    albumKey: string
  } | null
  isPlaying: boolean
  onPlayPause: () => void
  onNext: () => void
  onClose: () => void
  theme: {
    text: string
    heading: string
    tagBg: string
  }
}

export function MusicPlayerBar({ currentTrack, isPlaying, onPlayPause, onNext, onClose, theme }: MusicPlayerBarProps) {
  if (!currentTrack) return null

  return (
    <div
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 ${theme.tagBg} backdrop-blur-md bg-opacity-90 border ${theme.text} rounded-full shadow-lg max-w-md w-full`}
    >
      <div className="px-4 py-2 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Button
            variant="ghost"
            size="icon"
            className="h-7 w-7 flex-shrink-0"
            onClick={onPlayPause}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <div className="text-xs flex-1 min-w-0">
            <p className={`font-semibold ${theme.heading} truncate`}>{currentTrack.title}</p>
            <p className={`${theme.text} opacity-70 truncate`}>{currentTrack.artist}</p>
          </div>
        </div>
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onNext} title="Next Track">
            <SkipForward className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={onClose} title="Close Player">
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
