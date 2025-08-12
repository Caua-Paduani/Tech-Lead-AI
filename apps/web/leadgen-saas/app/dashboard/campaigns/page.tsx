"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Plus,
  MoreHorizontal,
  Play,
  Pause,
  Edit,
  Copy,
  Trash2,
  Users,
  MessageSquare,
  Mail,
  BarChart3,
  Target,
} from "lucide-react"
import { mockCampaigns } from "@/lib/mock-data"
import CampaignBuilder from "@/components/dashboard/campaign-builder"

export default function CampaignsPage() {
  const [showBuilder, setShowBuilder] = useState(false)
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "paused":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "draft":
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case "email":
        return <Mail className="w-4 h-4" />
      case "whatsapp":
        return <MessageSquare className="w-4 h-4" />
      default:
        return <MessageSquare className="w-4 h-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-display text-white">Campaigns</h1>
          <p className="text-muted-1 mt-1">Create and manage your outreach campaigns</p>
        </div>
        <Button onClick={() => setShowBuilder(true)} className="bg-brand-red hover:bg-brand-red-hover neon-glow">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Total Campaigns</CardTitle>
            <Target className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{mockCampaigns.length}</div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Active Campaigns</CardTitle>
            <Play className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {mockCampaigns.filter((c) => c.status === "active").length}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {mockCampaigns.reduce((sum, c) => sum + c.leads_count, 0)}
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Total Responses</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {mockCampaigns.reduce((sum, c) => sum + c.responses, 0)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockCampaigns.map((campaign) => (
          <Card key={campaign.id} className="glass-card border-white/10 hover:border-brand-red/30 transition-colors">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-lg flex items-center justify-center">
                    {getChannelIcon(campaign.channel)}
                  </div>
                  <div>
                    <CardTitle className="text-white">{campaign.name}</CardTitle>
                    <CardDescription className="text-muted-1">{campaign.description}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-surface-1 border-white/10" align="end">
                      <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                        {campaign.status === "active" ? (
                          <>
                            <Pause className="mr-2 h-4 w-4" />
                            Pause
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4" />
                            Start
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">{campaign.leads_count}</div>
                  <div className="text-xs text-muted-1">Leads</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{campaign.messages_sent}</div>
                  <div className="text-xs text-muted-1">Sent</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{campaign.responses}</div>
                  <div className="text-xs text-muted-1">Responses</div>
                </div>
              </div>

              {/* Progress */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-1">Progress</span>
                  <span className="text-white">
                    {Math.round((campaign.messages_sent / campaign.leads_count) * 100)}%
                  </span>
                </div>
                <Progress value={(campaign.messages_sent / campaign.leads_count) * 100} className="h-2 bg-white/10" />
              </div>

              {/* Response Rate */}
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-1">Response Rate</span>
                <span className="text-sm font-medium text-white">
                  {campaign.messages_sent > 0 ? Math.round((campaign.responses / campaign.messages_sent) * 100) : 0}%
                </span>
              </div>

              {/* Steps Preview */}
              <div className="space-y-2">
                <span className="text-sm text-muted-1">Campaign Steps</span>
                <div className="flex space-x-2">
                  {campaign.steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                        step.step_type === "message"
                          ? "bg-brand-red/20 text-brand-red"
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Campaign Builder Modal */}
      {showBuilder && (
        <CampaignBuilder isOpen={showBuilder} onClose={() => setShowBuilder(false)} campaign={selectedCampaign} />
      )}
    </div>
  )
}
