"use client"

import { useLanguage } from "@/lib/i18n/language-context"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "th", name: "ไทย", flag: "🇹🇭" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as any)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/90 backdrop-blur-sm border border-border hover:bg-accent transition-colors text-sm font-medium shadow-sm"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="text-foreground">{currentLanguage.name}</span>
        <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute top-full right-0 mt-2 w-40 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg overflow-hidden z-50">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-accent transition-colors ${
                  language === lang.code ? "bg-accent/50" : ""
                }`}
              >
                <span className="text-base">{lang.flag}</span>
                <span className="text-foreground">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
