"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { translations } from "@/lib/i18n/translations"
import { SoundCloudPlayer } from "@/components/soundcloud-player"
import { ProfileDialog } from "@/components/profile-dialog"
import { SocialLinks } from "@/components/social-links"
import { Music2, Sparkles, Globe2, User, Hand } from "lucide-react"
import Script from "next/script"
import { useState, useRef } from "react"
import Image from "next/image"
import { LanguageSwitcherNew } from "@/components/language-switcher-new"
import { DJHansYouTube } from "@/components/dj-hans-youtube"

const themes = {
  white: {
    bg: "bg-gradient-to-br from-background via-background to-secondary/20",
    text: "text-foreground",
    heading: "text-foreground",
    muted: "text-muted-foreground",
    tagBg: "bg-secondary",
    tagText: "text-foreground",
    border: "border-border",
    iconColor: "text-foreground",
    accent: "text-blue-500",
  },
  black: {
    bg: "bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950",
    text: "text-gray-100",
    heading: "text-white",
    muted: "text-gray-400",
    tagBg: "bg-gray-800",
    tagText: "text-gray-100",
    border: "border-gray-700",
    iconColor: "text-gray-100",
    accent: "text-blue-500",
  },
  cool: {
    bg: "bg-gradient-to-br from-blue-950 via-purple-950 to-indigo-950",
    text: "text-blue-50",
    heading: "text-white",
    muted: "text-blue-200",
    tagBg: "bg-blue-900/50",
    tagText: "text-blue-50",
    border: "border-blue-800",
    iconColor: "text-blue-100",
    accent: "text-blue-50",
  },
  warm: {
    bg: "bg-gradient-to-br from-orange-950 via-rose-950 to-pink-950",
    text: "text-orange-50",
    heading: "text-white",
    muted: "text-orange-200",
    tagBg: "bg-orange-900/50",
    tagText: "text-orange-50",
    border: "border-orange-800",
    iconColor: "text-orange-100",
    accent: "text-orange-50",
  },
  ocean: {
    bg: "bg-gradient-to-br from-cyan-950 via-teal-950 to-blue-950",
    text: "text-cyan-50",
    heading: "text-white",
    muted: "text-cyan-200",
    tagBg: "bg-cyan-900/50",
    tagText: "text-cyan-50",
    border: "border-cyan-800",
    iconColor: "text-cyan-100",
    accent: "text-cyan-50",
  },
  sunset: {
    bg: "bg-gradient-to-br from-yellow-950 via-orange-950 to-red-950",
    text: "text-yellow-50",
    heading: "text-white",
    muted: "text-yellow-200",
    tagBg: "bg-yellow-900/50",
    tagText: "text-yellow-50",
    border: "border-yellow-800",
    iconColor: "text-yellow-100",
    accent: "text-yellow-50",
  },
  forest: {
    bg: "bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950",
    text: "text-green-50",
    heading: "text-white",
    muted: "text-green-200",
    tagBg: "bg-green-900/50",
    tagText: "text-green-50",
    border: "border-green-800",
    iconColor: "text-green-100",
    accent: "text-green-50",
  },
  lavender: {
    bg: "bg-gradient-to-br from-purple-950 via-violet-950 to-fuchsia-950",
    text: "text-purple-50",
    heading: "text-white",
    muted: "text-purple-200",
    tagBg: "bg-purple-900/50",
    tagText: "text-purple-50",
    border: "border-purple-800",
    iconColor: "text-purple-100",
    accent: "text-purple-50",
  },
  midnight: {
    bg: "bg-gradient-to-br from-indigo-950 via-slate-950 to-gray-950",
    text: "text-indigo-50",
    heading: "text-white",
    muted: "text-indigo-200",
    tagBg: "bg-indigo-900/50",
    tagText: "text-indigo-50",
    border: "border-indigo-800",
    iconColor: "text-indigo-100",
    accent: "text-indigo-50",
  },
  rose: {
    bg: "bg-gradient-to-br from-pink-950 via-rose-950 to-red-950",
    text: "text-pink-50",
    heading: "text-white",
    muted: "text-pink-200",
    tagBg: "bg-pink-900/50",
    tagText: "text-pink-50",
    border: "border-pink-800",
    iconColor: "text-pink-100",
    accent: "text-pink-50",
  },
}

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language] || translations.en
  const [isChatVisible, setIsChatVisible] = useState(false)
  const [bgTheme, setBgTheme] = useState<keyof typeof themes>("black")
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const albumRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const scrollToAlbum = (albumKey: string) => {
    const element = albumRefs.current[albumKey]
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const theme = themes[bgTheme]

  const albums = [
    {
      id: "grodo",
      title: t.projectDetails.grado.title,
      trackName: "GRDO",
      image: "/images/grado-cafe.png",
      trackId: "2189780431",
      description: t.projectDetails.grado.description,
      tags: t.projectDetails.grado.tags,
      href: "https://example.com/grodo",
    },
    {
      id: "gazuaaa1",
      title: t.projectDetails.gazuaaa1.title,
      trackName: "Crazy GAZUAAA",
      image:
        "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9480763%2D%2D6831C73E%2D1D7A%2D41B7%2D9B4C3DBE999FE3EE%2D%2D0%2D%2D3282576%2D%2Dcrazy.jpg",
      trackId: "2170261581",
      description: t.projectDetails.gazuaaa1.description,
      tags: t.projectDetails.gazuaaa1.tags,
      href: "https://example.com/gazuaaa1",
    },
    {
      id: "tranceBegins",
      title: "Don't Cry My Tango",
      trackName: "Don't Cry My Tango",
      image:
        "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9480763%2D%2DA445B986%2DC2F7%2D45C2%2DA2461136682B6D2B%2D%2Dmod%2D1758174794.jpg",
      trackId: "2172437724",
      description: t.projectDetails.tranceBegins.description,
      tags: t.projectDetails.tranceBegins.tags,
      href: "https://example.com/tranceBegins",
    },
    {
      id: "fists",
      title: t.projectDetails.fists.title,
      trackName: "As Fists Ignite the Cry of Strings",
      image:
        "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9480763%2D%2D1BB94541%2DB96F%2D4ADF%2DA23D309051E6A02E%2D%2D0%2D%2D14970916%2D%2D3.jpg",
      trackId: "2100070290",
      description: t.projectDetails.fists.description,
      tags: t.projectDetails.fists.tags,
      href: "https://example.com/fists",
    },
    {
      id: "gazuaaa2",
      title: t.projectDetails.gazuaaa2.title,
      trackName: "Party GAZUAAA",
      image:
        "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9480763%2D%2D529CDDA1%2DB4D6%2D49B9%2D80BFD8126BD85E74%2D%2D0%2D%2D1720166%2D%2Dgeneratedimage86a0aeae1a7649808cf648fea3e59b35.jpg",
      trackId: "2170004163",
      description: t.projectDetails.gazuaaa2.description,
      tags: t.projectDetails.gazuaaa2.tags,
      href: "https://example.com/gazuaaa2",
    },
    {
      id: "shySky",
      title: t.projectDetails.shySky.title,
      trackName: "Seidei Jenn's Heaven",
      image:
        "https://s3.amazonaws.com/gather.fandalism.com/800x800%2D9480763%2D%2D4707E1B3%2D0590%2D4444%2D910E9508189FE950%2D%2Dmod%2D1748333599.jpg",
      trackId: "2090590266",
      description: t.projectDetails.shySky.description,
      tags: t.projectDetails.shySky.tags,
      href: "https://example.com/shySky",
    },
  ]

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2">
        {(Object.keys(themes) as Array<keyof typeof themes>).map((themeKey) => (
          <button
            key={themeKey}
            onClick={() => setBgTheme(themeKey)}
            className={`w-4 h-4 rounded-full transition-all hover:scale-110 ${
              bgTheme === themeKey ? "ring-1 ring-foreground ring-offset-1 ring-offset-background" : ""
            }`}
            style={{
              background:
                themeKey === "white"
                  ? "#ffffff"
                  : themeKey === "black"
                    ? "#000000"
                    : themeKey === "cool"
                      ? "linear-gradient(135deg, #1e3a8a, #581c87)"
                      : themeKey === "warm"
                        ? "linear-gradient(135deg, #9a3412, #881337)"
                        : themeKey === "ocean"
                          ? "linear-gradient(135deg, #164e63, #1e40af)"
                          : themeKey === "sunset"
                            ? "linear-gradient(135deg, #854d0e, #991b1b)"
                            : themeKey === "forest"
                              ? "linear-gradient(135deg, #14532d, #134e4a)"
                              : themeKey === "lavender"
                                ? "linear-gradient(135deg, #581c87, #86198f)"
                                : themeKey === "midnight"
                                  ? "linear-gradient(135deg, #312e81, #1e293b)"
                                  : "linear-gradient(135deg, #831843, #991b1b)",
            }}
            title={themeKey}
            aria-label={`${themeKey} theme`}
          />
        ))}
      </div>

      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcherNew />
      </div>

      <div className="container mx-auto px-4 py-20 pt-28 pb-40">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Sidebar */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 sm:gap-5">
                <div className="relative flex-shrink-0">
                  <div className="absolute -inset-6 sm:-inset-8 bg-white/30 rounded-full blur-md animate-[pulse_2s_ease-in-out_infinite]" />

                  {/* Ring layer - 2mm larger than photo */}
                  <div className="absolute -inset-[2px] bg-gradient-to-r from-yellow-300/50 via-white/40 to-yellow-200/50 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />

                  <div className="absolute -top-4 -right-6 animate-bounce flex items-center gap-1">
                    <div className="relative">
                      <Hand
                        className="h-6 w-6 sm:h-7 sm:w-7 text-orange-400 -rotate-[45deg]"
                        strokeWidth={2.5}
                        fill="currentColor"
                      />
                      <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-md" />
                    </div>
                    <span className={`text-xs ${theme.muted} font-medium whitespace-nowrap`}>Touch!</span>
                  </div>

                  {/* Profile photo button */}
                  <button
                    onClick={() => {
                      console.log("[v0] Chat toggle clicked, isChatVisible:", isChatVisible)
                      setIsChatVisible(!isChatVisible)
                    }}
                    className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    title={isChatVisible ? "Hide Chat" : "Show Chat"}
                  >
                    <Image
                      src="/images/e1-84-8e-e1-85-ac-e1-84-80-e1-85-b3-e1-86-ab-20-e1-84-89-e1-85-a1-e1-84-8c-e1-85-b5-e1-86-ab-20-e1-84-87-e1-85-a9-e1-84-80-e1-85-b5.jpeg"
                      alt="Hans17 Profile"
                      fill
                      className="object-cover"
                    />
                  </button>
                </div>
                <h1
                  className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent italic flex-shrink-0 ml-2`}
                  style={{
                    fontFamily: "var(--font-brush)",
                    letterSpacing: "0.05em",
                    fontWeight: 350,
                    transform: "skewX(-8deg)",
                    textShadow: "2px 2px 0px rgba(255,165,0,0.1), -1px -1px 0px rgba(255,200,50,0.1)",
                  }}
                >
                  Hans17
                </h1>
              </div>
              <p className={`text-xl sm:text-2xl font-semibold ${theme.muted}`}>{t.tagline}</p>
              <p className={`text-base sm:text-lg leading-relaxed ${theme.text}`}>{t.description}</p>
            </div>

            {/* Expertise */}
            <div className="space-y-3">
              <h3 className={`text-sm font-semibold ${theme.muted} uppercase tracking-wider`}>{t.expertise}</h3>
              <div className="flex flex-wrap gap-2">
                <span
                  className={`px-4 py-2 ${theme.tagBg} ${theme.tagText} rounded-full text-sm font-medium flex items-center gap-2`}
                >
                  <Music2 className="h-4 w-4" />
                  {t.expertiseAreas.music}
                </span>
                <span
                  className={`px-4 py-2 ${theme.tagBg} ${theme.tagText} rounded-full text-sm font-medium flex items-center gap-2`}
                >
                  <Sparkles className="h-4 w-4" />
                  {t.expertiseAreas.ai}
                </span>
                <span
                  className={`px-4 py-2 ${theme.tagBg} ${theme.tagText} rounded-full text-sm font-medium flex items-center gap-2`}
                >
                  <Globe2 className="h-4 w-4" />
                  {t.expertiseAreas.languages}
                </span>
                <button
                  onClick={() => setIsProfileOpen(true)}
                  className={`px-4 py-2 ${theme.tagBg} ${theme.tagText} rounded-full text-sm font-medium flex items-center gap-2 hover:opacity-80 transition-opacity`}
                >
                  <User className="h-4 w-4" />
                  {t.aboutHans17}
                </button>
              </div>
            </div>

            {/* Music Video */}
            <section className="space-y-6">
              <h2 className={`text-3xl font-bold ${theme.heading}`}>Live DJ Stream (Every Tuesday, 8pm)</h2>
              <a href="https://www.youtube.com/@hans17kor" target="_blank" rel="noopener noreferrer" className="block">
                <div
                  className={`aspect-video rounded-lg overflow-hidden ${theme.tagBg} relative cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/u1yxK6YXM84?si=HmXS3o_twXHkb12I"
                    title="Live DJ Stream"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </a>
              <p className={`text-sm ${theme.muted} text-center`}>Have A Nice Symphony17 (Hans17)</p>
            </section>

            {/* DJ Hans17 */}
            <div className="space-y-4">
              <h3 className={`text-2xl font-bold ${theme.heading}`}>DJ Hans17</h3>
              <div className="rounded-lg overflow-hidden">
                <DJHansYouTube />
              </div>
            </div>

            {/* Influences */}
            <div className="space-y-3">
              <h3 className={`text-sm font-semibold ${theme.muted} uppercase tracking-wider`}>{t.influences}</h3>
              <p className={`text-sm leading-relaxed ${theme.text}`}>{t.influencedArtists}</p>
            </div>

            {/* Quote */}
            <blockquote className={`border-l-4 border-primary pl-4 italic text-lg ${theme.muted}`}>
              {t.quote.split("\n").map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </blockquote>
          </div>

          {/* Right Content Area */}
          <div className="space-y-12">
            {/* AI Voice Project */}
            <div
              ref={(el) => {
                albumRefs.current["aiVoice"] = el
              }}
              className="space-y-3 scroll-mt-20"
            >
              <h3 className={`text-xl font-semibold ${theme.heading}`}>[AI Voice Engineering] - Shin HaeCHul Voice</h3>
              <p className={`text-sm ${theme.muted}`}>{t.projectDetails.aiVoice.description}</p>
              <div className="flex flex-wrap gap-2">
                {t.projectDetails.aiVoice.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 ${theme.tagBg} ${theme.tagText} rounded-full text-xs`}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://imnews.imbc.com/replay/2025/nwdesk/article/6769365_36799.html"
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 ${theme.tagBg} ${theme.text} rounded-lg hover:opacity-80 transition-opacity text-sm font-medium`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                MBC 뉴스 기사 보기
              </a>
              <div className={`aspect-video rounded-lg overflow-hidden ${theme.tagBg} relative`}>
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/nz2BsM7xmU4?autoplay=1&mute=1&loop=1&playlist=nz2BsM7xmU4"
                  title="Shin Hae-chul AI Voice Restoration"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className={`text-sm ${theme.text}`}>biginter.ai@gmail.com</p>
            </div>

            {/* Recent Releases */}
            <section className="space-y-6">
              <h2 className={`text-3xl font-bold ${theme.heading}`}>Recents Releases</h2>
              <div className="space-y-8">
                {albums.slice(0, 3).map((album) => (
                  <div
                    key={album.id}
                    ref={(el) => {
                      albumRefs.current[album.id] = el
                    }}
                    className="space-y-3 scroll-mt-20"
                  >
                    <h3 className={`text-xl font-semibold ${theme.heading}`}>{album.title}</h3>
                    <p className={`text-sm ${theme.muted}`}>{album.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {album.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 ${theme.tagBg} ${theme.tagText} rounded-full text-xs`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <SoundCloudPlayer trackId={album.trackId} autoPlay={false} isFirstTrack={false} />
                  </div>
                ))}
              </div>
            </section>

            {/* Best Hits */}
            <section className="space-y-6">
              <h2 className={`text-3xl font-bold ${theme.heading}`}>Best Hits</h2>
              <div className="space-y-8">
                {albums.slice(3, 7).map((album) => (
                  <div
                    key={album.id}
                    ref={(el) => {
                      albumRefs.current[album.id] = el
                    }}
                    className="space-y-3 scroll-mt-20"
                  >
                    <h3 className={`text-xl font-semibold ${theme.heading}`}>{album.title}</h3>
                    <p className={`text-sm ${theme.muted}`}>{album.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {album.tags.map((tag) => (
                        <span key={tag} className={`px-3 py-1 ${theme.tagBg} ${theme.tagText} rounded-full text-xs`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <SoundCloudPlayer trackId={album.trackId} autoPlay={false} isFirstTrack={false} />
                  </div>
                ))}
              </div>
            </section>

            {/* Albums Section */}
            <section className="space-y-6">
              <h2 className={`text-3xl font-bold ${theme.heading}`}>Albums</h2>
              <div className="grid grid-cols-2 gap-6">
                {albums.map((album) => (
                  <a key={album.id} href={album.href} target="_blank" rel="noopener noreferrer" className="block group">
                    <div className="aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
                      <Image
                        src={album.image || "/placeholder.svg"}
                        alt={album.title}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          {/* <div className="max-w-md mx-auto lg:mx-0">
            <div className="p-6 rounded-2xl border-2 border-white/20 bg-black/20 backdrop-blur-sm shadow-xl">
              <ContactForm />
            </div>
          </div> */}

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {/* Home QR Code */}
              <a
                href="https://guybybo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="relative w-[220px] h-[220px] bg-white rounded-2xl p-5 shadow-2xl ring-4 ring-white/20 group-hover:scale-105 transition-transform">
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=https://guybybo.vercel.app"
                    alt="QR Code for guybybo.vercel.app"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className={`text-sm ${theme.muted} font-medium`}>home</span>
              </a>

              {/* Contact vCard QR Code */}
              <a
                href="data:text/vcard;charset=utf-8,BEGIN:VCARD%0AVERSION:3.0%0AFN:Hans17%0ATEL:+821027784720%0AEMAIL:biginter.ai@gmail.com%0AEND:VCARD"
                download="Hans17.vcf"
                className="flex flex-col items-center gap-3 cursor-pointer group"
              >
                <div className="relative w-[220px] h-[220px] bg-white rounded-2xl p-5 shadow-2xl ring-4 ring-white/20 group-hover:scale-105 transition-transform">
                  <Image
                    src="https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=BEGIN:VCARD%0AVERSION:3.0%0AFN:Hans17%0ATEL:+821027784720%0AEMAIL:biginter.ai@gmail.com%0AEND:VCARD"
                    alt="Contact vCard QR Code"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <span className={`text-sm ${theme.muted} font-medium`}>contact</span>
              </a>
            </div>
            <div className="flex flex-col items-center gap-2 mt-6">
              <p className={`text-xs ${theme.muted} italic`}>I love you~, Keep in touch~</p>
              <a
                href="mailto:biginter.ai@gmail.com"
                className={`text-lg ${theme.accent} hover:underline font-medium transition-colors`}
              >
                biginter.ai@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Follow me section at bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-black/80 via-black/70 to-transparent backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center gap-3 scale-[0.84] origin-bottom">
              <h3 className={`text-sm font-semibold ${theme.muted} uppercase tracking-wider`}>{t.followMe}</h3>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <ProfileDialog open={isProfileOpen} onOpenChange={setIsProfileOpen} />

      {isChatVisible && (
        <>
          <elevenlabs-convai agent-id="agent_4201k9baaxexe95bbbvfq8rtxyzz"></elevenlabs-convai>
          {console.log("[v0] ElevenLabs widget mounted")}
        </>
      )}
      <Script src="https://unpkg.com/@elevenlabs/convai-widget-embed" strategy="lazyOnload" type="text/javascript" />
    </div>
  )
}
