"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  MessageSquare,
  Mail,
  TrendingUp,
  Plus,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Facebook,
  Zap,
  X,
  Loader2,
  CheckCircle,
} from "lucide-react"

// Hook para gerenciar conexão com Facebook
function useFacebookConnection() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Verificar se já está conectado ao carregar a página
  useEffect(() => {
    const checkConnection = async () => {
      try {
        const response = await fetch("http://localhost:3000/facebook/pages", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          },
        })
        
        if (response.ok) {
          setIsConnected(true)
        }
      } catch (err) {
        // Usuário não está conectado
      }
    }

    checkConnection()
  }, [])

  const connectFacebook = async () => {
    setIsConnecting(true)
    setError(null)

    try {
      // Gerar state para segurança
      const state = crypto.getRandomValues(new Uint32Array(1))[0].toString()
      localStorage.setItem("fb_oauth_state", state)

      // Buscar URL de autorização do backend
      const response = await fetch("http://localhost:3000/auth/facebook/connect", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`, // Ajuste conforme sua autenticação
          "Content-Type": "application/json",
        },
      })

      if (!response.ok) {
        throw new Error("Erro ao conectar com Facebook")
      }

      const data = await response.json()
      
      // Adicionar state à URL
      const authUrl = `${data.authUrl}&state=${encodeURIComponent(state)}`
      
      // Redirecionar para Facebook
      window.location.href = authUrl

    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
      setIsConnecting(false)
    }
  }

  return {
    isConnecting,
    isConnected,
    error,
    connectFacebook,
  }
}

export default function DashboardPage() {
  const { isConnecting, isConnected, error, connectFacebook } = useFacebookConnection()

  return (
    <div className="min-h-screen w-full p-3 sm:p-4 lg:p-6 space-y-4 lg:space-y-6">
      {/* Welcome Section */}
      <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold font-display text-white">Welcome back!</h1>
          <p className="text-sm sm:text-base text-muted-1 mt-1">Here's what's happening with your leads today.</p>
        </div>
        <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow w-full sm:w-auto lg:w-auto flex-shrink-0">
          <Plus className="w-4 h-4 mr-2" />
          New Campaign
        </Button>
      </div>

      {/* Facebook Connection Alert Banner */}
      {!isConnected && (
        <Card className="glass-card border-brand-red/30 bg-gradient-to-r from-brand-red/10 to-blue-600/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-transparent"></div>
          <CardContent className="p-3 sm:p-4 lg:p-6 relative">
            <div className="flex flex-col space-y-3 sm:space-y-4 lg:flex-row lg:items-center lg:justify-between lg:space-y-0">
              <div className="flex items-start space-x-3 sm:space-x-4 min-w-0">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-full flex items-center justify-center border border-blue-500/30">
                  <Facebook className="w-5 h-5 sm:w-6 sm:w-6 text-blue-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                    Conecte sua conta do Facebook
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-brand-red animate-pulse flex-shrink-0" />
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-1 mt-1">
                    Comece a capturar leads automaticamente dos seus anúncios do Facebook e Instagram.
                    <span className="text-brand-red font-medium"> Configure em menos de 2 minutos!</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-1 sm:gap-2 mt-2 text-xs">
                    <span className="bg-blue-500/20 px-2 py-1 rounded-full border border-blue-500/30 text-blue-300">
                      ✨ Captura automática
                    </span>
                    <span className="bg-green-500/20 px-2 py-1 rounded-full border border-green-500/30 text-green-300">
                      📈 Mais conversões
                    </span>
                    <span className="bg-purple-500/20 px-2 py-1 rounded-full border border-purple-500/30 text-purple-300">
                      ⚡ Setup rápido
                    </span>
                  </div>
                  {error && (
                    <div className="mt-2 text-xs text-red-400 bg-red-500/10 px-2 py-1 rounded border border-red-500/20">
                      ❌ {error}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 lg:flex-shrink-0">
                <Button 
                  onClick={connectFacebook}
                  disabled={isConnecting}
                  className="bg-blue-600 hover:bg-blue-700 text-white border-0 neon-glow-blue px-4 sm:px-6 py-2 sm:py-3 font-semibold text-sm w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isConnecting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 flex-shrink-0 animate-spin" />
                      Conectando...
                    </>
                  ) : (
                    <>
                      <Facebook className="w-4 h-4 mr-2 flex-shrink-0" />
                      Conectar Facebook
                    </>
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-1 hover:text-white hover:bg-white/5 w-full sm:w-auto"
                >
                  <X className="w-4 h-4 mr-1 flex-shrink-0" />
                  Depois
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Facebook Connected Success Banner */}
      {isConnected && (
        <Card className="glass-card border-green-500/30 bg-gradient-to-r from-green-500/10 to-blue-600/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-transparent"></div>
          <CardContent className="p-3 sm:p-4 lg:p-6 relative">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-green-600/20 rounded-full flex items-center justify-center border border-green-500/30">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
                  Facebook conectado com sucesso!
                </h3>
                <p className="text-xs sm:text-sm text-muted-1 mt-1">
                  Sua conta do Facebook foi conectada. Agora você pode sincronizar seus leads automaticamente.
                </p>
              </div>
              <Button 
                variant="outline"
                size="sm"
                className="border-green-500/30 text-green-400 hover:bg-green-500/10"
              >
                Sincronizar Leads
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-1">Total Leads</CardTitle>
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-muted-1 flex-shrink-0" />
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-0">
            <div className="text-lg sm:text-2xl font-bold text-white">1,234</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">+12% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-1">Messages Sent</CardTitle>
            <MessageSquare className="h-3 w-3 sm:h-4 sm:w-4 text-muted-1 flex-shrink-0" />
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-0">
            <div className="text-lg sm:text-2xl font-bold text-white">5,678</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">+8% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-1">Response Rate</CardTitle>
            <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-muted-1 flex-shrink-0" />
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-0">
            <div className="text-lg sm:text-2xl font-bold text-white">23.5%</div>
            <div className="flex items-center text-xs text-red-400">
              <ArrowDownRight className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">-2% from last month</span>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card border-white/10">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-3 sm:p-4">
            <CardTitle className="text-xs sm:text-sm font-medium text-muted-1">Conversions</CardTitle>
            <Target className="h-3 w-3 sm:h-4 sm:w-4 text-muted-1 flex-shrink-0" />
          </CardHeader>
          <CardContent className="p-3 sm:p-4 pt-0">
            <div className="text-lg sm:text-2xl font-bold text-white">89</div>
            <div className="flex items-center text-xs text-green-400">
              <ArrowUpRight className="w-3 h-3 mr-1 flex-shrink-0" />
              <span className="truncate">+15% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
        {/* Recent Leads */}
        <Card className="glass-card border-white/10">
          <CardHeader className="p-3 sm:p-4 lg:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Recent Leads</CardTitle>
            <CardDescription className="text-muted-1 text-sm">Latest prospects captured</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
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
                className="flex items-center justify-between p-2 sm:p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center space-x-3 min-w-0 flex-1">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm font-medium text-brand-red">
                      {lead.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                    <p className="text-xs text-muted-1 truncate">{lead.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-1 flex-shrink-0">
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
                  <p className="text-xs text-muted-1">{lead.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <Card className="glass-card border-white/10">
          <CardHeader className="p-3 sm:p-4 lg:p-6">
            <CardTitle className="text-white text-base sm:text-lg">Active Campaigns</CardTitle>
            <CardDescription className="text-muted-1 text-sm">Your running outreach campaigns</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 p-3 sm:p-4 lg:p-6 pt-0">
            {[
              { name: "Q1 Product Launch", type: "Email", leads: 245, sent: 180, responses: 42, status: "active" },
              { name: "WhatsApp Outreach", type: "WhatsApp", leads: 89, sent: 67, responses: 15, status: "active" },
              { name: "Follow-up Sequence", type: "Email", leads: 156, sent: 156, responses: 28, status: "completed" },
            ].map((campaign, index) => (
              <div
                key={index}
                className="p-3 sm:p-4 rounded-lg border border-white/10 hover:border-brand-red/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-white text-sm sm:text-base truncate flex-1 mr-2">{campaign.name}</h4>
                  <Badge
                    className={`${
                      campaign.status === "active"
                        ? "bg-green-500/20 text-green-400 border-green-500/30"
                        : "bg-gray-500/20 text-gray-400 border-gray-500/30"
                    } text-xs flex-shrink-0`}
                  >
                    {campaign.status}
                  </Badge>
                </div>
                <div className="flex flex-wrap items-center gap-1 sm:gap-2 text-xs sm:text-sm text-muted-1 mb-2">
                  <span>{campaign.type}</span>
                  <span>•</span>
                  <span>{campaign.leads} leads</span>
                  <span>•</span>
                  <span>{campaign.responses} responses</span>
                </div>
                <div className="bg-white/5 rounded-full h-2">
                  <div
                    className="bg-brand-red h-2 rounded-full transition-all duration-300"
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
        <CardHeader className="p-3 sm:p-4 lg:p-6">
          <CardTitle className="text-white text-base sm:text-lg">Quick Actions</CardTitle>
          <CardDescription className="text-muted-1 text-sm">Get started with common tasks</CardDescription>
        </CardHeader>
        <CardContent className="p-3 sm:p-4 lg:p-6 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            <Button
              variant="outline"
              className="h-16 sm:h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-1 sm:space-y-2 bg-transparent"
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">Import Leads</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 sm:h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-1 sm:space-y-2 bg-transparent"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">Create Campaign</span>
            </Button>
            <Button
              variant="outline"
              className="h-16 sm:h-20 border-white/20 text-white hover:bg-white/5 flex-col space-y-1 sm:space-y-2 bg-transparent"
            >
              <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-xs sm:text-sm">New Template</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
