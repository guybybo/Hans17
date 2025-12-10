"use client"

import { useEffect } from "react"

export function BuskerHansTikTok() {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.tiktok.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="space-y-4">
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@hans_jenn/video/7572470457455201544"
        data-video-id="7572470457455201544"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.tiktok.com/@hans_jenn/video/7572470457455201544?refer=embed"
          >
            @hans_jenn
          </a>
        </section>
      </blockquote>
    </div>
  )
}
