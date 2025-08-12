"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Mail, Clock, Trash2, GripVertical, Save, Play } from "lucide-react"

interface CampaignBuilderProps {
  isOpen: boolean
  onClose: () => void
  campaign?: any
}

interface CampaignStep {
  id: string
  step_order: number
  step_type: "message" | "delay"
  content: string
  delay_hours: number
}

export default function CampaignBuilder({ isOpen, onClose, campaign }: CampaignBuilderProps) {
  const [name, setName] = useState(campaign?.name || "")
  const [description, setDescription] = useState(campaign?.description || "")
  const [channel, setChannel] = useState<"email" | "whatsapp">(campaign?.channel || "email")
  const [steps, setSteps] = useState<CampaignStep[]>(
    campaign?.steps || [
      {
        id: "1",
        step_order: 1,
        step_type: "message",
        content: "",
        delay_hours: 0,
      },
    ],
  )

  const addStep = (type: "message" | "delay") => {
    const newStep: CampaignStep = {
      id: Date.now().toString(),
      step_order: steps.length + 1,
      step_type: type,
      content: "",
      delay_hours: type === "delay" ? 24 : 0,
    }
    setSteps([...steps, newStep])
  }

  const updateStep = (stepId: string, field: keyof CampaignStep, value: any) => {
    setSteps(steps.map((step) => (step.id === stepId ? { ...step, [field]: value } : step)))
  }

  const removeStep = (stepId: string) => {
    setSteps(steps.filter((step) => step.id !== stepId))
  }

  const handleSave = () => {
    console.log("Saving campaign:", {
      name,
      description,
      channel,
      steps,
    })
    alert("Campaign saved successfully!")
    onClose()
  }

  const handleStart = () => {
    console.log("Starting campaign:", {
      name,
      description,
      channel,
      steps,
    })
    alert("Campaign started successfully!")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-surface-1 border-white/10 text-white max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-white font-display">
            {campaign ? "Edit Campaign" : "Create New Campaign"}
          </DialogTitle>
          <DialogDescription className="text-muted-1">
            Build your automated outreach sequence step by step
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Basic Info */}
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="text-white text-base">Campaign Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-white">Campaign Name</Label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter campaign name..."
                    className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-white">Channel</Label>
                  <Select value={channel} onValueChange={(value) => setChannel(value as "email" | "whatsapp")}>
                    <SelectTrigger className="bg-surface-1 border-white/10 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-1 border-white/10">
                      <SelectItem value="email" className="text-white">
                        <div className="flex items-center">
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </div>
                      </SelectItem>
                      <SelectItem value="whatsapp" className="text-white">
                        <div className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          WhatsApp
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label className="text-white">Description</Label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe your campaign..."
                  rows={3}
                  className="bg-surface-1 border-white/10 text-white placeholder:text-muted-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Campaign Steps */}
          <Card className="glass-card border-white/10">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-white text-base">Campaign Sequence</CardTitle>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addStep("message")}
                  className="border-brand-red/30 text-brand-red hover:bg-brand-red/10"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Add Message
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => addStep("delay")}
                  className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Add Delay
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative">
                  <Card className="bg-surface-1 border-white/10">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-2">
                            <GripVertical className="w-4 h-4 text-muted-1 cursor-move" />
                            <div className="w-8 h-8 bg-brand-red rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-white">{index + 1}</span>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">
                              {step.step_type === "message" ? "Send Message" : "Wait"}
                            </h4>
                            <p className="text-xs text-muted-1">
                              {step.step_type === "message"
                                ? `${channel === "email" ? "Email" : "WhatsApp"} message`
                                : `Delay for ${step.delay_hours} hours`}
                            </p>
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => removeStep(step.id)}
                          className="text-red-400 hover:text-red-300 hover:bg-red-500/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {step.step_type === "message" ? (
                        <div className="space-y-2">
                          <Label className="text-white text-sm">Message Content</Label>
                          <Textarea
                            value={step.content}
                            onChange={(e) => updateStep(step.id, "content", e.target.value)}
                            placeholder={`Write your ${channel} message...`}
                            rows={4}
                            className="bg-dark border-white/10 text-white placeholder:text-muted-1"
                          />
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <Label className="text-white text-sm">Delay Duration (hours)</Label>
                          <Input
                            type="number"
                            value={step.delay_hours}
                            onChange={(e) => updateStep(step.id, "delay_hours", Number.parseInt(e.target.value) || 0)}
                            min="1"
                            className="bg-dark border-white/10 text-white"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-px h-6 bg-white/20"></div>
                    </div>
                  )}
                </div>
              ))}

              {steps.length === 0 && (
                <div className="text-center py-8 text-muted-1">
                  <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>No steps added yet. Click "Add Message" to get started.</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between pt-4 border-t border-white/10">
          <Button
            variant="outline"
            onClick={onClose}
            className="border-white/20 text-white hover:bg-white/5 bg-transparent"
          >
            Cancel
          </Button>

          <div className="flex space-x-3">
            <Button
              onClick={handleSave}
              variant="outline"
              className="border-brand-red/30 text-brand-red hover:bg-brand-red/10 bg-transparent"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              onClick={handleStart}
              disabled={!name.trim() || steps.length === 0}
              className="bg-brand-red hover:bg-brand-red-hover neon-glow"
            >
              <Play className="w-4 h-4 mr-2" />
              Start Campaign
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
