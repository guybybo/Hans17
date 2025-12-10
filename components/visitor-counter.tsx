"use client"

import { useEffect, useState } from "react"
import { trackVisitor, getVisitorStats } from "@/app/actions/visitor"

export function VisitorCounter() {
  const [total, setTotal] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const trackAndFetch = async () => {
      try {
        await trackVisitor()
        const data = await getVisitorStats()
        setTotal(data.total)
      } catch (error) {
        console.error("[v0] Failed to track/fetch visitor stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    trackAndFetch()
  }, [])

  if (isLoading) {
    return <span className="text-[10px] text-gray-500">...</span>
  }

  return <span className="text-[10px] text-white/70 font-medium">{total.toLocaleString()}</span>
}
