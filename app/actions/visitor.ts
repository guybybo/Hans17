"use server"

import { createClient } from "@/lib/supabase/server"

interface VisitorStats {
  today: number
  total: number
}

export async function trackVisitor(): Promise<{ success: boolean }> {
  try {
    const supabase = await createClient()
    const today = new Date().toISOString().split("T")[0]

    const { data: existingStats, error: fetchError } = await supabase
      .from("visitor_stats")
      .select("*")
      .eq("visit_date", today)
      .maybeSingle()

    if (fetchError) {
      console.error("[v0] Error fetching visitor stats:", fetchError)
      throw fetchError
    }

    if (existingStats) {
      // Update existing record
      const { error: updateError } = await supabase
        .from("visitor_stats")
        .update({
          visitor_count: existingStats.visitor_count + 1,
          updated_at: new Date().toISOString(),
        })
        .eq("visit_date", today)

      if (updateError) {
        console.error("[v0] Error updating visitor stats:", updateError)
        throw updateError
      }
    } else {
      // Create new record for today
      const { error: insertError } = await supabase.from("visitor_stats").insert({
        visit_date: today,
        visitor_count: 1,
      })

      if (insertError) {
        console.error("[v0] Error inserting visitor stats:", insertError)
        throw insertError
      }
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Visitor tracking error:", error)
    return { success: false }
  }
}

export async function getVisitorStats(): Promise<VisitorStats> {
  try {
    const supabase = await createClient()
    const today = new Date().toISOString().split("T")[0]

    const { data: todayStats } = await supabase
      .from("visitor_stats")
      .select("visitor_count")
      .eq("visit_date", today)
      .maybeSingle()

    // Get total visitor count (sum of all days)
    const { data: allStats } = await supabase.from("visitor_stats").select("visitor_count")

    const totalVisitors = allStats?.reduce((sum, stat) => sum + stat.visitor_count, 0) || 0
    const todayVisitors = todayStats?.visitor_count || 0

    return {
      today: todayVisitors,
      total: totalVisitors,
    }
  } catch (error) {
    console.error("[v0] Error fetching visitor stats:", error)
    return { today: 0, total: 0 }
  }
}
