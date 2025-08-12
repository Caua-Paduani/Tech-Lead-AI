"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Clock, Send, Eye, Calendar, Users, Zap } from "lucide-react"
import { mockTemplates } from "@/lib/mock-data"

interface MessageComposerProps {
  isOpen: boolean
  onClose: () => void
  selectedLeads: any[]
}

export default function MessageComposer({ isOpen, onClose, selectedLeads }: MessageComposerProps) {
  const [channel, setChannel] = useState<"email" | "whatsapp">("email")
  const [selectedTemplate, setSelectedTemplate] = useState<string>("")
  const [subject, setSubject] = useState("")
  const [content, setContent] = useState("")
  const [scheduleType, setScheduleType] = useState<"now" | "later">("now")
  const [scheduleDate, setScheduleDate] = useState("")
  const [scheduleTime, setScheduleTime] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const availableTemplates = mockTemplates.filter((template) => template.channel === channel)

  const handleTemplateSelect = (templateId: string) => {
    const template = availableTemplates.find((t) => t.id === templateId)
    if (template) {
      setSelectedTemplate(templateId)
      setSubject(template.subject || "")
      setContent(template.content)
    }
  }

  const handleSend = () => {
    // Mock sending logic
    console.log("Sending message:", {
      channel,
      subject,
      content,
      recipients: selectedLeads.length,
      scheduleType,
      scheduleDate,
      scheduleTime,
    })

    // Show success message (in real app, this would be a toast)
    alert(`Message ${scheduleType === "now" ? "sent" : "scheduled"} to ${selectedLeads.length} lead(s)!`)
    onClose()
  }

  const renderPreview = () => {
    const sampleLead = selectedLeads[0]
    if (!sampleLead) return null

    let previewContent = content
    previewContent = previewContent.replace(/\{\{first_name\}\}/g, sampleLead.name.split(" ")[0])
    previewContent = previewContent.replace(/\{\{company_name\}\}/g, sampleLead.company || "Your Company")
    previewContent = previewContent.replace(/\{\{sender_name\}\}/g, "Your Name")

    return (
      <Card className="glass-card border-white/10">
        <CardHeader>
          <CardTitle className="text-white text-sm flex items-center">
            <Eye className="w-4 h-4 mr-2" />
            Preview for {sampleLead.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {channel === "email" && subject && (
            <div>
              <Label className="text-muted-1 text-xs">Subject</Label>
              <p className="text-white text-sm font-medium">{subject}</p>
            </div>
          )}
          <div>
            <Label className="text-muted-1 text-xs">Message</Label>
            <div className="text-white text-sm whitespace-pre-wrap bg-surface-1 p-3 rounded-lg border border-white/10">
              {previewContent}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-surface-1 border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-white font-display">Compose Message</DialogTitle>
          <DialogDescription className="text-muted-1">
            Send personalized messages to {selectedLeads.length} selected lead{selectedLeads.length > 1 ? "s" : ""}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Composer */}
          <div className="space-y-6">
            <Tabs value={channel} onValueChange={(value) => setChannel(value as "email" | "whatsapp")}>
              <TabsList className="grid w-full grid-cols-2 bg-surface-1 border border-white/10">
                <TabsTrigger value="email" className="data-[state=active]:bg-brand-red data-[state=active]:text-white">
                  <Mail className="w-4 h-4 mr-2" />
                  Email
                </TabsTrigger>
                <TabsTrigger
                  value="whatsapp"
                  className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  WhatsApp
                </TabsTrigger>
              </TabsList>

              <TabsContent value="email" className="space-y-4">
                {/* Template Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Template (Optional)</Label>
                  <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
                    <SelectTrigger className="bg-surface-1 border-white/10 text-white">
                      <SelectValue placeholder="Choose a template..." />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-1 border-white/10">
                      {availableTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id} className="text-white">
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <Label className="text-white">Subject</Label>
                  <Input
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="Enter email subject..."
                    className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label className="text-white">Message</Label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your message..."
                    rows={8}
                    className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge
                      variant="outline"
                      className="border-brand-red/30 text-brand-red cursor-pointer hover:bg-brand-red/10"
                      onClick={() => setContent(content + "{{first_name}}")}
                    >
                      + First Name
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-brand-red/30 text-brand-red cursor-pointer hover:bg-brand-red/10"
                      onClick={() => setContent(content + "{{company_name}}")}
                    >
                      + Company
                    </Badge>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="whatsapp" className="space-y-4">
                {/* Template Selection */}
                <div className="space-y-2">
                  <Label className="text-white">Template (Optional)</Label>
                  <Select value={selectedTemplate} onValueChange={handleTemplateSelect}>
                    <SelectTrigger className="bg-surface-1 border-white/10 text-white">
                      <SelectValue placeholder="Choose a template..." />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-1 border-white/10">
                      {availableTemplates.map((template) => (
                        <SelectItem key={template.id} value={template.id} className="text-white">
                          {template.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Label className="text-white">Message</Label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Write your WhatsApp message..."
                    rows={8}
                    className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                  />
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge
                      variant="outline"
                      className="border-brand-red/30 text-brand-red cursor-pointer hover:bg-brand-red/10"
                      onClick={() => setContent(content + "{{first_name}}")}
                    >
                      + First Name
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-brand-red/30 text-brand-red cursor-pointer hover:bg-brand-red/10"
                      onClick={() => setContent(content + "{{company_name}}")}
                    >
                      + Company
                    </Badge>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Scheduling */}
            <Card className="glass-card border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-base flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Tabs value={scheduleType} onValueChange={(value) => setScheduleType(value as "now" | "later")}>
                  <TabsList className="grid w-full grid-cols-2 bg-surface-1 border border-white/10">
                    <TabsTrigger
                      value="now"
                      className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                    >
                      <Zap className="w-4 h-4 mr-2" />
                      Send Now
                    </TabsTrigger>
                    <TabsTrigger
                      value="later"
                      className="data-[state=active]:bg-brand-red data-[state=active]:text-white"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="later" className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-white text-sm">Date</Label>
                        <Input
                          type="date"
                          value={scheduleDate}
                          onChange={(e) => setScheduleDate(e.target.value)}
                          className="bg-surface-1 border-white/10 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white text-sm">Time</Label>
                        <Input
                          type="time"
                          value={scheduleTime}
                          onChange={(e) => setScheduleTime(e.target.value)}
                          className="bg-surface-1 border-white/10 text-white"
                        />
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Recipients */}
          <div className="space-y-6">
            {/* Recipients */}
            <Card className="glass-card border-white/10">
              <CardHeader className="pb-3">
                <CardTitle className="text-white text-base flex items-center">
                  <Users className="w-4 h-4 mr-2" />
                  Recipients ({selectedLeads.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {selectedLeads.slice(0, 5).map((lead) => (
                    <div key={lead.id} className="flex items-center space-x-2 text-sm">
                      <div className="w-6 h-6 bg-brand-red/20 rounded-full flex items-center justify-center">
                        <span className="text-xs text-brand-red">
                          {lead.name
                            .split(" ")
                            .map((n: string) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-white">{lead.name}</span>
                      <span className="text-muted-1">({lead.email})</span>
                    </div>
                  ))}
                  {selectedLeads.length > 5 && (
                    <p className="text-muted-1 text-sm">+{selectedLeads.length - 5} more...</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Preview */}
            {content && renderPreview()}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t border-white/10">
          <Button
            variant="outline"
            onClick={() => setShowPreview(!showPreview)}
            className="border-white/20 text-white hover:bg-white/5 bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            {showPreview ? "Hide" : "Show"} Preview
          </Button>

          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="border-white/20 text-white hover:bg-white/5 bg-transparent"
            >
              Cancel
            </Button>
            <Button
              onClick={handleSend}
              disabled={!content.trim()}
              className="bg-brand-red hover:bg-brand-red-hover neon-glow"
            >
              <Send className="w-4 h-4 mr-2" />
              {scheduleType === "now" ? "Send Now" : "Schedule Message"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
