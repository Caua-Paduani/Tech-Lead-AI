"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Download, Upload, MoreHorizontal, MessageSquare, Eye, Edit, Trash2, Plus } from "lucide-react"
import { mockLeads } from "@/lib/mock-data"
import InspectorPanel from "@/components/dashboard/inspector-panel"
import MessageComposer from "@/components/dashboard/message-composer"

export default function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [sourceFilter, setSourceFilter] = useState("all")
  const [selectedLeads, setSelectedLeads] = useState<string[]>([])
  const [selectedLead, setSelectedLead] = useState<any>(null)
  const [showComposer, setShowComposer] = useState(false)

  const filteredLeads = useMemo(() => {
    return mockLeads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.company.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesStatus = statusFilter === "all" || lead.status === statusFilter
      const matchesSource = sourceFilter === "all" || lead.source === sourceFilter

      return matchesSearch && matchesStatus && matchesSource
    })
  }, [searchTerm, statusFilter, sourceFilter])

  const handleSelectLead = (leadId: string) => {
    setSelectedLeads((prev) => (prev.includes(leadId) ? prev.filter((id) => id !== leadId) : [...prev, leadId]))
  }

  const handleSelectAll = () => {
    setSelectedLeads(selectedLeads.length === filteredLeads.length ? [] : filteredLeads.map((lead) => lead.id))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "contacted":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "qualified":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "unqualified":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="flex h-full">
      <div className="flex-1 p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-display text-white">Leads</h1>
            <p className="text-muted-1 mt-1">Manage and track your prospects</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
              <Upload className="w-4 h-4 mr-2" />
              Import CSV
            </Button>
            <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Lead
            </Button>
          </div>
        </div>

        {/* Filters and Search */}
        <Card className="glass-card border-white/10">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-1 w-4 h-4" />
                <Input
                  placeholder="Search leads by name, email, or company..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
                      <Filter className="w-4 h-4 mr-2" />
                      Status: {statusFilter === "all" ? "All" : statusFilter}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-surface-1 border-white/10">
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setStatusFilter("all")}
                    >
                      All Statuses
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setStatusFilter("new")}
                    >
                      New
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setStatusFilter("contacted")}
                    >
                      Contacted
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setStatusFilter("qualified")}
                    >
                      Qualified
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent">
                      Source: {sourceFilter === "all" ? "All" : sourceFilter}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-surface-1 border-white/10">
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setSourceFilter("all")}
                    >
                      All Sources
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setSourceFilter("landing_page")}
                    >
                      Landing Page
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setSourceFilter("referral")}
                    >
                      Referral
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className="text-muted-1 hover:text-white hover:bg-white/5"
                      onClick={() => setSourceFilter("social_media")}
                    >
                      Social Media
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* Bulk Actions */}
            {selectedLeads.length > 0 && (
              <div className="flex items-center justify-between mt-4 p-3 bg-brand-red/10 border border-brand-red/20 rounded-lg">
                <span className="text-sm text-white">
                  {selectedLeads.length} lead{selectedLeads.length > 1 ? "s" : ""} selected
                </span>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-brand-red/30 text-brand-red hover:bg-brand-red/10 bg-transparent"
                    onClick={() => setShowComposer(true)}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Leads Table */}
        <Card className="glass-card border-white/10">
          <CardHeader>
            <CardTitle className="text-white">
              {filteredLeads.length} Lead{filteredLeads.length !== 1 ? "s" : ""}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-white/10 hover:bg-transparent">
                  <TableHead className="w-12">
                    <Checkbox
                      checked={selectedLeads.length === filteredLeads.length && filteredLeads.length > 0}
                      onCheckedChange={handleSelectAll}
                      className="border-white/20 data-[state=checked]:bg-brand-red data-[state=checked]:border-brand-red"
                    />
                  </TableHead>
                  <TableHead className="text-muted-1">Name</TableHead>
                  <TableHead className="text-muted-1">Company</TableHead>
                  <TableHead className="text-muted-1">Email</TableHead>
                  <TableHead className="text-muted-1">Status</TableHead>
                  <TableHead className="text-muted-1">Source</TableHead>
                  <TableHead className="text-muted-1">Created</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredLeads.map((lead) => (
                  <TableRow
                    key={lead.id}
                    className="border-white/10 hover:bg-white/5 cursor-pointer"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <Checkbox
                        checked={selectedLeads.includes(lead.id)}
                        onCheckedChange={() => handleSelectLead(lead.id)}
                        className="border-white/20 data-[state=checked]:bg-brand-red data-[state=checked]:border-brand-red"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-brand-red/20 rounded-full flex items-center justify-center">
                          <span className="text-xs font-medium text-brand-red">
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <span className="font-medium text-white">{lead.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-1">{lead.company}</TableCell>
                    <TableCell className="text-muted-1">{lead.email}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-1 capitalize">{lead.source.replace("_", " ")}</TableCell>
                    <TableCell className="text-muted-1">{new Date(lead.created_at).toLocaleDateString()}</TableCell>
                    <TableCell onClick={(e) => e.stopPropagation()}>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-surface-1 border-white/10" align="end">
                          <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Send Message
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-muted-1 hover:text-white hover:bg-white/5">
                            <Edit className="mr-2 h-4 w-4" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-white/10" />
                          <DropdownMenuItem className="text-red-400 hover:text-red-300 hover:bg-red-500/10">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Inspector Panel */}
      <InspectorPanel selectedItem={selectedLead} type="lead" className="hidden lg:block" />

      {/* Message Composer Modal */}
      {showComposer && (
        <MessageComposer
          isOpen={showComposer}
          onClose={() => setShowComposer(false)}
          selectedLeads={selectedLeads.map((id) => filteredLeads.find((lead) => lead.id === id)!)}
        />
      )}
    </div>
  )
}
