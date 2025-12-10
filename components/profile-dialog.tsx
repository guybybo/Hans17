"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/lib/i18n/language-context"
import { profileTranslations } from "@/lib/i18n/profile-translations"

interface ProfileDialogProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function ProfileDialog({ open, onOpenChange }: ProfileDialogProps) {
  const { language } = useLanguage()
  const t = profileTranslations[language] || profileTranslations.en

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {/* Remove DialogTrigger as it's no longer needed for external control */}
      <DialogContent className="sm:max-w-4xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{t.title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-100px)] pr-4">
          <div className="space-y-6">
            {/* Introduction */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.introduction.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.introduction.content}</p>
            </section>

            {/* AI Expertise */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.aiExpertise.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.aiExpertise.content}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.aiExpertise.shinProject}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.aiExpertise.philosophy}</p>
              <div className="space-y-1">
                <a
                  href="https://imnews.imbc.com/replay/2025/nwdesk/article/6769365_36799.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
                >
                  MBC News Article
                </a>
                <a
                  href="https://m.youtube.com/watch?v=hkeaZfnbILg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline block"
                >
                  YouTube Video
                </a>
              </div>
            </section>

            {/* Music Career */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.musicCareer.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.musicCareer.content}</p>
            </section>

            {/* Musical Style */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.musicalStyle.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.musicalStyle.genre}</p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.musicalStyle.philosophy}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.musicalStyle.influences}</p>
            </section>

            {/* Online Activities */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.onlineActivities.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                {t.sections.onlineActivities.youtube}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">
                {t.sections.onlineActivities.soundcloud}
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.onlineActivities.facebook}</p>
            </section>

            {/* Location and Languages */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.location.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.location.content}</p>
            </section>

            {/* Musical Goals */}
            <section>
              <h3 className="text-xl font-bold mb-3">{t.sections.goals.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground mb-3">{t.sections.goals.philosophy}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{t.sections.goals.message}</p>
            </section>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
