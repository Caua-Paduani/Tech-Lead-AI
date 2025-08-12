"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import {
  Users,
  MessageSquare,
  TrendingUp,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Phone,
  Linkedin,
} from "lucide-react"
import { mockAnalytics } from "@/lib/mock-data"

const COLORS = ["#FF0044", "#00D4FF", "#FFD700", "#32CD32", "#FF6347"]

export default function AnalyticsPage() {
  const { overview, chartData } = mockAnalytics

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold font-display text-white">Analytics</h1>
        <p className="text-muted-1 mt-1">Track your outreach performance and optimize your campaigns</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overview.totalLeads.toLocaleString()}</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />+{overview.trends.leads}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Messages Sent</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overview.messagesSent.toLocaleString()}</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />+{overview.trends.messages}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overview.responseRate}%</div>
            <div className="flex items-center text-xs text-red-400">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              {overview.trends.responseRate}% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">{overview.conversions}</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />+{overview.trends.conversions}% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Messages Over Time */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Messages Sent Over Time</CardTitle>
            <CardDescription className="text-muted-1">Daily message volume by channel</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData.messagesOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="date" stroke="#98A0B2" fontSize={12} />
                <YAxis stroke="#98A0B2" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F1724",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line type="monotone" dataKey="email" stroke="#00D4FF" strokeWidth={2} />
                <Line type="monotone" dataKey="whatsapp" stroke="#32CD32" strokeWidth={2} />
                <Line type="monotone" dataKey="total" stroke="#FF0044" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Response Rates by Channel */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Response Rates by Channel</CardTitle>
            <CardDescription className="text-muted-1">Performance comparison across channels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData.responseRates}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="channel" stroke="#98A0B2" fontSize={12} />
                <YAxis stroke="#98A0B2" fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0F1724",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="rate" fill="#FF0044" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conversion Funnel */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Conversion Funnel</CardTitle>
            <CardDescription className="text-muted-1">Lead journey from capture to conversion</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.conversionFunnel.map((stage, index) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">{stage.stage}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-white font-bold">{stage.count.toLocaleString()}</span>
                      <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 text-xs">
                        {stage.percentage}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={stage.percentage} className="h-3 bg-white/10" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Campaign Performance */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Campaign Performance</CardTitle>
            <CardDescription className="text-muted-1">Top performing campaigns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {chartData.campaignPerformance.map((campaign, index) => (
                <div
                  key={campaign.name}
                  className="p-4 rounded-lg border border-white/10 hover:border-brand-red/30 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-white">{campaign.name}</h4>
                    <Badge className="bg-green-500/20 text-green-400 border-green-500/30 text-xs">
                      {campaign.rate}%
                    </Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-white font-medium">{campaign.sent}</div>
                      <div className="text-muted-1 text-xs">Sent</div>
                    </div>
                    <div>
                      <div className="text-white font-medium">{campaign.responses}</div>
                      <div className="text-muted-1 text-xs">Responses</div>
                    </div>
                    <div>
                      <div className="text-white font-medium">{campaign.conversions}</div>
                      <div className="text-muted-1 text-xs">Conversions</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Channel Breakdown */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Channel Performance Breakdown</CardTitle>
          <CardDescription className="text-muted-1">Detailed metrics by communication channel</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {chartData.responseRates.map((channel, index) => {
              const getChannelIcon = (name: string) => {
                switch (name.toLowerCase()) {
                  case "email":
                    return <Mail className="w-5 h-5" />
                  case "whatsapp":
                    return <Phone className="w-5 h-5" />
                  case "linkedin":
                    return <Linkedin className="w-5 h-5" />
                  default:
                    return <MessageSquare className="w-5 h-5" />
                }
              }

              return (
                <div key={channel.channel} className="text-center p-6 rounded-lg border border-white/10">
                  <div className="w-12 h-12 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-brand-red">{getChannelIcon(channel.channel)}</div>
                  </div>
                  <h3 className="text-white font-semibold mb-2">{channel.channel}</h3>
                  <div className="space-y-2">
                    <div>
                      <div className="text-2xl font-bold text-white">{channel.rate}%</div>
                      <div className="text-xs text-muted-1">Response Rate</div>
                    </div>
                    <div className="text-sm text-muted-1">
                      {channel.responses} responses from {channel.sent} sent
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
