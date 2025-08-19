"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import {
  Check,
  ArrowRight,
  Building2,
  Users,
  Globe,
  Shield,
  Zap,
  BarChart3,
  Clock,
  Calendar,
  Phone,
  Mail,
  Heart,
  Target,
  MessageSquare,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"

export default function EnterprisePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    industry: "",
    companySize: "",
    country: "",
    // Contact Info
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    linkedin: "",
    // Requirements
    useCase: "",
    currentTools: "",
    timeline: "",
    budget: "",
    additionalInfo: "",
  })

  const totalSteps = 3
  const progress = (currentStep / totalSteps) * 100

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Enterprise form submitted:", formData)
    // Handle form submission
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface-1/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold font-display text-white">LeadFlow</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-1 hover:text-white" asChild>
              <Link href="/auth/login">Sign In</Link>
            </Button>
            <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow" asChild>
              <Link href="/auth/signup">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent"></div>
        <div className="container mx-auto text-center max-w-5xl relative">
          <Badge className="mb-6 bg-glass border-brand-red/30 text-brand-red hover:bg-glass">
            Enterprise Solutions
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold font-display text-white mb-8 leading-tight">
            Scale your outreach with <span className="text-brand-red">enterprise-grade</span> automation
          </h1>
          <p className="text-xl text-muted-1 mb-10 leading-relaxed max-w-3xl mx-auto">
            Custom solutions, dedicated support, and unlimited scale for large organizations. Transform your B2B
            prospecting with our most powerful features.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold"
              onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Custom Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-white/20 text-white hover:bg-white/5 bg-transparent"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Why enterprises choose LeadFlow</h2>
            <p className="text-xl text-muted-1 max-w-3xl mx-auto">
              Built for scale, security, and success with features designed for large organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-brand-red" />
                </div>
                <CardTitle className="text-white text-xl">White-Label Solution</CardTitle>
                <CardDescription className="text-muted-1">
                  Complete customization with your branding, domain, and user experience
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">Unlimited Users & Seats</CardTitle>
                <CardDescription className="text-muted-1">
                  No per-user pricing. Scale your team without worrying about additional costs
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-green-400" />
                </div>
                <CardTitle className="text-white text-xl">Advanced Security</CardTitle>
                <CardDescription className="text-muted-1">
                  SSO, SAML, custom security policies, and dedicated infrastructure
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">Custom Integrations</CardTitle>
                <CardDescription className="text-muted-1">
                  Connect with any system via custom APIs, webhooks, and dedicated integrations
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-orange-400" />
                </div>
                <CardTitle className="text-white text-xl">Advanced Analytics</CardTitle>
                <CardDescription className="text-muted-1">
                  Custom dashboards, detailed reporting, and business intelligence tools
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Clock className="w-7 h-7 text-teal-400" />
                </div>
                <CardTitle className="text-white text-xl">24/7 Dedicated Support</CardTitle>
                <CardDescription className="text-muted-1">
                  Dedicated success manager, priority support, and custom onboarding
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Enterprise use cases</h2>
            <p className="text-xl text-muted-1">See how large organizations leverage our platform</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="glass-card border-white/10 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Multi-Brand Management</h3>
                  <p className="text-muted-1">
                    Manage multiple brands, regions, or business units from a single platform with isolated data and
                    custom branding.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Separate workspaces per brand
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Custom branding and domains
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Centralized reporting and analytics
                </div>
              </div>
            </Card>

            <Card className="glass-card border-white/10 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Global Sales Teams</h3>
                  <p className="text-muted-1">
                    Coordinate international sales efforts with region-specific templates, compliance, and localization.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Multi-language support
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Regional compliance settings
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Time zone optimization
                </div>
              </div>
            </Card>

            <Card className="glass-card border-white/10 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">High-Volume Campaigns</h3>
                  <p className="text-muted-1">
                    Execute massive outreach campaigns with advanced deliverability, compliance, and performance
                    optimization.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Millions of contacts per month
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Advanced deliverability tools
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Real-time performance monitoring
                </div>
              </div>
            </Card>

            <Card className="glass-card border-white/10 p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Partner & Channel Programs</h3>
                  <p className="text-muted-1">
                    Enable partners and resellers with white-labeled solutions and dedicated support infrastructure.
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Partner portal access
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Revenue sharing tools
                </div>
                <div className="flex items-center text-muted-1">
                  <Check className="w-4 h-4 text-brand-red mr-2" />
                  Co-branded solutions
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI & Success Metrics */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Proven enterprise results</h2>
            <p className="text-xl text-muted-1">Real metrics from our enterprise customers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="glass-card border-white/10 text-center p-8">
              <div className="text-4xl font-bold text-brand-red mb-2">340%</div>
              <div className="text-white font-semibold mb-2">Average ROI</div>
              <div className="text-sm text-muted-1">Within first 12 months</div>
            </Card>

            <Card className="glass-card border-white/10 text-center p-8">
              <div className="text-4xl font-bold text-green-400 mb-2">65%</div>
              <div className="text-white font-semibold mb-2">Response Rate</div>
              <div className="text-sm text-muted-1">Increase vs. manual outreach</div>
            </Card>

            <Card className="glass-card border-white/10 text-center p-8">
              <div className="text-4xl font-bold text-purple-400 mb-2">2-4</div>
              <div className="text-white font-semibold mb-2">Weeks</div>
              <div className="text-sm text-muted-1">Implementation time</div>
            </Card>

            <Card className="glass-card border-white/10 text-center p-8">
              <div className="text-4xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-white font-semibold mb-2">Uptime SLA</div>
              <div className="text-sm text-muted-1">Enterprise guarantee</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold font-display text-white mb-6">Get your custom enterprise solution</h2>
            <p className="text-xl text-muted-1">Tell us about your needs and we'll create a tailored proposal</p>

            {/* Progress Indicator */}
            <div className="mt-8 mb-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 1 ? "bg-brand-red text-white" : "bg-surface-1 text-muted-1"
                  }`}
                >
                  1
                </div>
                <div className={`w-16 h-1 ${currentStep > 1 ? "bg-brand-red" : "bg-surface-1"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 2 ? "bg-brand-red text-white" : "bg-surface-1 text-muted-1"
                  }`}
                >
                  2
                </div>
                <div className={`w-16 h-1 ${currentStep > 2 ? "bg-brand-red" : "bg-surface-1"}`}></div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    currentStep >= 3 ? "bg-brand-red text-white" : "bg-surface-1 text-muted-1"
                  }`}
                >
                  3
                </div>
              </div>
              <Progress value={progress} className="w-full max-w-md mx-auto" />
            </div>
          </div>

          <Card className="glass-card border-white/10">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Company Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Company Information</h3>
                      <p className="text-muted-1">Tell us about your organization</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="companyName" className="text-white">
                          Company Name *
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={(e) => handleInputChange("companyName", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="Your company name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="industry" className="text-white">
                          Industry *
                        </Label>
                        <Select
                          value={formData.industry}
                          onValueChange={(value) => handleInputChange("industry", value)}
                        >
                          <SelectTrigger className="bg-surface-1 border-white/20 text-white">
                            <SelectValue placeholder="Select industry" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="technology">Technology</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="healthcare">Healthcare</SelectItem>
                            <SelectItem value="manufacturing">Manufacturing</SelectItem>
                            <SelectItem value="retail">Retail</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="companySize" className="text-white">
                          Company Size *
                        </Label>
                        <Select
                          value={formData.companySize}
                          onValueChange={(value) => handleInputChange("companySize", value)}
                        >
                          <SelectTrigger className="bg-surface-1 border-white/20 text-white">
                            <SelectValue placeholder="Select company size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2-10">2-10 employees</SelectItem>
                            <SelectItem value="30-50">30-50 employees</SelectItem>
                            <SelectItem value="50-100">50-100 employees</SelectItem>
                            <SelectItem value="100+">100+ employees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="country" className="text-white">
                          Country/Region *
                        </Label>
                        <Select value={formData.country} onValueChange={(value) => handleInputChange("country", value)}>
                          <SelectTrigger className="bg-surface-1 border-white/20 text-white">
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="de">Germany</SelectItem>
                            <SelectItem value="fr">France</SelectItem>
                            <SelectItem value="br">Brazil</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-brand-red hover:bg-brand-red-hover neon-glow"
                        disabled={
                          !formData.companyName || !formData.industry || !formData.companySize || !formData.country
                        }
                      >
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                      <p className="text-muted-1">How can we reach you?</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-white">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="Your full name"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="jobTitle" className="text-white">
                          Job Title *
                        </Label>
                        <Input
                          id="jobTitle"
                          value={formData.jobTitle}
                          onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="Your job title"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-white">
                          Corporate Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="your.email@company.com"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-white">
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>

                      <div className="md:col-span-2">
                        <Label htmlFor="linkedin" className="text-white">
                          LinkedIn Profile (Optional)
                        </Label>
                        <Input
                          id="linkedin"
                          value={formData.linkedin}
                          onChange={(e) => handleInputChange("linkedin", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white"
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                      >
                        Previous
                      </Button>
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="bg-brand-red hover:bg-brand-red-hover neon-glow"
                        disabled={!formData.fullName || !formData.jobTitle || !formData.email || !formData.phone}
                      >
                        Next Step <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Requirements */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">Your Requirements</h3>
                      <p className="text-muted-1">Help us understand your needs</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="useCase" className="text-white">
                          Primary Use Case *
                        </Label>
                        <Textarea
                          id="useCase"
                          value={formData.useCase}
                          onChange={(e) => handleInputChange("useCase", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white min-h-[100px]"
                          placeholder="Describe your main use case and goals..."
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="currentTools" className="text-white">
                          Current Tools & Systems
                        </Label>
                        <Textarea
                          id="currentTools"
                          value={formData.currentTools}
                          onChange={(e) => handleInputChange("currentTools", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white min-h-[80px]"
                          placeholder="What tools are you currently using? (CRM, email platforms, etc.)"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="timeline" className="text-white">
                            Implementation Timeline
                          </Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleInputChange("timeline", value)}
                          >
                            <SelectTrigger className="bg-surface-1 border-white/20 text-white">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-3months">1-3 months</SelectItem>
                              <SelectItem value="3-6months">3-6 months</SelectItem>
                              <SelectItem value="6months+">6+ months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="budget" className="text-white">
                            Budget Range
                          </Label>
                          <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-surface-1 border-white/20 text-white">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10k-50k">$10K - $50K</SelectItem>
                              <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                              <SelectItem value="500k+">$500K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo" className="text-white">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
                          className="bg-surface-1 border-white/20 text-white min-h-[80px]"
                          placeholder="Any specific requirements, questions, or additional context..."
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button
                        type="button"
                        onClick={prevStep}
                        variant="outline"
                        className="border-white/20 text-white hover:bg-white/5 bg-transparent"
                      >
                        Previous
                      </Button>
                      <Button
                        type="submit"
                        className="bg-brand-red hover:bg-brand-red-hover neon-glow"
                        disabled={!formData.useCase}
                      >
                        Submit Request
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Other ways to reach us</h2>
            <p className="text-muted-1">Prefer to talk directly? We're here to help</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 text-center p-8">
              <div className="w-16 h-16 bg-brand-red/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Schedule a Demo</h3>
              <p className="text-muted-1 mb-6">Book a personalized demo with our enterprise team</p>
              <Button className="bg-brand-red hover:bg-brand-red-hover neon-glow w-full">Book Demo Call</Button>
            </Card>

            <Card className="glass-card border-white/10 text-center p-8">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Call Us Directly</h3>
              <p className="text-muted-1 mb-6">Speak with our enterprise sales team</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 w-full bg-transparent">
                +1 (555) 123-4567
              </Button>
            </Card>

            <Card className="glass-card border-white/10 text-center p-8">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Email Us</h3>
              <p className="text-muted-1 mb-6">Send us your requirements via email</p>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 w-full bg-transparent">
                techleadadm@gmail.com
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-1 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold font-display">LeadFlow</span>
              </Link>
              <p className="text-muted-1 mb-6 max-w-md">
                Enterprise-grade lead capture and automated outreach solutions for large organizations.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  Twitter
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  LinkedIn
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-1 hover:text-white">
                  GitHub
                </Button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Enterprise</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Solutions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    White Label
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Compliance
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status Page
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-muted-1">
            <p>&copy; 2025 LeadFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
