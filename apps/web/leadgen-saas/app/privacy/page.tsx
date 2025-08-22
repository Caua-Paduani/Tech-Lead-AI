import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Lock, Eye, FileText, Mail, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicyPage() {
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
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="w-20 h-20 bg-brand-red/20 rounded-xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-brand-red" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-1 mb-8">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-muted-1">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: August 2025
            </div>
            <div className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Version 2.1
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-12 px-4 bg-surface-1/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Privacy at a Glance</h2>
            <p className="text-muted-1">Key points about how we handle your data</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Data Protection</h3>
              <p className="text-muted-1 text-sm">
                We use bank-grade encryption and never sell your personal information to third parties.
              </p>
            </Card>

            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Transparency</h3>
              <p className="text-muted-1 text-sm">
                Clear information about what data we collect, why we collect it, and how we use it.
              </p>
            </Card>

            <Card className="glass-card border-white/10 text-center p-6">
              <div className="w-16 h-16 bg-brand-red/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Your Rights</h3>
              <p className="text-muted-1 text-sm">
                Full control over your data with rights to access, modify, or delete your information.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {/* Information We Collect */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Information We Collect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Account Information</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Name, email address, and contact information</li>
                    <li>Company name and business details</li>
                    <li>Billing and payment information</li>
                    <li>Profile preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Usage Data</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>How you interact with our platform and features</li>
                    <li>Campaign performance and analytics data</li>
                    <li>Device information and IP addresses</li>
                    <li>Browser type and operating system</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Lead and Contact Data</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Contact information you upload or import</li>
                    <li>Communication history and engagement data</li>
                    <li>Custom fields and tags you create</li>
                    <li>Integration data from connected services</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-brand-red" />
                  How We Use Your Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Service Delivery</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Provide and maintain our lead generation platform</li>
                    <li>Process and deliver your campaigns</li>
                    <li>Generate analytics and performance reports</li>
                    <li>Facilitate integrations with third-party services</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Communication</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Send service-related notifications and updates</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Share product updates and new features</li>
                    <li>Send billing and account information</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Improvement and Security</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Improve our platform and develop new features</li>
                    <li>Monitor for security threats and fraud prevention</li>
                    <li>Analyze usage patterns to optimize performance</li>
                    <li>Ensure compliance with legal requirements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-brand-red" />
                  Data Sharing and Disclosure
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">We never sell your personal data.</p>
                  <p>Your information is only shared in the limited circumstances outlined below.</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Service Providers</h4>
                  <p className="mb-3">We may share data with trusted third-party service providers who help us:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Process payments and billing</li>
                    <li>Provide customer support</li>
                    <li>Deliver email and messaging services</li>
                    <li>Analyze platform usage and performance</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Legal Requirements</h4>
                  <p className="mb-3">We may disclose information when required by law or to:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Comply with legal processes or government requests</li>
                    <li>Protect our rights, property, or safety</li>
                    <li>Prevent fraud or security threats</li>
                    <li>Enforce our terms of service</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Business Transfers</h4>
                  <p>
                    In the event of a merger, acquisition, or sale of assets, your information may be transferred as
                    part of the business transaction, subject to the same privacy protections.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Lock className="w-6 h-6 mr-3 text-brand-red" />
                  Data Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <p className="text-lg">We implement industry-leading security measures to protect your information:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Technical Safeguards</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>256-bit SSL/TLS encryption</li>
                      <li>Encrypted data storage</li>
                      <li>Regular security audits</li>
                      <li>Multi-factor authentication</li>
                      <li>Intrusion detection systems</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Operational Security</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>SOC 2 Type II compliance</li>
                      <li>GDPR compliance</li>
                      <li>Regular employee training</li>
                      <li>Access controls and monitoring</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-400 font-semibold mb-2">99.9% Uptime SLA</p>
                  <p>
                    Our infrastructure is designed for reliability and security with redundant systems and regular
                    backups.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Eye className="w-6 h-6 mr-3 text-brand-red" />
                  Your Privacy Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <p className="text-lg">You have the following rights regarding your personal information:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Access and Control</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Access your personal data</li>
                      <li>Update or correct information</li>
                      <li>Download your data</li>
                      <li>Delete your account</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Communication Preferences</h4>
                    <ul className="space-y-2 list-disc list-inside">
                      <li>Opt out of marketing emails</li>
                      <li>Control notification settings</li>
                      <li>Manage data processing</li>
                      <li>Request data portability</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <p className="text-blue-400 font-semibold mb-2">Exercise Your Rights</p>
                  <p>
                    To exercise any of these rights, contact us at{" "}
                    <a  className="text-brand-red hover:underline">
                      techleadadm@gmail.com
                    </a>{" "}
                    or through your account settings.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Calendar className="w-6 h-6 mr-3 text-brand-red" />
                  Data Retention
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>
                  We retain your information for as long as necessary to provide our services and comply with legal
                  obligations:
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-medium text-white">Account Information</span>
                    <span>Duration of account + 7 years</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-medium text-white">Campaign Data</span>
                    <span>Duration of account + 3 years</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-medium text-white">Usage Analytics</span>
                    <span>2 years from collection</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/10">
                    <span className="font-medium text-white">Support Communications</span>
                    <span>3 years from last contact</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-medium text-white">Marketing Data</span>
                    <span>Until opt-out or 5 years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-brand-red" />
                  International Data Transfers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>
                  AceOfHeartsLeads operates globally. Your information may be transferred to and processed in countries
                  other than your own, including the United States and European Union.
                </p>

                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold mb-2">Adequate Protection</p>
                  <p>
                    We ensure appropriate safeguards are in place for international transfers, including Standard
                    Contractual Clauses and adequacy decisions where applicable.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Transfer Safeguards</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>EU-US Data Privacy Framework compliance</li>
                    <li>Standard Contractual Clauses (SCCs)</li>
                    <li>Binding Corporate Rules where applicable</li>
                    <li>Regular adequacy assessments</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <Mail className="w-6 h-6 mr-3 text-brand-red" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-1">
                <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Privacy Team</h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-white">Email:</strong>{" "}
                        <a  className="text-brand-red hover:underline">
                          techleadadm@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong className="text-white">Response Time:</strong> Within 72 hours
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Data Protection Officer</h4>
                    <div className="space-y-2">
                      <p>
                        <strong className="text-white">Email:</strong>{" "}
                        <a href="cauapaduani@gmail.com" className="text-brand-red hover:underline">
                          cauapaduani@gmail.com
                        </a>
                      </p>
                      <p>
                        <strong className="text-white">For:</strong> GDPR and data protection inquiries
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-brand-red/10 border border-brand-red/20 rounded-lg p-4">
                  <p className="text-white font-semibold mb-2">Regulatory Authorities</p>
                  <p>
                    You have the right to lodge a complaint with your local data protection authority if you believe we
                    have not addressed your concerns adequately.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card className="glass-card border-white/10">
              <CardHeader>
                <CardTitle className="text-2xl text-white flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-brand-red" />
                  Policy Updates
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-1">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                  legal requirements, or other factors.
                </p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">How We Notify You</h4>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Email notification for material changes</li>
                    <li>In-app notifications when you log in</li>
                    <li>Updated "Last Modified" date at the top of this policy</li>
                    <li>30-day notice period for significant changes</li>
                  </ul>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
                  <p className="text-orange-400 font-semibold mb-2">Continued Use</p>
                  <p>
                    Your continued use of our services after policy updates constitutes acceptance of the revised terms.
                    If you disagree with changes, you may close your account.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-brand-red/10 to-transparent">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold font-display text-white mb-6">Questions about your privacy?</h2>
          <p className="text-xl text-muted-1 mb-8">
            Our privacy team is here to help. Contact us anytime with questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-brand-red hover:bg-brand-red-hover neon-glow font-semibold" asChild>
              <a href="techleadadm@gmail.com">Contact Privacy Team</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 bg-transparent"
              asChild
            >
              <Link href="/">Back to Home</Link>
            </Button>
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
                  <Link href="/#features" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
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
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <ul className="space-y-3 text-muted-1">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    GDPR
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
