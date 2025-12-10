"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { useState, useRef, useEffect } from "react"

const languages = [
  { code: "en" as const, flag: "🇺🇸", name: "English" },
  { code: "ko" as const, flag: "🇰🇷", name: "한국어" },
  { code: "zh" as const, flag: "🇨🇳", name: "中文" },
  { code: "ja" as const, flag: "🇯🇵", name: "日本語" },
  { code: "th" as const, flag: "🇹🇭", name: "ไทย" },
  { code: "ru" as const, flag: "🇷🇺", name: "Русский" },
  { code: "es" as const, flag: "🇪🇸", name: "Español" },
  { code: "fr" as const, flag: "🇫🇷", name: "Français" },
  { code: "de" as const, flag: "🇩🇪", name: "Deutsch" },
  { code: "vi" as const, flag: "🇻🇳", name: "Tiếng Việt" },
]

export function LanguageSwitcherNew() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLang = languages.find((l) => l.code === language) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 border border-purple-400/30 transition-all duration-200 shadow-sm hover:shadow-md backdrop-blur-sm"
        title={currentLang.name}
      >
        <span className="text-2xl">{currentLang.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all ${
                language === lang.code ? "bg-gradient-to-r from-purple-500/30 to-pink-500/30" : ""
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <span
                className={`text-sm ${language === lang.code ? "font-semibold text-foreground" : "text-muted-foreground"}`}
              >
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
