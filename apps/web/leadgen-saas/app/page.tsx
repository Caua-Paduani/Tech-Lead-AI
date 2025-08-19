import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageSquare, Mail, BarChart3, Zap, Shield, Heart, Target, Clock, Globe, Lock } from "lucide-react"
import Link from "next/link"

export default function LeadFlowLanding() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface-1/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold font-display text-white">LeadFlow</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-1 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-muted-1 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#how-it-works" className="text-muted-1 hover:text-white transition-colors">
              How it Works
            </a>
            <a href="#faq" className="text-muted-1 hover:text-white transition-colors">
              FAQ
            </a>
          </nav>
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
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 to-transparent"></div>
        <div className="container mx-auto text-center max-w-5xl relative">
          <Badge className="mb-6 bg-glass border-brand-red/30 text-brand-red hover:bg-glass">
            Trusted by 100 B2B companies
          </Badge>
          <h1 className="text-6xl md:text-7xl font-bold font-display text-white mb-8 leading-tight">
            Automate your prospecting —<span className="text-brand-red"> reach leads on WhatsApp & email</span>
          </h1>
          <p className="text-xl text-muted-1 mb-10 leading-relaxed max-w-3xl mx-auto">
            Capture leads, personalize sequences, and scale outreach from one secure dashboard. Turn prospects into
            customers with AI-powered automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold"
              asChild
            >
              <Link href="/auth/signup">Start free 14-day trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-white/20 text-white hover:bg-white/5 bg-transparent"
            >
              Book a demo
            </Button>
          </div>
          <p className="text-sm text-muted-1 mt-6">No credit card required • Setup in 5 minutes • Cancel anytime</p>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 px-4 border-y border-white/10">
        <div className="container mx-auto">
          <p className="text-center text-muted-1 mb-8">Trusted by leading companies worldwide</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-2xl font-bold">TechCorp</div>
            <div className="text-2xl font-bold">GrowthLab</div>
            <div className="text-2xl font-bold">ScaleUp</div>
            <div className="text-2xl font-bold">InnovateCo</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-display text-white mb-6">Everything you need to scale outreach</h2>
            <p className="text-xl text-muted-1 max-w-3xl mx-auto">
              Powerful automation tools designed to help you capture more leads and convert them into loyal customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-brand-red/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand-red" />
                </div>
                <CardTitle className="text-white text-xl">Smart Lead Capture</CardTitle>
                <CardDescription className="text-muted-1">
                  Capture leads from multiple sources with intelligent forms, landing pages, and website widgets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-green-400" />
                </div>
                <CardTitle className="text-white text-xl">WhatsApp Automation</CardTitle>
                <CardDescription className="text-muted-1">
                  Send personalized messages and automated sequences directly via WhatsApp Business API
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="w-7 h-7 text-blue-400" />
                </div>
                <CardTitle className="text-white text-xl">Email Sequences</CardTitle>
                <CardDescription className="text-muted-1">
                  Create and send targeted email campaigns with advanced personalization and A/B testing
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-purple-400" />
                </div>
                <CardTitle className="text-white text-xl">Advanced Analytics</CardTitle>
                <CardDescription className="text-muted-1">
                  Track performance with detailed analytics, conversion metrics, and ROI reporting
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <CardTitle className="text-white text-xl">AI-Powered Workflows</CardTitle>
                <CardDescription className="text-muted-1">
                  Set up intelligent automation sequences that adapt based on lead behavior and engagement
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-teal-400" />
                </div>
                <CardTitle className="text-white text-xl">Enterprise Security</CardTitle>
                <CardDescription className="text-muted-1">
                  Bank-grade security with GDPR compliance, SOC 2 certification, and end-to-end encryption
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-display text-white mb-6">How it works</h2>
            <p className="text-xl text-muted-1">Get started in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Capture Leads</h3>
              <p className="text-muted-1">
                Set up lead capture forms and connect your existing tools to start collecting prospects automatically.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Create Sequences</h3>
              <p className="text-muted-1">
                Build personalized outreach sequences for WhatsApp and email with our drag-and-drop builder.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-6 neon-glow">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Scale & Optimize</h3>
              <p className="text-muted-1">
                Monitor performance, optimize campaigns, and scale your outreach to convert more prospects into
                customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-display text-white mb-6">Powerful dashboard at your fingertips</h2>
            <p className="text-xl text-muted-1 max-w-3xl mx-auto">
              Manage all your leads, campaigns, and analytics from one centralized dashboard designed for efficiency
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
                  <p className="text-muted-1">
                    Track message delivery, open rates, response rates, and conversion metrics in real-time with
                    interactive charts and reports.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Lead Management</h3>
                  <p className="text-muted-1">
                    Organize, filter, and manage thousands of leads with advanced search, bulk actions, and CSV import
                    capabilities.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Campaign Builder</h3>
                  <p className="text-muted-1">
                    Create sophisticated multi-channel campaigns with our intuitive drag-and-drop builder and automation
                    triggers.
                  </p>
                </div>
              </div>

              <div className="pt-6">
                <Button size="lg" className="bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold" asChild>
                  <Link href="/dashboard">Explore Dashboard</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="glass-card border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-white font-semibold">Dashboard Overview</h4>
                  <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30">Live</Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-white">2,847</div>
                    <div className="text-sm text-muted-1">Total Leads</div>
                  </div>
                  <div className="glass-card border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-brand-red">94.2%</div>
                    <div className="text-sm text-muted-1">Delivery Rate</div>
                  </div>
                  <div className="glass-card border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-green-400">18.7%</div>
                    <div className="text-sm text-muted-1">Response Rate</div>
                  </div>
                  <div className="glass-card border-white/5 p-4 rounded-xl">
                    <div className="text-2xl font-bold text-purple-400">$47.2K</div>
                    <div className="text-sm text-muted-1">Revenue</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-1">Active Campaigns</span>
                    <span className="text-white">12</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-1">Messages Sent Today</span>
                    <span className="text-white">1,247</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-1">New Leads This Week</span>
                    <span className="text-white">89</span>
                  </div>
                </div>
              </div>

              {/* Decorative glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-red/10 to-purple-500/10 rounded-3xl blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold font-display text-white mb-6">Simple, transparent pricing</h2>
            <p className="text-xl text-muted-1 mb-8">Choose the plan that fits your business needs</p>

            {/* Monthly/Annual Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className="text-muted-1">Monthly</span>
              <div className="relative">
                <input type="checkbox" id="pricing-toggle" className="sr-only" />
                <label htmlFor="pricing-toggle" className="flex items-center cursor-pointer">
                  <div className="w-14 h-8 bg-surface-1 rounded-full border border-white/20 relative">
                    <div className="w-6 h-6 bg-brand-red rounded-full absolute top-1 left-1 transition-transform duration-200"></div>
                  </div>
                </label>
              </div>
              <span className="text-white">Annual</span>
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30">Save 20%</Badge>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white font-display">Starter</CardTitle>
                <CardDescription className="text-muted-1">Perfect for small businesses</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">$15</span>
                  <span className="text-muted-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Up to 300 leads/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">WhatsApp or email messaging (just one)</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Email support</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-transparent border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  variant="outline"
                >
                  Start free 14-day trial
                </Button>
              </CardContent>
            </Card>

            {/* Growth Plan */}
            <Card className="glass-card border-brand-red relative hover:border-brand-red transition-all duration-300 neon-glow">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand-red text-white">
                Most Popular
              </Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white font-display">Growth</CardTitle>
                <CardDescription className="text-muted-1">For growing businesses</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">$35</span>
                  <span className="text-muted-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Up to 5,000 leads/month</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Advanced WhatsApp automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Email sequences & templates</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Custom integrations</span>
                  </li>
                </ul>
                <Button className="w-full bg-brand-red hover:bg-brand-red-hover neon-glow">
                  Start free 14-day trial
                </Button>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="glass-card border-white/10 hover:border-brand-red/30 transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-white font-display">Pro</CardTitle>
                <CardDescription className="text-muted-1">For large organizations</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-bold text-white">$65</span>
                  <span className="text-muted-1">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Unlimited leads</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">White-label solution</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Advanced AI automation</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Custom reporting & dashboards</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Dedicated success manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                    <span className="text-muted-1">Full API access</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-transparent border-brand-red text-brand-red hover:bg-brand-red hover:text-white"
                  variant="outline"
                >
                  Contact sales
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-1 mb-4">Need something custom?</p>
            <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 bg-transparent" asChild>
              <Link href="/enterprise">Contact our Enterprise team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-display text-white mb-6">Frequently asked questions</h2>
            <p className="text-xl text-muted-1">Everything you need to know about LeadFlow</p>
          </div>

          <div className="space-y-6">
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white">How does the 14-day free trial work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-1">
                  Start using LeadFlow immediately with full access to all features.
                  Cancel anytime during the trial period.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Can I integrate with my existing CRM?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-1">
                  Yes! We support integrations with popular CRMs like Salesforce, HubSpot, Pipedrive, and many others
                  through our API and native connectors.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Is my data secure and compliant?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-1">
                  Absolutely. We're SOC 2 certified, GDPR compliant, and use bank-grade encryption. Your data is stored
                  securely and never shared with third parties.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-white">What kind of support do you provide?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-1">
                  We offer email support for all plans, priority support for Growth plans, and dedicated success
                  managers for Pro plans. Plus comprehensive documentation and video tutorials.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 px-4 border-y border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Security & Compliance</h3>
            <p className="text-muted-1">Enterprise-grade security you can trust</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <Shield className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">SOC 2 Certified</h4>
              <p className="text-sm text-muted-1">Independently audited security controls</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">GDPR Compliant</h4>
              <p className="text-sm text-muted-1">Full compliance with data protection regulations</p>
            </div>
            <div>
              <Lock className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">256-bit Encryption</h4>
              <p className="text-sm text-muted-1">Bank-grade encryption for all data</p>
            </div>
            <div>
              <Clock className="w-12 h-12 text-brand-red mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">99.9% Uptime</h4>
              <p className="text-sm text-muted-1">Reliable infrastructure you can count on</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-brand-red/10 to-transparent">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl font-bold font-display text-white mb-8">Ready to transform your prospecting?</h2>
          <p className="text-xl text-muted-1 mb-10">
            Join thousands of B2B companies already using LeadFlow to scale their outreach and grow revenue
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="text-lg px-10 py-7 bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold"
              asChild
            >
              <Link href="/auth/signup">Start free 14-day trial</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-10 py-7 border-white/20 text-white hover:bg-white/5 bg-transparent"
            >
              Book a demo
            </Button>
          </div>
          <p className="text-sm text-muted-1 mt-6">No setup fees • No long-term contracts • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-1 text-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-brand-red rounded-xl flex items-center justify-center neon-glow">
                  <Heart className="w-6 h-6 text-white fill-white" />
                </div>
                <span className="text-2xl font-bold font-display">LeadFlow</span>
              </div>
              <p className="text-muted-1 mb-6 max-w-md">
                The all-in-one platform for B2B lead capture and automated outreach on WhatsApp and email.
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
              <h3 className="font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Support</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Status
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
