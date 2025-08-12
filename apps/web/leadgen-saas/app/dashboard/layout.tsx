import type React from "react"
import Sidebar from "@/components/dashboard/sidebar"
import Header from "@/components/dashboard/header"
import InspectorPanel from "@/components/dashboard/inspector-panel"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-dark flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:mr-80">
        <Header />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>

      {/* Inspector Panel - Hidden on mobile */}
      <div className="hidden lg:block">
        <InspectorPanel />
      </div>
    </div>
  )
}
