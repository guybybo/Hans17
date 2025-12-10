"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import Image from "next/image"

export function CLIDialog() {
  const [copied, setCopied] = useState(false)
  const cliCommand =
    'npx shadcn@latest add "https://v0.app/chat/b/b_OPAo1sgEhjB?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..oyChxd6PTKsLwYFQ.RVh8eTvEs7K35_eo6Mu9NbytCl7V_nGWJH65Cu4eKOnavCzfaoLOey8Xzd0.EO8FPjAXAP-2c7t8sqttwg"'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cliCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E1%84%8E%E1%85%AC%E1%84%80%E1%85%B3%E1%86%AB%20%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB%20%E1%84%87%E1%85%A9%E1%84%80%E1%85%B5-Vlkltng9s7dK4OJv57VgD1Ob5tzRQV.jpeg"
            alt="Hans17"
            fill
            className="object-cover"
          />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Install Hans17 Portfolio Template</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Use this command to install the Hans17 portfolio template in your project:
          </p>
          <div className="relative">
            <pre className="bg-secondary p-4 rounded-lg overflow-x-auto text-sm">
              <code>{cliCommand}</code>
            </pre>
            <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={copyToClipboard}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
