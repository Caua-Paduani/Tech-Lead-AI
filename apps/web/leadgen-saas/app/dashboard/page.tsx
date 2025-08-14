import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Mail, TrendingUp, Plus, ArrowUpRight, ArrowDownRight, Target } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="p-4 lg:p-6 space-y-4 lg:space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div>
          <h1 className="text-3xl font-bold font-display text-white">Welcome back!</h1>
          <p className="text-muted-1 mt-1">Here's what's happening with your leads today.</p>
        </div>
        <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow w-full lg:w-auto">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Total Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">1,234</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Messages Sent</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">5,678</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +8% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Response Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">23.5%</div>
            <div className="flex items-center text-xs text-red-400">
              <ArrowDownRight className="w-3 h-3 mr-1" />
              -2% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-1">Conversions</CardTitle>
            <Target className="h-4 w-4 text-muted-1" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">89</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1" />
              +15% from last month
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Recent Leads */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Recent Leads</CardTitle>
            <CardDescription className="text-muted-1">Latest prospects captured</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              {
                name: "Sarah Johnson",
                company: "TechCorp",
                email: "sarah@techcorp.com",
                time: "2 min ago",
                status: "new",
              },
              {
                name: "Mike Chen",
                company: "StartupXYZ",
                email: "mike@startupxyz.com",
                time: "15 min ago",
                status: "contacted",
              },
              {
                name: "Emma Davis",
                company: "GrowthLab",
                email: "emma@growthlab.com",
                time: "1 hour ago",
                status: "qualified",
              },
              {
                name: "Alex Rodriguez",
                company: "InnovateCo",
                email: "alex@innovateco.com",
                time: "3 hours ago",
                status: "new",
              },
            ].map((lead, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-brand-red/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-brand-red">
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{lead.name}</p>
                    <p className="text-xs text-muted-1">{lead.company}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge
                    className={`${
                      lead.status === "new"
                        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
                        : lead.status === "contacted"
                          ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                          : "bg-green-500/20 text-green-400 border-green-500/30"
                    } text-xs`}
                  >
                    {lead.status}
                  </Badge>
                  <p className="text-xs text-muted-1 mt-1">{lead.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">Active Campaigns</CardTitle>
            <CardDescription className="text-muted-1">Your running outreach campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Q1 Product Launch", type: "Email", leads: 245, sent: 180, responses: 42, status: "active" },
              { name: "WhatsApp Outreach", type: "WhatsApp", leads: 89, sent: 67, responses: 15, status: "active" },
              { name: "Follow-up Sequence", type: "Email", leads: 156, sent: 156, responses: 28, status: "completed" },
            ].map((campaign, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-white/10 hover:border-brand-red/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white">{campaign.name}</h4>
                  <Badge
                    className={`${
                      campaign.status === "active"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                    } text-xs`}
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-1">
                  <span>{campaign.type}</span>
                  <span>•</span>
                  <span>{campaign.leads} leads</span>
                  <span>•</span>
                  <span>{campaign.responses} responses</span>
                </div>
                <div className="mt-2 bg-white/5 rounded-full h-2">
                  <div
                    className="bg-brand-red h-2 rounded-full"
                    style={{ width: `${(campaign.sent / campaign.leads) * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Quick Actions</CardTitle>
          <CardDescription className="text-muted-1">Get started with common tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button
              variant="outline"
              className="h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-2 bg-transparent"
            >
              <Plus className="w-6 h-6" />
              <span>Import Leads</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-2 bg-transparent"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Create Campaign</span>
            </Button>
            <Button
              variant="outline"
              className="h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-2 bg-transparent"
            >
              <Mail className="w-6 h-6" />
              <span>New Template</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
