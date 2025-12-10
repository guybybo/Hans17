"use client"

export function DJHansYouTube() {
  return (
    <div className="space-y-4">
      <iframe
        width="325"
        height="578"
        src="https://www.youtube.com/embed/EF8btClO_QM"
        title="YouTube Shorts"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg max-w-full"
        style={{ maxWidth: "325px" }}
      />
    </div>
  )
}
