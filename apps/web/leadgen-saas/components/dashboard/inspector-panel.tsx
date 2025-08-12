"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { User, Building, Mail, Phone, Calendar, MessageSquare, ExternalLink, Edit, Trash2 } from "lucide-react"

interface InspectorPanelProps {
  selectedItem?: any
  type?: "lead" | "campaign" | "message"
  className?: string
}

export default function InspectorPanel({ selectedItem, type = "lead", className = "" }: InspectorPanelProps) {
  if (!selectedItem) {
    return (
      <aside className={`w-80 bg-surface-1 border-l border-white/10 p-6 ${className}`}>
        <div className="text-center text-muted-1 mt-20">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-medium text-white mb-2">No item selected</h3>
          <p className="text-sm">Select an item from the list to view details</p>
        </div>
      </aside>
    )
  }

  if (type === "lead") {
    return (
      <aside className={`w-80 bg-surface-1 border-l border-white/10 p-6 overflow-y-auto ${className}`}>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Lead Details</h2>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Profile */}
          <Card className="glass-card border-white/10">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3 mb-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-brand-red text-white">
                    {selectedItem.name
                      ?.split(" ")
                      .map((n: string) => n[0])
                      .join("")
                      .toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-white">{selectedItem.name}</h3>
                  <p className="text-sm text-muted-1">{selectedItem.company}</p>
                </div>
              </div>

              <Badge
                className={`${
                  selectedItem.status === "new"
                    ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                    : selectedItem.status === "contacted"
                      ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                      : selectedItem.status === "qualified"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                }`}
              >
                {selectedItem.status}
              </Badge>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="glass-card border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-base">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-1" />
                <div>
                  <p className="text-sm text-white">{selectedItem.email}</p>
                  <p className="text-xs text-muted-1">Email</p>
                </div>
              </div>

              {selectedItem.phone && (
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-1" />
                  <div>
                    <p className="text-sm text-white">{selectedItem.phone}</p>
                    <p className="text-xs text-muted-1">Phone</p>
                  </div>
                </div>
              )}

              {selectedItem.company && (
                <div className="flex items-center space-x-3">
                  <Building className="w-4 h-4 text-muted-1" />
                  <div>
                    <p className="text-sm text-white">{selectedItem.company}</p>
                    <p className="text-xs text-muted-1">Company</p>
                  </div>
                </div>
              )}

              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-muted-1" />
                <div>
                  <p className="text-sm text-white">{new Date(selectedItem.created_at).toLocaleDateString()}</p>
                  <p className="text-xs text-muted-1">Added</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Message */}
          {selectedItem.message && (
            <Card className="glass-card border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-base">Message</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-1">{selectedItem.message}</p>
              </CardContent>
            </Card>
          )}

          {/* Activity Timeline */}
          <Card className="glass-card border-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="text-white text-base">Activity Timeline</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-brand-red rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-white">Lead captured</p>
                  <p className="text-xs text-muted-1">{new Date(selectedItem.created_at).toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-muted-1 rounded-full mt-2"></div>
                <div>
                  <p className="text-sm text-muted-1">Waiting for outreach</p>
                  <p className="text-xs text-muted-1">No activity yet</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="space-y-3">
            <Button className="w-full bg-brand-red hover:bg-brand-red-hover neon-glow">
              <MessageSquare className="w-4 h-4 mr-2" />
              Send Message
            </Button>
            <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/5 bg-transparent">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Profile
            </Button>
          </div>
        </div>
      </aside>
    )
  }

  return null
}
