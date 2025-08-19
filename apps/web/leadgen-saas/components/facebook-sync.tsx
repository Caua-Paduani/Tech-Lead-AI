"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Facebook, Loader2, CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

interface FacebookPage {
  id: string
  name: string
  access_token: string
}

interface SyncResult {
  success: boolean
  message: string
  leads: any[]
  formsCount: number
}

export default function FacebookSync() {
  const [pages, setPages] = useState<FacebookPage[]>([])
  const [selectedPage, setSelectedPage] = useState<string>("")
  const [isLoadingPages, setIsLoadingPages] = useState(false)
  const [isSyncing, setIsSyncing] = useState(false)
  const [syncResult, setSyncResult] = useState<SyncResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Carregar páginas do Facebook
  const loadPages = async () => {
    setIsLoadingPages(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3000/facebook/pages", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
        },
      })

      if (!response.ok) {
        throw new Error("Erro ao carregar páginas")
      }

      const data = await response.json()
      setPages(data.pages)
      
      if (data.pages.length > 0) {
        setSelectedPage(data.pages[0].id)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setIsLoadingPages(false)
    }
  }

  // Sincronizar leads
  const syncLeads = async () => {
    if (!selectedPage) {
      setError("Selecione uma página primeiro")
      return
    }

    setIsSyncing(true)
    setError(null)
    setSyncResult(null)

    try {
      const response = await fetch("http://localhost:3000/leads/sync-facebook", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("authToken")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pageId: selectedPage }),
      })

      if (!response.ok) {
        throw new Error("Erro ao sincronizar leads")
      }

      const data = await response.json()
      setSyncResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido")
    } finally {
      setIsSyncing(false)
    }
  }

  return (
    <Card className="glass-card border-white/10">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Facebook className="w-5 h-5 text-blue-400" />
          Sincronizar Leads do Facebook
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Seleção de Página */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-1">
            Selecione a página do Facebook:
          </label>
          <div className="flex gap-2">
            <Select value={selectedPage} onValueChange={setSelectedPage}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Carregar páginas..." />
              </SelectTrigger>
              <SelectContent>
                {pages.map((page) => (
                  <SelectItem key={page.id} value={page.id}>
                    {page.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button
              onClick={loadPages}
              disabled={isLoadingPages}
              variant="outline"
              size="sm"
            >
              {isLoadingPages ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <RefreshCw className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Botão de Sincronização */}
        <Button
          onClick={syncLeads}
          disabled={!selectedPage || isSyncing}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          {isSyncing ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Sincronizando...
            </>
          ) : (
            <>
              <Facebook className="w-4 h-4 mr-2" />
              Sincronizar Leads
            </>
          )}
        </Button>

        {/* Resultado da Sincronização */}
        {syncResult && (
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span className="font-medium text-green-400">Sincronização Concluída!</span>
            </div>
            <p className="text-sm text-muted-1 mb-3">{syncResult.message}</p>
            <div className="flex gap-2 text-xs">
              <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                {syncResult.leads.length} leads importados
              </Badge>
              <Badge variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                {syncResult.formsCount} formulários processados
              </Badge>
            </div>
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-5 h-5 text-red-400" />
              <span className="font-medium text-red-400">Erro</span>
            </div>
            <p className="text-sm text-muted-1">{error}</p>
          </div>
        )}

        {/* Informações */}
        <div className="text-xs text-muted-1 space-y-1">
          <p>• A sincronização busca leads de todos os formulários da página selecionada</p>
          <p>• Apenas leads novos serão importados (duplicatas são ignoradas)</p>
          <p>• O processo pode levar alguns minutos dependendo da quantidade de leads</p>
        </div>
      </CardContent>
    </Card>
  )
} 