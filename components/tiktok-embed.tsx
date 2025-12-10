"use client"

import { useEffect } from "react"

export function TikTokEmbed() {
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
        cite="https://www.tiktok.com/@hans_jenn/video/7549207750203477266"
        data-video-id="7549207750203477266"
        style={{ maxWidth: "605px", minWidth: "325px" }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@hans_jenn/video/7549207750203477266?refer=embed"
            rel="noreferrer"
          >
            @hans_jenn
          </a>
        </section>
      </blockquote>
    </div>
  )
}
